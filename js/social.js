export const API = 'https://wenruo-api.carglekasemeier602.workers.dev';

export function initMessageBoard() {
  const board = document.getElementById('messageBoard');
  if (!board) return;
  renderMessages(board);
}

export function initBlog() {
  const listEl = document.getElementById('blogList');
  const toggleBtn = document.getElementById('blogAdminToggle');
  const panel = document.getElementById('blogAdminPanel');
  const submitBtn = document.getElementById('blogSubmit');
  const manageToggle = document.getElementById('blogManageToggle');
  const managePanel = document.getElementById('blogManagePanel');
  const manageLoginBtn = document.getElementById('manageLoginBtn');

  if (!listEl) return;

  let managePassword = '';
  let isManaging = false;

  loadBlogList(listEl, { password: managePassword });

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = panel.style.display === 'none';
      panel.style.display = isHidden ? 'block' : 'none';
      toggleBtn.textContent = isHidden ? '收起发文' : '管理员发文';
    });
  }

  if (panel) {
    panel.addEventListener('click', (e) => {
      if (e.target.classList.contains('blog-media-add')) {
        const type = e.target.dataset.type;
        addMediaInput(panel, type);
      }
      if (e.target.classList.contains('blog-media-remove')) {
        e.target.closest('.blog-media-row')?.remove();
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
      const password = document.getElementById('blogPassword')?.value.trim();
      const title = document.getElementById('blogTitle')?.value.trim();
      const content = document.getElementById('blogContent')?.value.trim();

      if (!password || !title || !content) {
        submitBtn.textContent = '请填写完整';
        setTimeout(() => { submitBtn.textContent = '发布'; }, 1500);
        return;
      }

      const { images, videos } = collectMedia(panel);
      const pinned = false;

      submitBtn.disabled = true;
      submitBtn.textContent = '发布中…';

      try {
        const res = await fetch(`${API}/api/posts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password, title, content, media: { images, videos }, pinned }),
        });

        if (res.status === 401) {
          submitBtn.textContent = '密码错误';
        } else if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        } else {
          submitBtn.textContent = '发布成功';
          document.getElementById('blogTitle').value = '';
          document.getElementById('blogContent').value = '';
          panel.querySelectorAll('.blog-media-row').forEach((r) => r.remove());
          await loadBlogList(listEl, { password: managePassword });
        }
      } catch (e) {
        submitBtn.textContent = '发布失败';
      } finally {
        submitBtn.disabled = false;
        setTimeout(() => { submitBtn.textContent = '发布'; }, 2000);
      }
    });
  }

  if (manageToggle && managePanel) {
    manageToggle.addEventListener('click', () => {
      const isHidden = managePanel.style.display === 'none';
      managePanel.style.display = isHidden ? 'block' : 'none';
      manageToggle.textContent = isHidden ? '收起管理' : '管理';
      if (!isHidden) {
        isManaging = false;
        managePassword = '';
        loadBlogList(listEl, { password: '' });
      }
    });
  }

  if (manageLoginBtn) {
    manageLoginBtn.addEventListener('click', async () => {
      const pwd = document.getElementById('managePassword')?.value.trim();
      if (!pwd) return;
      manageLoginBtn.disabled = true;
      manageLoginBtn.textContent = '验证中…';
      try {
        const res = await fetch(`${API}/api/posts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: pwd, title: ' ', content: ' ' }),
        });
        if (res.status === 401) {
          manageLoginBtn.textContent = '密码错误';
        } else if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        } else {
          managePassword = pwd;
          isManaging = true;
          manageLoginBtn.textContent = '验证成功';
          managePanel.style.display = 'none';
          manageToggle.textContent = '退出管理';
          await loadBlogList(listEl, { password: pwd });
        }
      } catch (e) {
        manageLoginBtn.textContent = '验证失败';
      } finally {
        manageLoginBtn.disabled = false;
        setTimeout(() => { manageLoginBtn.textContent = '进入管理模式'; }, 2000);
      }
    });
  }

  listEl.addEventListener('click', (e) => {
    const card = e.target.closest('.blog-card');
    const id = card?.dataset.id;
    if (!id || !managePassword) return;

    if (e.target.classList.contains('blog-action-edit')) {
      openBlogEditor(id, managePassword, () => loadBlogList(listEl, { password: managePassword }));
      return;
    }
    if (e.target.classList.contains('blog-action-pin')) {
      togglePin(id, e.target.dataset.pinned !== 'true', managePassword, () => loadBlogList(listEl, { password: managePassword }));
      return;
    }
    if (e.target.classList.contains('blog-action-delete')) {
      if (confirm('确定删除这篇文章吗？')) {
        deletePost(id, managePassword, () => loadBlogList(listEl, { password: managePassword }));
      }
      return;
    }
    if (e.target.classList.contains('blog-read-more')) {
      openBlogDetail(id);
    }
  });
}

