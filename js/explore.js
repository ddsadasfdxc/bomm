/**
 * 探索界面 — 小工具和趣味功能
 */

const quotes = [
  '墨染山河，笔走龙蛇。',
  '浮生若梦，为欢几何。',
  '一蓑烟雨任平生。',
  '行到水穷处，坐看云起时。',
  '心之所向，素履以往。',
  '且将新火试新茶，诗酒趁年华。',
  '此心安处是吾乡。',
  '念念不忘，必有回响。',
  '但行好事，莫问前程。',
  '山高水长，江湖再见。',
  '清风徐来，水波不兴。',
  '大漠孤烟直，长河落日圆。',
  '白日放歌须纵酒，青春作伴好还乡。',
  '落霞与孤鹜齐飞，秋水共长天一色。',
  '曾经沧海难为水，除却巫山不是云。',
];

const poems = [
  { lines: '床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。', author: '李白 · 静夜思' },
  { lines: '春眠不觉晓，\n处处闻啼鸟。\n夜来风雨声，\n花落知多少。', author: '孟浩然 · 春晓' },
  { lines: '白日依山尽，\n黄河入海流。\n欲穷千里目，\n更上一层楼。', author: '王之涣 · 登鹳雀楼' },
  { lines: '红豆生南国，\n春来发几枝。\n愿君多采撷，\n此物最相思。', author: '王维 · 相思' },
  { lines: '千山鸟飞绝，\n万径人踪灭。\n孤舟蓑笠翁，\n独钓寒江雪。', author: '柳宗元 · 江雪' },
  { lines: '松下问童子，\n言师采药去。\n只在此山中，\n云深不知处。', author: '贾岛 · 寻隐者不遇' },
  { lines: '向晚意不适，\n驱车登古原。\n夕阳无限好，\n只是近黄昏。', author: '李商隐 · 登乐游原' },
  { lines: '离离原上草，\n一岁一枯荣。\n野火烧不尽，\n春风吹又生。', author: '白居易 · 赋得古原草送别' },
  { lines: '人闲桂花落，\n夜静春山空。\n月出惊山鸟，\n时鸣春涧中。', author: '王维 · 鸟鸣涧' },
  { lines: '空山不见人，\n但闻人语响。\n返景入深林，\n复照青苔上。', author: '王维 · 鹿柴' },
];

const diceFortunes = [
  '大吉 — 今日宜创作，墨韵天成。',
  '中吉 — 心有灵犀，一点即通。',
  '小吉 — 微风拂面，好运将至。',
  '平平 — 静水流深，蓄势待发。',
  '小凶 — 思虑过多，不妨放空。',
  '中凶 — 枯木逢春，否极泰来。',
];

const inkColors = [
  { name: '松烟墨', hex: '#2d2d2d' },
  { name: '朱砂', hex: '#c45a4a' },
  { name: '石青', hex: '#5b7a76' },
  { name: '藤黄', hex: '#c9a946' },
  { name: '赭石', hex: '#8b6c4e' },
  { name: '胭脂', hex: '#9b3a4a' },
  { name: '花青', hex: '#3d5a6e' },
  { name: '钛白', hex: '#f5f0e6' },
];

export function initExplore() {
  initNavSwitching();
  initExploreCards();
}

