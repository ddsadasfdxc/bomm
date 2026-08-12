const ADMIN_PASSWORD = 'admin';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS },
  });
}

function error(message, status = 500) {
  return json({ error: message }, status);
}

function getClientIp(request) {
  return request.headers.get('cf-connecting-ip')
    || request.headers.get('x-forwarding-for')?.split(',')[0].trim()
    || 'unknown';
}

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return String(h);
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

const MAX_MESSAGES = 100;
const MESSAGES_KEY = 'messages';
const STATS_KEY = 'stats';
const UV_KEY = 'uv';
const POSTS_KEY = 'posts';
const MAX_POSTS = 50;

async function getMessages(kv) {
  const raw = await kv.get(MESSAGES_KEY);
  if (!raw) return [];
  try {
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

async function saveMessages(kv, messages) {
  await kv.put(MESSAGES_KEY, JSON.stringify(messages.slice(0, MAX_MESSAGES)));
}

async function getStats(kv) {
  const raw = await kv.get(STATS_KEY);
  let stats = { pv: 0, plays: 0 };
  if (raw) {
    try {
      stats = JSON.parse(raw);
    } catch {}
  }
  const uvRaw = await kv.get(UV_KEY);
  let uv = 0;
  if (uvRaw) {
    try {
      const set = new Set(JSON.parse(uvRaw));
      uv = set.size;
    } catch {}
  }
  return { pv: Number(stats.pv || 0), uv, plays: Number(stats.plays || 0) };
}

async function recordVisit(kv, request) {
  const stats = await getStats(kv);
  stats.pv += 1;
  await kv.put(STATS_KEY, JSON.stringify(stats));

  const ip = getClientIp(request);
  const ua = request.headers.get('user-agent') || '';
  const visitorId = hash(`${ip}:${ua}`);

  const uvRaw = await kv.get(UV_KEY);
  let uvSet = new Set();
  if (uvRaw) {
    try {
      uvSet = new Set(JSON.parse(uvRaw));
    } catch {}
  }
  uvSet.add(visitorId);
  await kv.put(UV_KEY, JSON.stringify([...uvSet]));
}

async function recordPlay(kv) {
  const stats = await getStats(kv);
  stats.plays += 1;
  await kv.put(STATS_KEY, JSON.stringify(stats));
}

async function getPosts(kv) {
  const raw = await kv.get(POSTS_KEY);
  if (!raw) return [];
  try {
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

async function savePosts(kv, posts) {
  await kv.put(POSTS_KEY, JSON.stringify(posts.slice(0, MAX_POSTS)));
}

function sortPosts(posts) {
  return posts.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  });
}

function buildSummary(content, images, videos) {
  let summary = String(content || '').replace(/[#*`\[\]()]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 200);
  if (!summary && images.length) summary = '[包含图片]';
  if (!summary && videos.length) summary = '[包含视频]';
  return summary;
}

function sanitizeMedia(rawMedia) {
  const images = Array.isArray(rawMedia?.images)
    ? rawMedia.images.filter((u) => typeof u === 'string' && u.trim().startsWith('http')).slice(0, 10)
    : [];
  const videos = Array.isArray(rawMedia?.videos)
    ? rawMedia.videos.filter((u) => typeof u === 'string' && u.trim().startsWith('http')).slice(0, 5)
    : [];
  return { images, videos };
}

async function sendContactEmail(env, entry) {
  const apiKey = env.RESEND_API_KEY || env.SENDGRID_API_KEY || '';
  const to = env.ADMIN_EMAIL || '';
  if (!apiKey || !to) return;

  const subject = `[温若小站] 新联系表单：${entry.subject || '无主题'} - ${entry.name}`;
  const text = `姓名：${entry.name}\n邮箱：${entry.email}\n主题：${entry.subject || '无'}\n时间：${entry.time}\n\n留言：\n${entry.message}`;

  if (env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.FROM_EMAIL || 'onboarding@resend.dev',
          to,
          subject,
          text,
        }),
      });
    } catch {}
    return;
  }

  if (env.SENDGRID_API_KEY) {
    try {
      await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: env.FROM_EMAIL || 'noreply@example.com' },
          subject,
          content: [{ type: 'text/plain', value: text }],
        }),
      });
    } catch {}
  }
}

