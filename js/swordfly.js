/* 御剑千山 —— 水墨剪影风 御剑跑酷 (Canvas 全程序化美术) */
import { prefersReducedMotion } from './utils/prefers-reduced-motion.js';

const LS_KEY = 'swordfly-best';
let ov = null;
let G = null;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (a, b) => a + Math.random() * (b - a);

/* 五声音阶（宫商角徵羽） */
const SCALE = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.7, 1318.5];

/* 天色关键帧：晨曦 / 正午 / 黄昏 / 夜 */
const SKY_KEYS = [
  { top: [53, 64, 110],  mid: [141, 107, 158], hor: [240, 168, 104], sun: [255, 217, 160], sunY: 0.30, star: 0.0 },
  { top: [61, 107, 158], mid: [123, 163, 200], hor: [207, 228, 240], sun: [255, 244, 214], sunY: 0.20, star: 0.0 },
  { top: [43, 48, 87],   mid: [158, 95, 122],  hor: [232, 133, 90],  sun: [255, 179, 107], sunY: 0.44, star: 0.15 },
  { top: [10, 14, 36],   mid: [28, 42, 74],    hor: [58, 74, 110],   sun: [232, 236, 244], sunY: 0.26, star: 1.0 },
];

function skyAt(phase) {
  const i = Math.floor(phase) % 4;
  const j = (i + 1) % 4;
  const t = phase - Math.floor(phase);
  const A = SKY_KEYS[i], B = SKY_KEYS[j];
  const mix = (a, b) => a.map((v, k) => Math.round(lerp(v, b[k], t)));
  return { top: mix(A.top, B.top), mid: mix(A.mid, B.mid), hor: mix(A.hor, B.hor),
           sun: mix(A.sun, B.sun), sunY: lerp(A.sunY, B.sunY, t), star: lerp(A.star, B.star, t) };
}

function realmOf(dist) {
  return dist < 500 ? '炼气' : dist < 1200 ? '筑基' : dist < 2500 ? '金丹' : dist < 4000 ? '元婴' : '化神';
}

/* ---------- 音效（WebAudio 程序化） ---------- */
const Sound = {
  ctx: null, windGain: null, windSrc: null, muted: false,
  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      const len = this.ctx.sampleRate * 2;
      const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const ch = buf.getChannelData(0);
      let v = 0;
      for (let i = 0; i < len; i++) { v = v * 0.97 + (Math.random() * 2 - 1) * 0.03; ch[i] = v * 2.4; }
      this.windSrc = this.ctx.createBufferSource();
      this.windSrc.buffer = buf; this.windSrc.loop = true;
      const lp = this.ctx.createBiquadFilter();
      lp.type = 'lowpass'; lp.frequency.value = 420;
      this.windGain = this.ctx.createGain();
      this.windGain.gain.value = 0;
      this.windSrc.connect(lp); lp.connect(this.windGain); this.windGain.connect(this.ctx.destination);
      this.windSrc.start();
    } catch (_) {}
  },
  setWind(v) { if (this.windGain && !this.muted) this.windGain.gain.setTargetAtTime(v, this.ctx.currentTime, 0.3); },
  pluck(streak) {
    if (!this.ctx || this.muted) return;
    const f = SCALE[clamp(streak, 0, SCALE.length - 1)];
    const t0 = this.ctx.currentTime;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = 'sine'; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.18, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.5);
    o.connect(g); g.connect(this.ctx.destination);
    o.start(t0); o.stop(t0 + 0.55);
  },
  thunder() {
    if (!this.ctx || this.muted) return;
    const t0 = this.ctx.currentTime;
    const len = this.ctx.sampleRate * 0.5;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const ch = buf.getChannelData(0);
    for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.2);
    const s = this.ctx.createBufferSource(); s.buffer = buf;
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 180;
    const g = this.ctx.createGain(); g.gain.value = 0.32;
    s.connect(lp); lp.connect(g); g.connect(this.ctx.destination);
    s.start(t0);
  },
  thud() {
    if (!this.ctx || this.muted) return;
    const t0 = this.ctx.currentTime;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(160, t0);
    o.frequency.exponentialRampToValueAtTime(40, t0 + 0.4);
    g.gain.setValueAtTime(0.3, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.45);
    o.connect(g); g.connect(this.ctx.destination);
    o.start(t0); o.stop(t0 + 0.5);
  },
};