function initNavSwitching() {
  const tabs = document.querySelectorAll('.ios-nav-tab');
  const pages = document.querySelectorAll('.page');
  const navInner = document.querySelector('.ios-nav-inner');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const pageName = tab.dataset.page;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      pages.forEach(p => {
        p.classList.toggle('active', p.id === `page-${pageName}`);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  if (navInner) {
    const onScroll = () => {
      navInner.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}

function initExploreCards() {
  document.querySelectorAll('.explore-card').forEach(card => {
    card.addEventListener('click', () => {
      const tool = card.dataset.tool;
      switch (tool) {
        case 'ink-brush': openInkBrush(); break;
        case 'poem': openPoem(); break;
        case 'seal': openSeal(); break;
        case 'countdown': openCountdown(); break;
        case 'dice': openDice(); break;
        case 'palette': openPalette(); break;
      }
    });
  });
}

function createModal(title, contentHTML) {
  const overlay = document.createElement('div');
  overlay.className = 'explore-modal-overlay';
  overlay.innerHTML = `
    <div class="explore-modal">
      <button class="explore-modal-close">&times;</button>
      <h3>${title}</h3>
      ${contentHTML}
    </div>`;
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.querySelector('.explore-modal-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escHandler); }
  });

  return overlay;
}

// ── 水墨画板 ──

function openInkBrush() {
  const modal = createModal('水墨画板', `
    <div class="ink-canvas-wrap" id="inkCanvasWrap">
      <canvas id="inkCanvas"></canvas>
    </div>
    <div class="ink-toolbar">
      <button data-action="clear">清空</button>
      <button data-action="thin">细笔</button>
      <button data-action="normal" style="color:var(--text-paper);border-color:var(--accent-cinnabar)">中锋</button>
      <button data-action="thick">浓墨</button>
    </div>`);

  setTimeout(() => {
    const wrap = modal.querySelector('#inkCanvasWrap');
    const canvas = modal.querySelector('#inkCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let lineWidth = 2;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const rect = wrap.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.strokeStyle = '#f5f0e6';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = lineWidth;
    }
    resize();

    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    canvas.addEventListener('pointerdown', (e) => {
      drawing = true;
      const { x, y } = getPos(e);
      ctx.beginPath();
      ctx.moveTo(x, y);
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!drawing) return;
      const { x, y } = getPos(e);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    });

    canvas.addEventListener('pointerup', () => { drawing = false; });
    canvas.addEventListener('pointerleave', () => { drawing = false; });

    modal.querySelectorAll('.ink-toolbar button').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        if (action === 'clear') {
          ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
        } else {
          modal.querySelectorAll('.ink-toolbar button').forEach(b => {
            b.style.color = '';
            b.style.borderColor = '';
          });
          btn.style.color = 'var(--text-paper)';
          btn.style.borderColor = 'var(--accent-cinnabar)';
          if (action === 'thin') lineWidth = 1;
          else if (action === 'normal') lineWidth = 2;
          else if (action === 'thick') lineWidth = 5;
          ctx.lineWidth = lineWidth;
        }
      });
    });
  }, 100);
}

// ── 随机诗词 ──

function openPoem() {
  const poem = poems[Math.floor(Math.random() * poems.length)];
  const modal = createModal('随机诗词', `
    <div class="poem-display">
      <div class="poem-lines">${poem.lines.replace(/\n/g, '<br>')}</div>
      <div class="poem-author">— ${poem.author}</div>
      <button class="poem-refresh">换一首</button>
    </div>`);

  modal.querySelector('.poem-refresh').addEventListener('click', () => {
    const newPoem = poems[Math.floor(Math.random() * poems.length)];
    modal.querySelector('.poem-lines').innerHTML = newPoem.lines.replace(/\n/g, '<br>');
    modal.querySelector('.poem-author').textContent = `— ${newPoem.author}`;
  });
}

// ── 灵感印章 ──

function openSeal() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const modal = createModal('灵感印章', `
    <div class="seal-display">
      <div class="seal-stamp">温若</div>
      <div class="seal-quote">${quote}</div>
      <button class="seal-refresh">换一句</button>
    </div>`);

  modal.querySelector('.seal-refresh').addEventListener('click', () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    modal.querySelector('.seal-quote').textContent = newQuote;
  });
}

// ── 时光沙漏 ──

