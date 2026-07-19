/**
 * Gmail 别名生成器
 */

export function openGmailAlias() {
  const overlay = document.createElement('div');
  overlay.className = 'note-overlay';
  overlay.innerHTML = `
    <div class="note-modal alias-modal" style="max-width:560px">
      <button class="note-modal-close">&times;</button>
      <div class="note-modal-title">📧 Gmail 别名生成器</div>
      <div class="note-modal-meta">利用点号和加号规则，一个邮箱变多个</div>
      <div class="alias-form">
        <input type="text" id="aliasPrefix" placeholder="输入邮箱前缀，如 yourname">
        <span class="alias-domain">@gmail.com</span>
        <button id="aliasGenerate" class="alias-btn">生成别名</button>
      </div>
      <div class="alias-results">
        <div class="alias-section">
          <div class="alias-section-hd"><span>原始邮箱</span><span class="alias-count" id="orgCount">(1)</span></div>
          <textarea id="orgAliases" readonly rows="1"></textarea>
        </div>
        <div class="alias-section">
          <div class="alias-section-hd"><span>点号别名</span><span class="alias-count" id="dotCount">(0)</span></div>
          <textarea id="dotAliases" readonly rows="4"></textarea>
        </div>
        <div class="alias-section">
          <div class="alias-section-hd"><span>加号别名</span><span class="alias-count" id="plusCount">(0)</span></div>
          <textarea id="plusAliases" readonly rows="6"></textarea>
        </div>
      </div>
      <div class="alias-btns">
        <button id="copyAllAlias" class="alias-btn alias-btn-copy">复制全部</button>
        <button id="copyDotAlias" class="alias-btn alias-btn-copy">复制点号</button>
        <button id="copyPlusAlias" class="alias-btn alias-btn-copy">复制加号</button>
        <button id="exportAllAlias" class="alias-btn alias-btn-export">导出全部</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.querySelector('.note-modal-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });

  const prefixInput = overlay.querySelector('#aliasPrefix');
  const orgArea = overlay.querySelector('#orgAliases');
  const dotArea = overlay.querySelector('#dotAliases');
  const plusArea = overlay.querySelector('#plusAliases');
  const orgCount = overlay.querySelector('#orgCount');
  const dotCount = overlay.querySelector('#dotCount');
  const plusCount = overlay.querySelector('#plusCount');

  function generate(prefix) {
    const org = [`${prefix}@gmail.com`];
    const dot = [];
    const plus = [];

    for (let i = 0; i < 26; i++) {
      plus.push(`${prefix}+${String.fromCharCode(97 + i)}@gmail.com`);
    }

    if (prefix.length > 1) {
      for (let i = 1; i < prefix.length; i++) {
        const arr = prefix.split('');
        arr.splice(i, 0, '.');
        dot.push(`${arr.join('')}@gmail.com`);
      }
      if (prefix.length > 2) {
        for (let i = 1; i < prefix.length - 1; i++) {
          for (let j = i + 1; j < prefix.length; j++) {
            const arr = prefix.split('');
            arr.splice(i, 0, '.');
            arr.splice(j + 1, 0, '.');
            dot.push(`${arr.join('')}@gmail.com`);
          }
        }
      }
    }

    return { org, dot, plus };
  }

  function show(prefix) {
    const { org, dot, plus } = generate(prefix);
    orgArea.value = org.join('\n');
    dotArea.value = dot.join('\n');
    plusArea.value = plus.join('\n');
    orgCount.textContent = `(${org.length})`;
    dotCount.textContent = `(${dot.length})`;
    plusCount.textContent = `(${plus.length})`;
  }

  overlay.querySelector('#aliasGenerate').addEventListener('click', () => {
    const p = prefixInput.value.trim();
    if (!p) return;
    show(p);
  });

  prefixInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const p = prefixInput.value.trim();
      if (p) show(p);
    }
  });

  function copy(text) {
    navigator.clipboard.writeText(text).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    });
  }

  overlay.querySelector('#copyAllAlias').addEventListener('click', () => {
    const p = prefixInput.value.trim();
    if (!p) return;
    const { org, dot, plus } = generate(p);
    copy([...org, ...dot, ...plus].join('\n'));
  });
  overlay.querySelector('#copyDotAlias').addEventListener('click', () => {
    const p = prefixInput.value.trim();
    if (!p) return;
    copy(generate(p).dot.join('\n'));
  });
  overlay.querySelector('#copyPlusAlias').addEventListener('click', () => {
    const p = prefixInput.value.trim();
    if (!p) return;
    copy(generate(p).plus.join('\n'));
  });
  overlay.querySelector('#exportAllAlias').addEventListener('click', () => {
    const p = prefixInput.value.trim();
    if (!p) return;
    const { org, dot, plus } = generate(p);
    const blob = new Blob([[...org, ...dot, ...plus].join('\n')], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'gmail_aliases.txt';
    a.click();
    URL.revokeObjectURL(a.href);
  });
}