/* ---------- 辉光贴图（预制，避免 shadowBlur 开销） ---------- */
function makeGlowSprite(color) {
  const s = 64;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, color.replace('A', '0.9'));
  g.addColorStop(0.4, color.replace('A', '0.35'));
  g.addColorStop(1, color.replace('A', '0'));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  return c;
}

/* ---------- 构建 Overlay ---------- */
function buildOverlay() {
  const el = document.createElement('div');
  el.className = 'sf-overlay';
  el.innerHTML =
    '<canvas class="sf-canvas"></canvas>' +
    '<div class="sf-hud" style="display:none">' +
      '<div class="sf-hud-left"><span id="sf-dist">0</span> 丈</div>' +
      '<div class="sf-hud-mid" id="sf-realm">炼气</div>' +
      '<div class="sf-hud-right">◈ <span id="sf-stones">0</span></div>' +
    '</div>' +
    '<button class="sf-icon-btn sf-mute" title="音效开关">🔊</button>' +
    '<button class="sf-icon-btn sf-close">归 来</button>' +
    '<div class="sf-panel sf-menu">' +
      '<h2 class="sf-title">御剑千山</h2>' +
      '<p class="sf-sub">剑气凌霄 · 一瞬千山</p>' +
      '<p class="sf-tips">按住屏幕 御剑升腾<br>松开手指 收剑下落</p>' +
      '<p class="sf-tips2">避浮峰 · 防雷劫 · 尽揽灵石</p>' +
      '<button class="sf-btn" id="sf-start" type="button">启 程</button>' +
      '<div class="sf-best" id="sf-best-menu"></div>' +
    '</div>' +
    '<div class="sf-panel sf-over" style="display:none">' +
      '<h3 class="sf-over-title">坠 剑</h3>' +
      '<div class="sf-over-line" id="sf-over-stats"></div>' +
      '<div class="sf-over-total" id="sf-over-total"></div>' +
      '<div class="sf-over-realm" id="sf-over-realm"></div>' +
      '<div class="sf-best" id="sf-best-over"></div>' +
      '<button class="sf-btn" id="sf-retry" type="button">再 战</button>' +
    '</div>';
  document.body.appendChild(el);
  return el;
}