function addMediaInput(panel, type, value = '') {
  const container = panel.querySelector('.blog-media-list');
  if (!container) return;
  const placeholder = type === 'image' ? '图片链接，例如 https://i.imgur.com/xxx.jpg' : '视频链接，例如 https://.../xxx.mp4 或 B站/YouTube 链接';
  const row = document.createElement('div');
  row.className = 'blog-media-row';
  row.dataset.type = type;
  row.innerHTML = `
    <input type="text" placeholder="${placeholder}" value="${escapeHtml(value)}">
    <button type="button" class="blog-media-remove" title="移除">×</button>
  `;
  container.appendChild(row);
}

function collectMedia(panel) {
  const images = [...panel.querySelectorAll('.blog-media-row[data-type="image"] input')]
    .map((i) => i.value.trim()).filter(Boolean);
  const videos = [...panel.querySelectorAll('.blog-media-row[data-type="video"] input')]
    .map((i) => i.value.trim()).filter(Boolean);
  return { images, videos };
}

async function loadBlogList(listEl, options = {}) {
  listEl.innerHTML = '<div class="blog-loading">加载中…</div>';
  try {
    const res = await fetch(`${API}/api/posts`);
    const data = await res.json();
    const posts = data.posts || [];

    if (posts.length === 0) {
      listEl.innerHTML = '<div class="blog-empty">暂无文章，管理员可点击右上角发文。</div>';
      return;
    }

    const isManaging = !!options.password;

    listEl.innerHTML = posts.map((post) => {
      const media = post.media || { images: [], videos: [] };
      const hasMedia = media.images?.length || media.videos?.length;
      const pinBadge = post.pinned ? '<span class="blog-pin-badge">置顶</span>' : '';
      const actions = isManaging ? `
        <div class="blog-card-actions">
          <button class="blog-action-edit">编辑</button>
          <button class="blog-action-pin" data-pinned="${post.pinned ? 'true' : 'false'}">${post.pinned ? '取消置顶' : '置顶'}</button>
          <button class="blog-action-delete">删除</button>
        </div>` : '';
      return `
      <article class="blog-card ${post.pinned ? 'blog-card-pinned' : ''}" data-id="${escapeHtml(post.id)}">
        <div class="blog-card-header">
          <h4 class="blog-card-title">${escapeHtml(post.title)}</h4>
          ${pinBadge}
        </div>
        <p class="blog-card-summary">${escapeHtml(post.summary || '')}</p>
        ${hasMedia ? '<div class="blog-card-media">' + renderMediaIcons(media) + '</div>' : ''}
        ${actions}
        <div class="blog-card-meta">
          <span>${formatTime(post.createdAt)}</span>
          <button class="blog-read-more">阅读全文</button>
        </div>
      </article>`;
    }).join('');

    listEl.querySelectorAll('.blog-read-more').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.blog-card');
        const id = card?.dataset.id;
        if (id) openBlogDetail(id);
      });
    });
  } catch (e) {
    listEl.innerHTML = '<div class="blog-empty">博客加载失败，点击重试</div>';
    listEl.querySelector('.blog-empty')?.addEventListener('click', () => loadBlogList(listEl, options));
  }
}

function renderMediaIcons(media) {
  const icons = [];
  if (media.images?.length) icons.push(`<span class="blog-media-tag">📷 ${media.images.length}</span>`);
  if (media.videos?.length) icons.push(`<span class="blog-media-tag">🎬 ${media.videos.length}</span>`);
  return icons.join('');
}

