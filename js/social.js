/**
 * 留言板 + 联系表单 + 访问统计
 * 部署 wenruo-api 后，把下面 API 地址替换为你的 Vercel 域名
 */

const API = 'https://wenruo-api.vercel.app';

export function initMessageBoard() {
  const board = document.getElementById('messageBoard');
  if (!board) return;
  renderMessages(board);
}

async function renderMessages(board) {
  board.innerHTML = '<div class="msg-loading"><div class="ink-spinner"></div></div>';
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
        await fetch(`${API}/api/messages`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, message }),
        });
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