/* ---------- 主初始化 ---------- */
export function initSwordfly() {
  const card = document.querySelector('[data-swordfly]');
  if (!card) return;

  card.addEventListener('click', () => {
    if (!ov) { ov = buildOverlay(); setup(); }
    openGame();
  });

  function setup() {
    const canvas = ov.querySelector('.sf-canvas');
    const ctx = canvas.getContext('2d');
    G = {
      canvas, ctx, W: 0, H: 0,
      mode: 'menu', running: false, raf: 0, last: 0,
      t: 0, elapsed: 0, speed: 260, worldX: 0, dist: 0, stones: 0,
      streak: 0, streakT: 0,
      player: { x: 0, y: 0, vy: 0 },
      holding: false, invuln: 0, overAt: 0,
      spires: [], clouds: [], gems: [], parts: [], winds: [],
      spawnT: 1.2,
      stars: [], ambiClouds: [],
      reduced: prefersReducedMotion(),
      goldGlow: makeGlowSprite('rgba(255,200,110,A)'),
      jadeGlow: makeGlowSprite('rgba(120,232,205,A)'),
      sky: skyAt(2),
      hudDist: ov.querySelector('#sf-dist'),
      hudStones: ov.querySelector('#sf-stones'),
      hudRealm: ov.querySelector('#sf-realm'),
      hud: ov.querySelector('.sf-hud'),
      menu: ov.querySelector('.sf-menu'),
      over: ov.querySelector('.sf-over'),
      best: parseInt(localStorage.getItem(LS_KEY) || '0', 10),
      _d: -1, _s: -1, _r: '',
    };
    G.player.x = 0;
    for (let i = 0; i < 160; i++) G.stars.push({ fx: Math.random(), fy: Math.random() * 0.55, s: rand(0.6, 1.8), p: Math.random() * 7 });
    for (let i = 0; i < 8; i++) G.ambiClouds.push({ fx: Math.random() * 1.6, fy: rand(0.08, 0.6), sc: rand(0.5, 1.4), f: rand(0.1, 0.3), a: rand(0.10, 0.22) });

    /* 输入 */
    const press = (e) => { e.preventDefault(); onHold(); };
    canvas.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', onRelease);
    window.addEventListener('pointercancel', onRelease);
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && !e.repeat && ov.classList.contains('open')) { e.preventDefault(); onHold(); }
      if (e.key === 'Escape' && ov.classList.contains('open')) closeGame();
    });
    window.addEventListener('keyup', (e) => { if (e.code === 'Space') onRelease(); });

    ov.querySelector('#sf-start').addEventListener('click', () => { Sound.init(); startRun(); });
    ov.querySelector('#sf-retry').addEventListener('click', () => { Sound.init(); startRun(); });
    ov.querySelector('.sf-close').addEventListener('click', closeGame);
    ov.querySelector('.sf-mute').addEventListener('click', (e) => {
      Sound.muted = !Sound.muted;
      e.target.textContent = Sound.muted ? '🔇' : '🔊';
      if (Sound.muted) Sound.setWind(0);
    });
    window.addEventListener('resize', () => { if (ov.classList.contains('open')) resize(); });
  }

  function onHold() {
    if (!G || !G.running) return;
    if (G.mode === 'menu') { Sound.init(); startRun(); return; }
    if (G.mode === 'over') { if (G.t - G.overAt > 0.9) startRun(); return; }
    G.holding = true;
  }
  function onRelease() { if (G) G.holding = false; }

  function resize() {
    const r = ov.getBoundingClientRect();
    G.W = r.width; G.H = r.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    G.canvas.width = Math.round(r.width * dpr);
    G.canvas.height = Math.round(r.height * dpr);
    G.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    G.player.x = Math.round(G.W * 0.28);
    if (G.mode === 'menu') G.player.y = G.H * 0.45;
  }

  function openGame() {
    ov.classList.add('open');
    document.body.style.overflow = 'hidden';
    resize();
    G.mode = 'menu';
    G.menu.style.display = '';
    G.over.style.display = 'none';
    G.hud.style.display = 'none';
    ov.querySelector('#sf-best-menu').textContent = G.best > 0 ? '最远纪录 ' + G.best + ' 分' : '御剑之道，始于足下';
    G.running = true;
    G.last = performance.now();
    cancelAnimationFrame(G.raf);
    G.raf = requestAnimationFrame(tick);
  }

  function closeGame() {
    ov.classList.remove('open');
    document.body.style.overflow = '';
    G.running = false;
    G.holding = false;
    cancelAnimationFrame(G.raf);
    Sound.setWind(0);
  }

  function startRun() {
    G.mode = 'playing';
    G.menu.style.display = 'none';
    G.over.style.display = 'none';
    G.hud.style.display = '';
    G.t = 0; G.elapsed = 0; G.dist = 0; G.stones = 0; G.streak = 0; G.streakT = 0;
    G.speed = 240; G.spawnT = 1.6; G.invuln = 1.5;
    G.player.y = G.H * 0.45; G.player.vy = 0;
    G.spires.length = 0; G.clouds.length = 0; G.gems.length = 0; G.parts.length = 0;
    G._d = -1; G._s = -1; G._r = '';
  }

  function die(cause) {
    if (G.invuln > 0) return;
    G.mode = 'over';
    G.overAt = G.t;
    G.holding = false;
    Sound.thud();
    Sound.setWind(0.02);
    // 水墨散开
    const n = G.reduced ? 14 : 34;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = rand(40, 320);
      G.parts.push({ type: 'ink', x: G.player.x, y: G.player.y,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 60,
        life: 0, max: rand(0.5, 1.1), size: rand(3, 11) });
    }
    const total = Math.floor(G.dist) + G.stones * 25;
    if (total > G.best) { G.best = total; localStorage.setItem(LS_KEY, String(total)); }
    ov.querySelector('#sf-over-stats').textContent = '行程 ' + Math.floor(G.dist) + ' 丈 · 灵石 ' + G.stones + ' 枚';
    ov.querySelector('#sf-over-total').textContent = '总分 ' + total;
    ov.querySelector('#sf-over-realm').textContent = '此行境界 · ' + realmOf(G.dist);
    ov.querySelector('#sf-best-over').textContent = '最远纪录 ' + G.best + ' 分';
    setTimeout(() => { if (G.mode === 'over') { G.hud.style.display = 'none'; G.over.style.display = ''; } }, 650);
  }

  /* ---------- 生成 ---------- */
  function spawnPattern() {
    const r = Math.random();
    if (r < 0.48) {
      // 浮峰对（上悬峰 + 下立峰，留隙）
      const gap = clamp(260 - G.elapsed * 0.6, 195, 260);
      const gy = rand(G.H * 0.25, G.H * 0.68);
      const w = rand(54, 78);
      const x = G.W + 60;
      G.spires.push({ x, w, topH: gy - gap / 2, botY: gy + gap / 2, seed: Math.random() * 10 });
      if (Math.random() < 0.7) {
        const n = 3 + Math.floor(Math.random() * 3);
        for (let i = 0; i < n; i++) G.gems.push({ x: x + w / 2 + (i - (n - 1) / 2) * 30, y: gy, ph: Math.random() * 7 });
      }
    } else if (r < 0.78) {
      // 灵石弧线
      const n = 6 + Math.floor(Math.random() * 4);
      const baseY = rand(G.H * 0.2, G.H * 0.7);
      const amp = rand(30, 70), wl = rand(140, 220);
      const x0 = G.W + 60;
      for (let i = 0; i < n; i++) {
        G.gems.push({ x: x0 + i * 34, y: baseY + Math.sin(i / n * Math.PI) * amp * (Math.random() < 0.5 ? 1 : -1), ph: Math.random() * 7 });
      }
    } else if (G.elapsed > 14) {
      // 雷云
      G.clouds.push({ x: G.W + 90, y: rand(G.H * 0.16, G.H * 0.5), rx: rand(46, 64), ry: rand(22, 30),
        state: 'drift', t: 0, cool: rand(0.8, 1.6), seed: Math.random() * 10 });
    }
  }

  /* ---------- 更新 ---------- */
  function update(dt) {
    G.elapsed += dt;
    G.speed = Math.min(600, 240 + G.elapsed * 6);
    const vx = G.speed * dt;
    G.worldX += vx;
    G.dist += vx / 40;
    if (G.invuln > 0) G.invuln -= dt;
    if (G.streakT > 0) { G.streakT -= dt; if (G.streakT <= 0) G.streak = 0; }

    // 玩家
    const p = G.player;
    p.vy += (G.holding ? -2350 : 1500) * dt;
    p.vy *= (1 - 0.55 * dt);
    p.vy = clamp(p.vy, -500, 640);
    p.y += p.vy * dt;
    if (p.y < 34) { p.y = 34; p.vy = Math.max(p.vy, 60); }
    if (p.y > G.H * 0.90) { die('云海'); return; }

    // 剑光拖尾
    if (!G.reduced) {
      for (let i = 0; i < 2; i++) {
        G.parts.push({ type: 'trail', x: p.x - 26 + rand(-3, 3), y: p.y + 10 + rand(-3, 3),
          vx: -G.speed * 0.25 + rand(-15, 15), vy: rand(-18, 18),
          life: 0, max: rand(0.25, 0.5), size: rand(6, 13) });
      }
    }
    // 风线
    if (!G.reduced && Math.random() < G.speed / 620 * 0.5) {
      G.winds.push({ x: G.W + 40, y: rand(30, G.H * 0.88), len: rand(40, 120), a: rand(0.05, 0.16) });
    }

    // 生成
    G.spawnT -= dt;
    if (G.spawnT <= 0) {
      spawnPattern();
      G.spawnT = clamp(rand(1.4, 1.9) - G.elapsed * 0.005, 1.0, 1.9);
    }

    // 移动与淘汰
    for (const s of G.spires) s.x -= vx;
    G.spires = G.spires.filter(s => s.x + s.w > -60);
    for (const c of G.clouds) {
      c.x -= vx; c.t += dt;
      if (c.state === 'drift' && c.t > c.cool) { c.state = 'charge'; c.t = 0; }
      else if (c.state === 'charge' && c.t > 1.05) { c.state = 'bolt'; c.t = 0; Sound.thunder(); }
      else if (c.state === 'bolt' && c.t > 0.16) { c.state = 'drift'; c.t = 0; c.cool = rand(1.2, 2.2); }
    }
    G.clouds = G.clouds.filter(c => c.x + c.rx > -80);
    for (const g of G.gems) g.x -= vx;
    G.gems = G.gems.filter(g => g.x > -40 && !g.dead);
    for (const w of G.winds) w.x -= G.speed * 1.9 * dt;
    G.winds = G.winds.filter(w => w.x + w.len > -20);
    for (const pt of G.parts) {
      pt.life += dt; pt.x += pt.vx * dt; pt.y += pt.vy * dt;
      if (pt.type === 'ink') pt.vy += 500 * dt;
    }
    G.parts = G.parts.filter(pt => pt.life < pt.max);

    // 碰撞
    if (G.invuln <= 0) {
      const px = p.x, py = p.y, pr = 9;
      for (const s of G.spires) {
        if (px + pr > s.x && px - pr < s.x + s.w) {
          if (py - pr < s.topH || py + pr > s.botY) { die('浮峰'); return; }
        }
      }
      for (const c of G.clouds) {
        const dx = (px - c.x) / c.rx, dy = (py - c.y) / c.ry;
        if (dx * dx + dy * dy < 0.7) { die('雷云'); return; }
        if (c.state === 'bolt') {
          const bx = c.x + Math.sin(c.seed * 40) * 12;
          const by0 = c.y + c.ry * 0.7, by1 = by0 + 280;
          if (py > by0 && py < by1 && Math.abs(px - bx) < 15) { die('雷劫'); return; }
        }
      }
    }
    // 灵石
    for (const g of G.gems) {
      const dx = g.x - p.x, dy = g.y - p.y;
      if (dx * dx + dy * dy < 28 * 28) {
        g.dead = true;
        G.stones++;
        G.streak = Math.min(G.streak + 1, 8);
        G.streakT = 2.4;
        Sound.pluck(G.streak - 1);
        for (let i = 0; i < (G.reduced ? 4 : 10); i++) {
          const a = Math.random() * Math.PI * 2, sp = rand(30, 140);
          G.parts.push({ type: 'jade', x: g.x, y: g.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
            life: 0, max: rand(0.3, 0.6), size: rand(4, 9) });
        }
      }
    }

    // HUD
    const d = Math.floor(G.dist);
    if (d !== G._d) { G._d = d; G.hudDist.textContent = d; }
    if (G.stones !== G._s) { G._s = G.stones; G.hudStones.textContent = G.stones; }
    const rl = realmOf(G.dist);
    if (rl !== G._r) { G._r = rl; G.hudRealm.textContent = rl; }
    Sound.setWind(0.04 + (G.speed / 620) * 0.10);
  }

  /* ---------- 绘制 ---------- */
  function drawRidge(off, baseY, amp, color, seed) {
    const ctx = G.ctx;
    ctx.beginPath();
    ctx.moveTo(-20, G.H + 20);
    for (let x = -20; x <= G.W + 20; x += 16) {
      const wx = x + off;
      const n = Math.sin(wx * 0.0021 + seed) * 0.55 + Math.sin(wx * 0.0058 + seed * 1.9) * 0.3 + Math.sin(wx * 0.016 + seed * 3.1) * 0.15;
      ctx.lineTo(x, baseY - (n * 0.5 + 0.5) * amp);
    }
    ctx.lineTo(G.W + 20, G.H + 20);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function drawPlayer() {
    const ctx = G.ctx, p = G.player, t = G.t;
    if (G.mode === 'over') return; // 坠剑后不画人
    const blink = G.invuln > 0 && Math.floor(G.t * 12) % 2 === 0;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(clamp(p.vy * 0.00055, -0.32, 0.42) + (G.mode === 'menu' ? Math.sin(t * 1.4) * 0.05 : 0));
    if (blink) ctx.globalAlpha = 0.35;
    const flap = Math.sin(t * 13) * (G.holding ? 3.2 : 1.6);

    // 剑光（身后）
    ctx.globalCompositeOperation = 'lighter';
    ctx.drawImage(G.goldGlow, -64, -8, 52, 26);
    ctx.globalCompositeOperation = 'source-over';

    // 飞剑
    ctx.beginPath();
    ctx.moveTo(-34, 9);
    ctx.quadraticCurveTo(0, 4, 36, 9);
    ctx.quadraticCurveTo(0, 14, -34, 9);
    ctx.closePath();
    ctx.fillStyle = '#0d1124';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,205,130,0.65)';
    ctx.lineWidth = 1.1;
    ctx.stroke();

    // 修士剪影
    ctx.fillStyle = '#0d1124';
    // 袍身（下摆随风）
    ctx.beginPath();
    ctx.moveTo(-1, -14);
    ctx.quadraticCurveTo(6, -12, 7, -2);
    ctx.quadraticCurveTo(8, 4, 4, 8);
    ctx.quadraticCurveTo(-2, 9, -8, 8);
    ctx.quadraticCurveTo(-13 - flap, 5, -11 - flap * 1.4, -2);
    ctx.quadraticCurveTo(-9, -10, -1, -14);
    ctx.closePath();
    ctx.fill();
    // 飘带
    ctx.beginPath();
    ctx.moveTo(-4, -8);
    ctx.quadraticCurveTo(-14 - flap * 2, -6, -20 - flap * 2.6, -1);
    ctx.quadraticCurveTo(-14 - flap * 2, -2, -6, -3);
    ctx.closePath();
    ctx.fill();
    // 首与髻
    ctx.beginPath();
    ctx.arc(2, -18, 4.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(2, -23, 1.6, 0, Math.PI * 2);
    ctx.fill();
    // 轮廓金边（受光面）
    ctx.strokeStyle = 'rgba(255,205,130,0.4)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.arc(2, -18, 4.2, -0.9, 0.9);
    ctx.stroke();
    ctx.restore();
  }

  function render() {
    const ctx = G.ctx, W = G.W, H = G.H;
    const phase = (G.dist / 1600) % 4;       // 每 1600 丈 过一时辰
    const sky = skyAt(phase + 2);            // 自黄昏启程
    G.sky = sky;

    // 天空
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, `rgb(${sky.top})`);
    grad.addColorStop(0.55, `rgb(${sky.mid})`);
    grad.addColorStop(1, `rgb(${sky.hor})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // 星
    if (sky.star > 0.02) {
      ctx.save();
      for (const s of G.stars) {
        const tw = 0.5 + Math.sin(G.t * 2 + s.p) * 0.5;
        ctx.globalAlpha = sky.star * tw * 0.8;
        ctx.fillStyle = '#e8ecf8';
        ctx.fillRect(s.fx * W, s.fy * H, s.s, s.s);
      }
      ctx.restore();
    }

    // 日/月
    const sunX = W * 0.72, sunY = H * sky.sunY;
    const sg = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 130);
    sg.addColorStop(0, `rgba(${sky.sun},0.95)`);
    sg.addColorStop(0.25, `rgba(${sky.sun},0.5)`);
    sg.addColorStop(1, `rgba(${sky.sun},0)`);
    ctx.fillStyle = sg;
    ctx.fillRect(sunX - 130, sunY - 130, 260, 260);
    ctx.beginPath();
    ctx.arc(sunX, sunY, 26, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${sky.sun},0.95)`;
    ctx.fill();

    // 视差墨山
    drawRidge(G.worldX * 0.06, H * 0.62, H * 0.16, `rgba(${sky.top},0.55)`, 3.7);
    drawRidge(G.worldX * 0.14, H * 0.72, H * 0.20, 'rgba(26,32,60,0.55)', 8.2);
    drawRidge(G.worldX * 0.30, H * 0.84, H * 0.24, 'rgba(15,19,40,0.9)', 5.1);

    // 浮云（环境）
    for (const c of G.ambiClouds) {
      const cx = ((c.fx * (W + 400) - G.worldX * c.f) % (W + 400) + W + 400) % (W + 400) - 200;
      const cy = c.fy * H;
      ctx.save();
      ctx.globalAlpha = c.a;
      ctx.fillStyle = '#eef2fa';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 60 * c.sc, 14 * c.sc, 0, 0, Math.PI * 2);
      ctx.ellipse(cx + 30 * c.sc, cy - 8 * c.sc, 34 * c.sc, 12 * c.sc, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 风线
    ctx.save();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    for (const w of G.winds) {
      ctx.globalAlpha = w.a;
      ctx.beginPath();
      ctx.moveTo(w.x, w.y);
      ctx.lineTo(w.x + w.len, w.y);
      ctx.stroke();
    }
    ctx.restore();

    // 灵石
    for (const g of G.gems) {
      const puls = 1 + Math.sin(G.t * 4 + g.ph) * 0.15;
      ctx.drawImage(G.jadeGlow, g.x - 22 * puls, g.y - 22 * puls, 44 * puls, 44 * puls);
      ctx.save();
      ctx.translate(g.x, g.y);
      ctx.rotate(G.t * 1.6 + g.ph);
      ctx.beginPath();
      ctx.moveTo(0, -7); ctx.lineTo(5, 0); ctx.lineTo(0, 7); ctx.lineTo(-5, 0);
      ctx.closePath();
      ctx.fillStyle = '#8ef0d8';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    }

    // 浮峰
    for (const s of G.spires) {
      ctx.fillStyle = '#0c1024';
      // 上悬峰
      ctx.beginPath();
      ctx.moveTo(s.x, -4);
      ctx.lineTo(s.x + s.w, -4);
      ctx.lineTo(s.x + s.w * 0.72, s.topH * 0.62);
      ctx.lineTo(s.x + s.w * 0.52, s.topH);
      ctx.lineTo(s.x + s.w * 0.3, s.topH * 0.58);
      ctx.closePath();
      ctx.fill();
      // 下立峰
      ctx.beginPath();
      ctx.moveTo(s.x, H + 4);
      ctx.lineTo(s.x + s.w, H + 4);
      ctx.lineTo(s.x + s.w * 0.7, s.botY + (H - s.botY) * 0.4);
      ctx.lineTo(s.x + s.w * 0.5, s.botY);
      ctx.lineTo(s.x + s.w * 0.28, s.botY + (H - s.botY) * 0.42);
      ctx.closePath();
      ctx.fill();
      // 峰顶雪线/金边
      ctx.strokeStyle = 'rgba(255,205,130,0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(s.x + s.w * 0.3, s.topH * 0.58);
      ctx.lineTo(s.x + s.w * 0.52, s.topH);
      ctx.lineTo(s.x + s.w * 0.72, s.topH * 0.62);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(s.x + s.w * 0.28, s.botY + (H - s.botY) * 0.42);
      ctx.lineTo(s.x + s.w * 0.5, s.botY);
      ctx.lineTo(s.x + s.w * 0.7, s.botY + (H - s.botY) * 0.4);
      ctx.stroke();
    }

    // 雷云
    for (const c of G.clouds) {
      const chargeK = c.state === 'charge' ? c.t / 1.05 : (c.state === 'bolt' ? 1 : 0);
      ctx.save();
      // 云体
      ctx.fillStyle = `rgba(${Math.round(30 + chargeK * 40)},${Math.round(28 + chargeK * 20)},${Math.round(52 + chargeK * 60)},0.92)`;
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, c.rx, c.ry, 0, 0, Math.PI * 2);
      ctx.ellipse(c.x - c.rx * 0.5, c.y + 4, c.rx * 0.55, c.ry * 0.8, 0, 0, Math.PI * 2);
      ctx.ellipse(c.x + c.rx * 0.5, c.y + 4, c.rx * 0.55, c.ry * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
      // 充电辉光
      if (chargeK > 0) {
        ctx.globalAlpha = chargeK * (0.5 + Math.sin(G.t * 18) * 0.3);
        ctx.strokeStyle = '#b8a8ff';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.ellipse(c.x, c.y, c.rx * 0.9, c.ry * 0.85, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
      // 落雷
      if (c.state === 'bolt') {
        const bx = c.x + Math.sin(c.seed * 40) * 12;
        let lx = bx, ly = c.y + c.ry * 0.7;
        ctx.strokeStyle = '#e8e0ff';
        ctx.lineWidth = 2.6;
        ctx.shadowColor = '#a890ff';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        while (ly < c.y + c.ry * 0.7 + 280) {
          ly += 22; lx = bx + rand(-14, 14);
          ctx.lineTo(lx, ly);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      ctx.restore();
    }

    // 粒子
    for (const pt of G.parts) {
      const k = 1 - pt.life / pt.max;
      if (pt.type === 'trail') {
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = k * 0.8;
        ctx.drawImage(G.goldGlow, pt.x - pt.size * k, pt.y - pt.size * k, pt.size * 2 * k, pt.size * 2 * k);
        ctx.globalCompositeOperation = 'source-over';
      } else if (pt.type === 'jade') {
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = k;
        ctx.drawImage(G.jadeGlow, pt.x - pt.size * k, pt.y - pt.size * k, pt.size * 2 * k, pt.size * 2 * k);
        ctx.globalCompositeOperation = 'source-over';
      } else {
        ctx.globalAlpha = k * 0.85;
        ctx.fillStyle = '#0d1124';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * (0.5 + k * 0.5), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // 玩家
    drawPlayer();

    // 云海（死地边界）
    const seaY = H * 0.90;
    ctx.save();
    const seaG = ctx.createLinearGradient(0, seaY, 0, H);
    seaG.addColorStop(0, `rgba(${sky.hor},0)`);
    seaG.addColorStop(0.45, `rgba(${sky.hor},0.55)`);
    seaG.addColorStop(1, `rgba(${sky.mid},0.85)`);
    ctx.fillStyle = seaG;
    ctx.fillRect(0, seaY, W, H - seaY);
    ctx.fillStyle = 'rgba(238,242,250,0.5)';
    for (let i = 0; i < 7; i++) {
      const bx = ((i * 0.17 * (W + 300) - G.worldX * 0.5) % (W + 300) + W + 300) % (W + 300) - 150;
      ctx.beginPath();
      ctx.ellipse(bx, seaY + 8 + Math.sin(G.t * 1.2 + i) * 3, 90, 16, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 暗角
    const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.36, W / 2, H / 2, H * 0.85);
    vg.addColorStop(0, 'rgba(6,8,18,0)');
    vg.addColorStop(1, 'rgba(6,8,18,0.42)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
  }

  function tick(now) {
    if (!G.running) return;
    const dt = Math.min((now - G.last) / 1000, 0.033);
    G.last = now;
    G.t += dt;
    if (G.mode === 'playing') {
      update(dt);
    } else {
      // 菜单/结算背景缓动
      G.worldX += 30 * dt;
      if (G.mode === 'menu') {
        G.dist = (G.dist + 12 * dt) % 6400;
        G.player.y = G.H * 0.45 + Math.sin(G.t * 1.6) * 14;
        G.player.vy = Math.cos(G.t * 1.6) * 40;
        if (!G.reduced && Math.random() < 0.3) {
          G.parts.push({ type: 'trail', x: G.player.x - 26, y: G.player.y + 10,
            vx: -20, vy: rand(-10, 10), life: 0, max: 0.5, size: rand(6, 11) });
        }
      }
      for (const pt of G.parts) { pt.life += dt; pt.x += pt.vx * dt; pt.y += pt.vy * dt; if (pt.type === 'ink') pt.vy += 500 * dt; }
      G.parts = G.parts.filter(pt => pt.life < pt.max);
    }
    render();
    G.raf = requestAnimationFrame(tick);
  }

  window.__swordfly = { get G() { return G; }, startRun: () => { if (G) { Sound.init(); startRun(); } } };
}