async function openBlogDetail(id) {
  const overlay = document.createElement('div');
  overlay.className = 'blog-modal-overlay';
  overlay.innerHTML = '<div class="blog-modal-loading">加载中…</div>';
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  try {
    const res = await fetch(`${API}/api/posts/${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const post = data.post;
    const media = post.media || { images: [], videos: [] };

    let mediaHtml = '';
    if (media.images?.length) {
      mediaHtml += `<div class="blog-detail-images">${media.images.map((url) => `<img src="${escapeHtml(url)}" alt="" loading="lazy">`).join('')}</div>`;
    }
    if (media.videos?.length) {
      mediaHtml += `<div class="blog-detail-videos">${media.videos.map((url) => {
        const embed = getVideoEmbed(url);
        return embed || `<video src="${escapeHtml(url)}" controls preload="metadata"></video>`;
      }).join('')}</div>`;
    }

    overlay.innerHTML = `
      <div class="blog-modal">
        <button class="blog-modal-close" aria-label="关闭">&times;</button>
        <h3 class="blog-modal-title">${escapeHtml(post.title)}</h3>
        <div class="blog-modal-meta">${formatTime(post.createdAt)}</div>
        <div class="blog-modal-body">${escapeHtml(post.content).replace(/\n/g, '<br>')}</div>
        ${mediaHtml}
      </div>`;

    overlay.querySelector('.blog-modal-close').addEventListener('click', close);
  } catch (e) {
    overlay.innerHTML = '<div class="blog-modal"><p>加载失败</p></div>';
  }
}

function getVideoEmbed(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('bilibili.com') || u.hostname.includes('b23.tv')) {
      let bvid = u.searchParams.get('bvid');
      if (!bvid) {
        const m = u.pathname.match(/\/(BV[a-zA-Z0-9]+)\/?/i) || u.pathname.match(/^(BV[a-zA-Z0-9]+)\/?$/i);
        bvid = m ? m[1] : '';
      }
      if (bvid) {
        const page = u.searchParams.get('p') || '1';
        return `<iframe src="https://player.bilibili.com/player.html?bvid=${encodeURIComponent(bvid)}&page=${encodeURIComponent(page)}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>`;
      }
    }
    if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) {
      let vid = '';
      if (u.hostname.includes('youtu.be')) vid = u.pathname.slice(1).split('/')[0];
      else vid = u.searchParams.get('v');
      if (vid) return `<iframe src="https://www.youtube.com/embed/${encodeURIComponent(vid)}" frameborder="0" allowfullscreen></iframe>`;
    }
  } catch {}
  return '';
}

async function openBlogEditor(id, password, onSaved) {
  const overlay = document.createElement('div');
  overlay.className = 'blog-modal-overlay';
  overlay.innerHTML = '<div class="blog-modal-loading">加载中…</div>';
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

  try {
    const res = await fetch(`${API}/api/posts/${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const post = data.post;
    const media = post.media || { images: [], videos: [] };

    overlay.innerHTML = `
      <div class="blog-modal blog-edit-modal">
        <button class="blog-modal-close" aria-label="关闭">&times;</button>
        <h3 class="blog-modal-title">编辑文章</h3>
        <input type="text" id="editTitle" placeholder="标题" maxlength="120" value="${escapeHtml(post.title)}">
        <textarea id="editContent" placeholder="正文内容…" rows="8">${escapeHtml(post.content)}</textarea>
        <div class="blog-media-controls">
          <button type="button" class="blog-media-add" data-type="image">添加图片</button>
          <button type="button" class="blog-media-add" data-type="video">添加视频</button>
        </div>
        <div class="blog-media-list" id="editMediaList"></div>
        <label class="blog-pinned-label"><input type="checkbox" id="editPinned" ${post.pinned ? 'checked' : ''}> 置顶</label>
        <button class="blog-submit" id="editSubmit">保存</button>
      </div>`;

    const editPanel = overlay.querySelector('.blog-edit-modal');
    media.images.forEach((url) => addMediaInput(editPanel, 'image', url));
    media.videos.forEach((url) => addMediaInput(editPanel, 'video', url));

    editPanel.addEventListener('click', (e) => {
      if (e.target.classList.contains('blog-media-add')) {
        addMediaInput(editPanel, e.target.dataset.type);
      }
      if (e.target.classList.contains('blog-media-remove')) {
        e.target.closest('.blog-media-row')?.remove();
      }
    });

    overlay.querySelector('.blog-modal-close').addEventListener('click', close);

    overlay.querySelector('#editSubmit').addEventListener('click', async () => {
      const title = overlay.querySelector('#editTitle').value.trim();
      const content = overlay.querySelector('#editContent').value.trim();
      const pinned = overlay.querySelector('#editPinned').checked;
      const { images, videos } = collectMedia(editPanel);
      const btn = overlay.querySelector('#editSubmit');
      btn.disabled = true;
      btn.textContent = '保存中…';
      try {
        const res = await fetch(`${API}/api/posts/${encodeURIComponent(id)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password, title, content, media: { images, videos }, pinned }),
        });
        if (res.status === 401) {
          btn.textContent = '密码错误';
        } else if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        } else {
          btn.textContent = '保存成功';
          close();
          onSaved();
        }
      } catch (e) {
        btn.textContent = '保存失败';
      } finally {
        btn.disabled = false;
        setTimeout(() => { if (btn) btn.textContent = '保存'; }, 2000);
      }
    });
  } catch (e) {
    overlay.innerHTML = '<div class="blog-modal"><p>加载失败</p></div>';
  }
}