function verifyAdmin(body) {
  return body && String(body.password || '') === ADMIN_PASSWORD;
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const kv = env.WENRUO_KV;

    if (url.pathname === '/api/health') {
      return json({ status: 'ok', time: Date.now() });
    }

    if (url.pathname === '/api/proxy-image') {
      const type = url.searchParams.get('type') === 'pe' ? 'pe' : 'pc';
      const upstream = `https://api.yppp.net/${type}.php?_=${Date.now()}`;
      try {
        const upstreamRes = await fetch(upstream, { redirect: 'follow' });
        if (!upstreamRes.ok) throw new Error('upstream failed');
        const blob = await upstreamRes.blob();
        return new Response(blob, {
          status: 200,
          headers: {
            'Content-Type': blob.type || 'image/jpeg',
            'Cache-Control': 'no-store',
            ...CORS_HEADERS,
          },
        });
      } catch (e) {
        return error('image proxy failed', 502);
      }
    }

    if (url.pathname === '/api/messages') {
      if (request.method === 'GET') {
        const messages = await getMessages(kv);
        return json({ messages });
      }

      if (request.method === 'POST') {
        const body = await readJson(request);
        const name = String(body.name || '').trim();
        const message = String(body.message || '').trim();

        if (!name || !message) {
          return error('Name and message are required', 400);
        }
        if (name.length > 30 || message.length > 500) {
          return error('Content too long', 400);
        }

        const entry = {
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          name: name.slice(0, 30),
          message: message.slice(0, 500),
          time: new Date().toISOString(),
        };

        const messages = await getMessages(kv);
        messages.unshift(entry);
        await saveMessages(kv, messages);
        return json({ success: true, entry });
      }

      return error('Method not allowed', 405);
    }

    if (url.pathname === '/api/stats') {
      if (request.method === 'GET') {
        const stats = await getStats(kv);
        return json(stats);
      }

      if (request.method === 'POST') {
        const body = await readJson(request);
        const type = body.type === 'play' ? 'play' : 'visit';

        if (type === 'visit') {
          await recordVisit(kv, request);
        } else {
          await recordPlay(kv);
        }

        const stats = await getStats(kv);
        return json(stats);
      }

      return error('Method not allowed', 405);
    }

    if (url.pathname === '/api/contact') {
      if (request.method === 'POST') {
        const body = await readJson(request);
        const name = String(body.name || '').trim();
        const email = String(body.email || '').trim();
        const subject = String(body.subject || '').trim();
        const message = String(body.message || '').trim();

        if (!name || !email || !message) {
          return error('Name, email and message are required', 400);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return error('Invalid email', 400);
        }

        const entry = {
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          name: name.slice(0, 30),
          email: email.slice(0, 100),
          subject: subject.slice(0, 100),
          message: message.slice(0, 2000),
          time: new Date().toISOString(),
        };

        const raw = await kv.get('contacts');
        let contacts = [];
        if (raw) {
          try { contacts = JSON.parse(raw); } catch {}
        }
        contacts.unshift(entry);
        if (contacts.length > 100) contacts.length = 100;
        await kv.put('contacts', JSON.stringify(contacts));

        ctx.waitUntil(sendContactEmail(env, entry));
        return json({ success: true });
      }

      return error('Method not allowed', 405);
    }

    if (url.pathname === '/api/posts') {
      if (request.method === 'GET') {
        const posts = sortPosts(await getPosts(kv));
        return json({
          posts: posts.map((p) => ({
            id: p.id,
            title: p.title,
            summary: p.summary,
            pinned: !!p.pinned,
            media: p.media || { images: [], videos: [] },
            createdAt: p.createdAt,
            updatedAt: p.updatedAt,
          })),
        });
      }

      if (request.method === 'POST') {
        const body = await readJson(request);
        if (!verifyAdmin(body)) {
          return error('Unauthorized', 401);
        }

        const title = String(body.title || '').trim();
        const content = String(body.content || '').trim();

        if (!title || !content) {
          return error('Title and content are required', 400);
        }
        if (title.length > 120 || content.length > 20000) {
          return error('Content too long', 400);
        }

        const { images, videos } = sanitizeMedia(body.media);
        const pinned = body.pinned === true;

        const now = new Date().toISOString();
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        const summary = buildSummary(content, images, videos);

        const entry = {
          id,
          title: title.slice(0, 120),
          content: content.slice(0, 20000),
          summary,
          media: { images, videos },
          pinned,
          createdAt: now,
          updatedAt: now,
        };

        const posts = sortPosts(await getPosts(kv));
        posts.unshift(entry);
        await savePosts(kv, posts);
        return json({ success: true, post: entry });
      }

      return error('Method not allowed', 405);
    }

    const postDetailMatch = url.pathname.match(/^\/api\/posts\/([a-zA-Z0-9_-]+)$/);
    if (postDetailMatch) {
      const postId = postDetailMatch[1];

      if (request.method === 'GET') {
        const posts = await getPosts(kv);
        const post = posts.find((p) => p.id === postId);
        if (!post) {
          return error('Post not found', 404);
        }
        return json({ post });
      }

      if (request.method === 'PUT') {
        const body = await readJson(request);
        if (!verifyAdmin(body)) {
          return error('Unauthorized', 401);
        }

        const title = String(body.title || '').trim();
        const content = String(body.content || '').trim();
        if (!title || !content) {
          return error('Title and content are required', 400);
        }
        if (title.length > 120 || content.length > 20000) {
          return error('Content too long', 400);
        }

        const posts = sortPosts(await getPosts(kv));
        const index = posts.findIndex((p) => p.id === postId);
        if (index === -1) {
          return error('Post not found', 404);
        }

        const { images, videos } = sanitizeMedia(body.media);
        const pinned = body.pinned === true;
        const now = new Date().toISOString();

        posts[index] = {
          ...posts[index],
          title: title.slice(0, 120),
          content: content.slice(0, 20000),
          summary: buildSummary(content, images, videos),
          media: { images, videos },
          pinned,
          updatedAt: now,
        };

        await savePosts(kv, posts);
        return json({ success: true, post: posts[index] });
      }

      if (request.method === 'PATCH') {
        const body = await readJson(request);
        if (!verifyAdmin(body)) {
          return error('Unauthorized', 401);
        }

        const posts = sortPosts(await getPosts(kv));
        const index = posts.findIndex((p) => p.id === postId);
        if (index === -1) {
          return error('Post not found', 404);
        }

        posts[index].pinned = body.pinned === true;
        posts[index].updatedAt = new Date().toISOString();
        await savePosts(kv, sortPosts(posts));
        return json({ success: true, post: posts[index] });
      }

      if (request.method === 'DELETE') {
        const body = await readJson(request);
        if (!verifyAdmin(body)) {
          return error('Unauthorized', 401);
        }
        const posts = await getPosts(kv);
        const filtered = posts.filter((p) => p.id !== postId);
        if (filtered.length === posts.length) {
          return error('Post not found', 404);
        }
        await savePosts(kv, filtered);
        return json({ success: true });
      }

      return error('Method not allowed', 405);
    }

    return error('Not found', 404);
  },
};
