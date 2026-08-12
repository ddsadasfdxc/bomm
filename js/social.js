const API = 'https://wenruo-api.carglekasemeier602.workers.dev';

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

  if (!listEl) return;

  loadBlogList(listEl);

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = panel.style.display === 'none';
      panel.style.display = isHidden ? 'block' : 'none';
      toggleBtn.textContent = isHidden ? '收起发文' : '管理员发文';
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

      submitBtn.disabled = true;
      submitBtn.textContent = '发布中…';

      try {
        const res = await fetch(`${API}/api/posts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password, title, content }),
        });

        if (res.status === 401) {
          submitBtn.textContent = '密码错误';
        } else if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        } else {
          submitBtn.textContent = '发布成功';
          document.getElementById('blogTitle').value = '';
          document.getElementById('blogContent').value = '';
          await loadBlogList(listEl);
        }
      } catch (e) {
        submitBtn.textContent = '发布失败';
      } finally {
        submitBtn.disabled = false;
        setTimeout(() => { submitBtn.textContent = '发布'; }, 2000);
      }
    });
  }
}

async function loadBlogList(listEl) {
  listEl.innerHTML = '<div class="blog-loading">加载中…</div>';
  try {
    const res = await fetch(`${API}/api/posts`);
    const data = await res.json();
    const posts = data.posts || [];

    if (posts.length === 0) {
      listEl.innerHTML = '<div class="blog-empty">暂无文章，管理员可点击右上角发文。</div>';
      return;
    }

    listEl.innerHTML = posts.map((post) => `
      <article class="blog-card" data-id="${escapeHtml(post.id)}">
        <h4 class="blog-card-title">${escapeHtml(post.title)}</h4>
        <p class="blog-card-summary">${escapeHtml(post.summary || '')}</p>
        <div class="blog-card-meta">
          <span>${formatTime(post.createdAt)}</span>
          <button class="blog-read-more">阅读全文</button>
        </div>
      </article>
    `).join('');

    listEl.querySelectorAll('.blog-read-more').forEach((btn) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.blog-card');
        const id = card?.dataset.id;
        if (id) openBlogDetail(id);
      });
    });
  } catch (e) {
    listEl.innerHTML = '<div class="blog-empty">博客加载失败，点击重试</div>';
    listEl.querySelector('.blog-empty')?.addEventListener('click', () => loadBlogList(listEl));
  }
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

    overlay.innerHTML = `
      <div class="blog-modal">
        <button class="blog-modal-close" aria-label="关闭">&times;</button>
        <h3 class="blog-modal-title">${escapeHtml(post.title)}</h3>
        <div class="blog-modal-meta">${formatTime(post.createdAt)}</div>
        <div class="blog-modal-body">${escapeHtml(post.content).replace(/\n/g, '<br>')}</div>
      </div>`;

    overlay.querySelector('.blog-modal-close').addEventListener('click', close);
  } catch (e) {
    overlay.innerHTML = '<div class="blog-modal"><p>加载失败</p></div>';
  }
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