async function togglePin(id, pinned, password, onDone) {
  try {
    const res = await fetch(`${API}/api/posts/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, pinned }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    onDone();
  } catch (e) {
    alert('操作失败');
  }
}

async function deletePost(id, password, onDone) {
  try {
    const res = await fetch(`${API}/api/posts/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    onDone();
  } catch (e) {
    alert('删除失败');
  }
}

export function initSaveBackgroundImage() {
  const btn = document.getElementById('saveBgImage');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    const bg = document.getElementById('bg-image');
    if (!bg) return;

    const objectUrl = bg.dataset.bgObjectUrl;
    if (!objectUrl) {
      btn.textContent = '暂无背景可保存';
      setTimeout(() => { btn.textContent = '保存当前背景'; }, 2000);
      return;
    }

    btn.textContent = '下载中…';
    try {
      const res = await fetch(objectUrl);
      const blob = await res.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      const ext = blob.type.split('/')[1] || 'jpg';
      a.download = `wenruo-bg-${Date.now()}.${ext}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(downloadUrl);
      btn.textContent = '已保存';
    } catch (e) {
      btn.textContent = '保存失败';
    }
    setTimeout(() => { btn.textContent = '保存当前背景'; }, 2000);
  });
}

function skeletonHtml() {
  return `<div class="msg-skeleton">
    <div class="msg-skeleton-item"></div>
    <div class="msg-skeleton-item"></div>
    <div class="msg-skeleton-item" style="width:80%"></div>
  </div>`;
}

async function renderMessages(board) {
  board.innerHTML = skeletonHtml();
  try {
    const res = await fetch(`${API}/api/messages`);
    const data = await res.json();
    const messages = data.messages || [];
    board.innerHTML = `
      <form class="msg-form" id="msgForm">
        <input type="text" id="msgName" placeholder="你的名字" maxlength="30" required>
        <textarea id="msgText" placeholder="想说点什么…" maxlength="500" rows="3" required></textarea>
        <button type="submit" class="msg-submit">留言</button>
      </form>
      <div class="msg-list">
        ${messages.length === 0 ? '<div class="msg-empty">还没有留言，说点什么吧。</div>' : ''}
        ${messages.map(m => `
          <div class="msg-item">
            <div class="msg-meta">
              <span class="msg-name">${escapeHtml(m.name)}</span>
              <span class="msg-time">${formatTime(m.time)}</span>
            </div>
            <div class="msg-content">${escapeHtml(m.message)}</div>
          </div>`).join('')}
      </div>`;
    board.querySelector('#msgForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = board.querySelector('#msgName').value.trim();
      const message = board.querySelector('#msgText').value.trim();
      if (!name || !message) return;
      const btn = board.querySelector('.msg-submit');
      btn.disabled = true;
      btn.textContent = '发送中…';
      try {
        const res = await fetch(`${API}/api/messages`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, message }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        renderMessages(board);
      } catch (e) {
        btn.textContent = '发送失败，重试';
        btn.disabled = false;
      }
    });
  } catch (e) {
    board.innerHTML = '<div class="msg-error">加载失败，点击重试</div>';
    board.querySelector('.msg-error').addEventListener('click', () => renderMessages(board));
  }
}

export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.contact-submit');
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = '发送中…';
    try {
      await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.querySelector('#contactName').value,
          email: form.querySelector('#contactEmail').value,
          subject: form.querySelector('#contactSubject').value,
          message: form.querySelector('#contactMessage').value,
        }),
      });
      btn.textContent = '已发送，感谢！';
      form.reset();
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3000);
    } catch (e) {
      btn.textContent = '发送失败，重试';
      btn.disabled = false;
    }
  });
}

export function trackVisit() {
  fetch(`${API}/api/stats`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'visit' }) }).catch(() => {});
}

export function trackPlay() {
  fetch(`${API}/api/stats`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'play' }) }).catch(() => {});
}

export async function loadStats(el) {
  if (!el) return;
  try {
    const res = await fetch(`${API}/api/stats`);
    const data = await res.json();
    el.innerHTML = `
      <div class="stat-item"><span class="stat-num">${data.pv}</span><span class="stat-label">浏览量</span></div>
      <div class="stat-item"><span class="stat-num">${data.uv}</span><span class="stat-label">访客</span></div>
      <div class="stat-item"><span class="stat-num">${data.plays}</span><span class="stat-label">播放</span></div>`;
  } catch (e) {
    el.innerHTML = '<div class="stat-item">统计加载失败</div>';
  }
}

function formatTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const diff = now - d;
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} 分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小时前`;
  return d.toLocaleDateString('zh-CN');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
