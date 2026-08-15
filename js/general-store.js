const API = 'https://wenruo-api.carglekasemeier602.workers.dev';

export function initGeneralStore() {
  const mount = document.getElementById('generalStore');
  if (!mount) return;
  renderStore(mount);
}

function renderStore(mount) {
  mount.innerHTML = `
    <div class="gs-section">
      <div class="explore-header">
        <h2 class="explore-title">解忧杂货铺</h2>
        <p class="explore-desc">心事无处安放，可寄于此</p>
      </div>

      <div class="gs-card">
        <div class="gs-card-head">
          <span class="gs-badge">📮 匿名信笺</span>
          <p class="gs-card-desc">写下你的心事、烦恼或秘密。店主会在收到后，悄悄读信。</p>
        </div>

        <form class="gs-form" id="gsForm" novalidate>
          <div class="gs-row">
            <input type="text" id="gsNickname" class="gs-input" placeholder="你的称呼（可选，匿名也可）" maxlength="20" autocomplete="off">
            <input type="email" id="gsContact" class="gs-input" placeholder="回信邮箱（可选）" maxlength="60" autocomplete="off">
          </div>
          <textarea id="gsContent" class="gs-textarea" placeholder="写下你的心事…（500 字以内）" maxlength="500" rows="5" required></textarea>
          <div class="gs-form-foot">
            <span class="gs-count"><em id="gsCount">0</em>/500</span>
            <button type="submit" class="gs-submit" id="gsSubmit">
              <span class="gs-submit-text">投递心事</span>
              <span class="gs-submit-sending" hidden>投递中…</span>
            </button>
          </div>
        </form>

        <p class="gs-hint">🔒 内容仅店主可见 · 可匿名 · 不公开</p>
        <p class="gs-fallback" id="gsFallback" hidden>
          在线投递未能送达时，可点击
          <a id="gsMailto" href="mailto:3156219708@qq.com?subject=解忧杂货铺·心事投递&body=">此处</a>
          通过邮件客户端直接寄出。
        </p>
      </div>
    </div>
  `;

  const form = mount.querySelector('#gsForm');
  const content = mount.querySelector('#gsContent');
  const count = mount.querySelector('#gsCount');
  const submit = mount.querySelector('#gsSubmit');
  const fallback = mount.querySelector('#gsFallback');
  const mailto = mount.querySelector('#gsMailto');

  content.addEventListener('input', () => {
    count.textContent = content.value.length;
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nickname = mount.querySelector('#gsNickname').value.trim();
    const contact = mount.querySelector('#gsContact').value.trim();
    const message = content.value.trim();

    if (!message) {
      content.focus();
      return;
    }

    // 组装 mailto 兜底链接（随时可点）
    const subject = encodeURIComponent('解忧杂货铺·心事投递');
    const body = encodeURIComponent(
      `称呼：${nickname || '匿名'}\n回信邮箱：${contact || '未提供'}\n\n${message}`
    );
    mailto.href = `mailto:3156219708@qq.com?subject=${subject}&body=${body}`;

    submit.disabled = true;
    submit.classList.add('is-sending');
    submit.querySelector('.gs-submit-text').hidden = true;
    submit.querySelector('.gs-submit-sending').hidden = false;

    try {
      const res = await fetch(`${API}/api/general-store`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname, contact, message }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data && data.success === false) throw new Error(data.error || '投递失败');
      mount.querySelector('.gs-card').classList.add('gs-done');
      mount.querySelector('.gs-card-head').innerHTML = `
        <div class="gs-success">
          <div class="gs-success-icon">✉️</div>
          <p class="gs-success-title">心事已投入信箱</p>
          <p class="gs-success-sub">店主会认真读完每一封来信。</p>
        </div>`;
      form.remove();
      fallback.hidden = true;
    } catch (err) {
      // 后端不可达时，给出 mailto 兜底
      fallback.hidden = false;
      submit.disabled = false;
      submit.classList.remove('is-sending');
      submit.querySelector('.gs-submit-text').hidden = false;
      submit.querySelector('.gs-submit-sending').hidden = true;
    }
  });
}