function openCountdown() {
  let timer = null;
  let remaining = 0;
  const presets = [300, 600, 1500, 1800];

  const modal = createModal('时光沙漏', `
    <div class="countdown-display">
      <div class="countdown-time" id="countdownTimer">25:00</div>
      <div class="countdown-controls" id="countdownPresets">
        ${presets.map(t => `<button data-time="${t}">${Math.floor(t/60)} 分钟</button>`).join('')}
      </div>
      <div class="countdown-controls" style="margin-top:8px">
        <button class="btn-start" id="countdownStart">开始</button>
        <button id="countdownPause" style="display:none">暂停</button>
        <button id="countdownReset">重置</button>
      </div>
    </div>`);

  const display = modal.querySelector('#countdownTimer');
  const startBtn = modal.querySelector('#countdownStart');
  const pauseBtn = modal.querySelector('#countdownPause');
  const resetBtn = modal.querySelector('#countdownReset');

  function updateDisplay() {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    display.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function setTime(secs) {
    clearInterval(timer);
    timer = null;
    remaining = secs;
    updateDisplay();
    startBtn.style.display = '';
    pauseBtn.style.display = 'none';
  }

  function startTimer() {
    if (timer) return;
    if (remaining <= 0) return;
    startBtn.style.display = 'none';
    pauseBtn.style.display = '';
    timer = setInterval(() => {
      remaining--;
      updateDisplay();
      if (remaining <= 0) {
        clearInterval(timer);
        timer = null;
        startBtn.style.display = '';
        pauseBtn.style.display = 'none';
      }
    }, 1000);
  }

  preset(1500);

  modal.querySelectorAll('[data-time]').forEach(btn => {
    btn.addEventListener('click', () => setTime(parseInt(btn.dataset.time)));
  });

  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    startBtn.style.display = '';
    pauseBtn.style.display = 'none';
  });
  resetBtn.addEventListener('click', () => setTime(remaining || 1500));
}

// ── 墨骰占卜 ──

function openDice() {
  let rolling = false;
  const modal = createModal('墨骰占卜', `
    <div class="dice-display">
      <span class="dice-result">🎲</span>
      <div class="dice-fortune">点击掷骰，问心而动</div>
      <button class="dice-roll-btn">掷骰</button>
    </div>`);

  const resultEl = modal.querySelector('.dice-result');
  const fortuneEl = modal.querySelector('.dice-fortune');
  const rollBtn = modal.querySelector('.dice-roll-btn');

  const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  rollBtn.addEventListener('click', () => {
    if (rolling) return;
    rolling = true;
    resultEl.classList.add('rolling');
    rollBtn.textContent = '···';

    let count = 0;
    const anim = setInterval(() => {
      resultEl.textContent = diceFaces[Math.floor(Math.random() * 6)];
      count++;
      if (count >= 10) {
        clearInterval(anim);
        rolling = false;
        resultEl.classList.remove('rolling');
        const val = Math.floor(Math.random() * 6) + 1;
        resultEl.textContent = diceFaces[val - 1];
        fortuneEl.textContent = diceFortunes[val - 1];
        rollBtn.textContent = '再掷一次';
      }
    }, 80);
  });
}

// ── 墨色谱 ──

function openPalette() {
  const modal = createModal('墨色谱', `
    <div class="palette-display">
      <div class="palette-preview" id="palettePreview" style="background:${inkColors[0].hex}"></div>
      <div class="palette-color-row" id="paletteColors">
        ${inkColors.map(c => `<div class="palette-swatch" style="background:${c.hex}" data-hex="${c.hex}" data-name="${c.name}"></div>`).join('')}
      </div>
      <div class="palette-info" id="paletteInfo">${inkColors[0].name} · ${inkColors[0].hex}</div>
    </div>`);

  const preview = modal.querySelector('#palettePreview');
  const info = modal.querySelector('#paletteInfo');

  modal.querySelectorAll('.palette-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      modal.querySelectorAll('.palette-swatch').forEach(s => s.classList.remove('selected'));
      swatch.classList.add('selected');
      preview.style.background = swatch.dataset.hex;
      info.textContent = `${swatch.dataset.name} · ${swatch.dataset.hex}`;
    });
  });

  modal.querySelector('.palette-swatch').classList.add('selected');
}