/* 灵兔跃千山 · 横版卷轴跑酷 — Canvas 2D + Kenney CC0 assets */
(function () {
  'use strict';

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rand = (a, b) => a + Math.random() * (b - a);

  /* ---------- 音效（WebAudio 程序化） ---------- */
  const Sound = {
    ctx: null, master: null, windGain: null, windSrc: null,
    init() {
      if (this.ctx) return;
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.25;
      this.master.connect(this.ctx.destination);
      // 风声
      const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 4, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.15;
      this.windSrc = this.ctx.createBufferSource();
      this.windSrc.buffer = buf; this.windSrc.loop = true;
      const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 600;
      this.windGain = this.ctx.createGain(); this.windGain.gain.value = 0;
      this.windSrc.connect(f); f.connect(this.windGain); this.windGain.connect(this.master);
      this.windSrc.start();
    },
    setWind(v) { if (this.windGain) this.windGain.gain.setTargetAtTime(v, this.ctx.currentTime, 0.3); },
    jump() {
      if (!this.ctx) return;
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(300, this.ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.15);
      g.gain.setValueAtTime(0.12, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      o.connect(g); g.connect(this.master); o.start(); o.stop(this.ctx.currentTime + 0.2);
    },
    slide() {
      if (!this.ctx) return;
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = 'sawtooth'; o.frequency.setValueAtTime(200, this.ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.25);
      g.gain.setValueAtTime(0.06, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      o.connect(g); g.connect(this.master); o.start(); o.stop(this.ctx.currentTime + 0.3);
    },
    collect(streak) {
      if (!this.ctx) return;
      const scale = [523, 587, 659, 784, 880, 1047, 1175, 1319];
      const freq = scale[clamp(streak, 0, 7)];
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = 'triangle'; o.frequency.value = freq;
      g.gain.setValueAtTime(0.1, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      o.connect(g); g.connect(this.master); o.start(); o.stop(this.ctx.currentTime + 0.3);
    },
    thud() {
      if (!this.ctx) return;
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(150, this.ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3);
      g.gain.setValueAtTime(0.2, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
      o.connect(g); g.connect(this.master); o.start(); o.stop(this.ctx.currentTime + 0.4);
    }
  };

  /* ---------- 资产加载 ---------- */
  const ASSETS = {};
  const ASSET_BASE = 'assets/runner/';
  const ASSET_LIST = {
    bunny_stand: 'char/bunny_stand.png',
    bunny_walk1: 'char/bunny_walk1.png',
    bunny_walk2: 'char/bunny_walk2.png',
    bunny_jump: 'char/bunny_jump.png',
    bunny_hurt: 'char/bunny_hurt.png',
    bunny_ready: 'char/bunny_ready.png',
    bg1: 'bg/layer1.png', bg2: 'bg/layer2.png', bg3: 'bg/layer3.png', bg4: 'bg/layer4.png',
    ground: 'env/ground_grass.png',
    ground_small: 'env/ground_grass_small.png',
    grass1: 'env/grass1.png', grass2: 'env/grass2.png',
    cactus: 'env/cactus.png', cloud: 'env/cloud.png',
    spikeMan_stand: 'enemy/spikeMan_stand.png',
    spikeMan_walk1: 'enemy/spikeMan_walk1.png',
    spikeMan_walk2: 'enemy/spikeMan_walk2.png',
    flyMan: 'enemy/flyMan_fly.png',
    spikeBall: 'enemy/spikeBall1.png',
    wingMan1: 'enemy/wingMan1.png',
    wingMan2: 'enemy/wingMan2.png',
  };

  let loadedCount = 0, totalAssets = Object.keys(ASSET_LIST).length;

  function loadAssets(cb) {
    for (const [key, path] of Object.entries(ASSET_LIST)) {
      const img = new Image();
      img.onload = () => { loadedCount++; if (loadedCount === totalAssets) cb(); };
      img.onerror = () => { loadedCount++; if (loadedCount === totalAssets) cb(); };
      img.src = ASSET_BASE + path;
      ASSETS[key] = img;
    }
  }

  /* ---------- 游戏主逻辑 ---------- */
  let G = null;

  function initRunner() {
    const card = document.querySelector('[data-runner]');
    if (!card) return;

    const ov = document.createElement('div');
    ov.className = 'runner-overlay';
    ov.innerHTML = `
      <div class="runner-container">
        <canvas class="runner-canvas"></canvas>
        <div class="runner-hud" style="display:none">
          <div class="runner-hud-left">
            <span class="runner-dist">0</span><span class="runner-unit">丈</span>
            <span class="runner-realm">凡躯</span>
          </div>
          <div class="runner-hud-right">
            <span class="runner-coin-icon">◈</span>
            <span class="runner-coins">0</span>
          </div>
        </div>
        <div class="runner-menu">
          <h2>灵兔跃千山</h2>
          <p class="runner-sub">青草碧连天 · 一跃千山远</p>
          <p class="runner-desc">点按跳跃 · 长按高跃 · 下滑滑铲<br>避尖刺 · 躲飞敌 · 尽收灵石</p>
          <button class="runner-btn" id="rn-start">启 程</button>
          <p class="runner-best" id="rn-best-menu">跃兔之道，始于足下</p>
        </div>
        <div class="runner-over" style="display:none">
          <h3>坠 崖</h3>
          <p id="rn-over-stats">行程 0 丈 · 灵石 0 枚</p>
          <p class="runner-total" id="rn-over-total">总分 0</p>
          <p id="rn-over-realm">此行境界 · 凡躯</p>
          <p class="runner-best" id="rn-best-over">最远纪录 0 分</p>
          <button class="runner-btn" id="rn-retry">再 战</button>
        </div>
        <button class="runner-sound-btn" title="音效">🔊</button>
        <button class="runner-close-btn">归 来</button>
      </div>`;
    document.body.appendChild(ov);

    const canvas = ov.querySelector('.runner-canvas');
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    G = {
      canvas, ctx, W: 0, H: 0, mode: 'menu', running: false, raf: null,
      last: 0, t: 0, elapsed: 0, speed: 220, worldX: 0, dist: 0,
      coins: 0, streak: 0, streakT: 0,
      player: { x: 0, y: 0, vy: 0, w: 40, h: 50, grounded: true, sliding: false, slideT: 0, jumpHeld: false, coyote: 0, jumpBuf: 0 },
      holding: false, slideHeld: false, invuln: 0,
      overAt: 0,
      obstacles: [], coinsArr: [], parts: [], platforms: [], bgClouds: [],
      spawnT: 1.5, groundY: 0,
      reduced,
      animT: 0,
      // HUD refs
      hudDist: ov.querySelector('.runner-dist'),
      hudCoins: ov.querySelector('.runner-coins'),
      hudRealm: ov.querySelector('.runner-realm'),
      hud: ov.querySelector('.runner-hud'),
      menu: ov.querySelector('.runner-menu'),
      over: ov.querySelector('.runner-over'),
      best: parseInt(localStorage.getItem('runner_best') || '0'),
      _d: -1, _s: -1, _r: '',
    };

    // 背景云
    for (let i = 0; i < 6; i++) {
      G.bgClouds.push({ fx: Math.random() * 1.5, fy: rand(0.05, 0.35), sc: rand(0.4, 1.0), sp: rand(0.008, 0.02) });
    }

    /* ---------- 尺寸 ---------- */
    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      G.W = r.width; G.H = r.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      G.groundY = G.H * 0.82;
      G.player.x = G.W * 0.22;
      if (G.mode === 'menu') G.player.y = G.groundY;
    }

    /* ---------- 境界 ---------- */
    function realmOf(d) {
      if (d < 40) return '凡躯';
      if (d < 100) return '矫健';
      if (d < 200) return '疾风';
      if (d < 350) return '闪电';
      if (d < 550) return '幻影';
      return '神行';
    }

    /* ---------- 事件 ---------- */
    ov.querySelector('#rn-start').addEventListener('click', () => { Sound.init(); startRun(); });
    ov.querySelector('#rn-retry').addEventListener('click', () => { Sound.init(); startRun(); });
    ov.querySelector('.runner-close-btn').addEventListener('click', closeGame);

    const soundBtn = ov.querySelector('.runner-sound-btn');
    let muted = false;
    soundBtn.addEventListener('click', () => {
      muted = !muted;
      if (Sound.master) Sound.master.gain.value = muted ? 0 : 0.25;
      soundBtn.textContent = muted ? '🔇' : '🔊';
    });

    // 输入：按住跳跃，下滑滑铲
    function onDown(e) {
      e.preventDefault();
      if (G.mode === 'menu') { Sound.init(); startRun(); return; }
      if (G.mode === 'over') { if (G.t - G.overAt > 0.9) startRun(); return; }
      G.holding = true;
      G.player.jumpHeld = true;
    }
    function onUp() {
      G.holding = false;
      G.player.jumpHeld = false;
    }
    function onSlide(e) {
      e.preventDefault();
      if (G.mode !== 'playing') return;
      G.slideHeld = true;
      if (G.player.grounded && !G.player.sliding) {
        G.player.sliding = true;
        G.player.slideT = 0.5;
        Sound.slide();
      }
    }
    function onSlideEnd() { G.slideHeld = false; }

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);
    // 下滑手势
    let touchStartY = 0;
    canvas.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
    canvas.addEventListener('touchmove', e => {
      if (e.touches[0].clientY - touchStartY > 40) { onSlide(e); onSlideEnd(); }
    }, { passive: true });

    // 键盘
    const keyMap = {};
    document.addEventListener('keydown', e => {
      if (!ov.classList.contains('open')) return;
      if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); if (!keyMap.jump) { keyMap.jump = true; onDown(e); } }
      if (e.code === 'ArrowDown') { e.preventDefault(); onSlide(e); }
    });
    document.addEventListener('keyup', e => {
      if (e.code === 'Space' || e.code === 'ArrowUp') { keyMap.jump = false; onUp(); }
      if (e.code === 'ArrowDown') { onSlideEnd(); }
    });

    card.addEventListener('click', openGame);
    window.addEventListener('resize', () => { if (ov.classList.contains('open')) resize(); });

    /* ---------- 打开/关闭 ---------- */
    function openGame() {
      ov.classList.add('open');
      document.body.style.overflow = 'hidden';
      resize();
      G.mode = 'menu';
      G.menu.style.display = '';
      G.over.style.display = 'none';
      G.hud.style.display = 'none';
      ov.querySelector('#rn-best-menu').textContent = G.best > 0 ? '最远纪录 ' + G.best + ' 分' : '跃兔之道，始于足下';
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

    /* ---------- 开始一局 ---------- */
    function startRun() {
      G.mode = 'playing';
      G.menu.style.display = 'none';
      G.over.style.display = 'none';
      G.hud.style.display = '';
      G.t = 0; G.elapsed = 0; G.dist = 0; G.coins = 0; G.streak = 0; G.streakT = 0;
      G.speed = 220; G.spawnT = 1.8; G.invuln = 1.5;
      G.player.y = G.groundY; G.player.vy = 0; G.player.grounded = true;
      G.player.sliding = false; G.player.slideT = 0;
      G.obstacles.length = 0; G.coinsArr.length = 0; G.parts.length = 0;
      G._d = -1; G._s = -1; G._r = '';
      Sound.setWind(0.04);
    }

    /* ---------- 死亡 ---------- */
    function die(cause) {
      if (G.invuln > 0) return;
      G.mode = 'over';
      G.overAt = G.t;
      G.holding = false;
      Sound.thud();
      Sound.setWind(0.02);
      // 粒子散开
      const n = G.reduced ? 12 : 28;
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2, sp = rand(30, 200);
        G.parts.push({ type: 'dust', x: G.player.x, y: G.player.y - G.player.h / 2,
          vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 40,
          life: 0, max: rand(0.4, 0.9), size: rand(3, 8) });
      }
      const total = Math.floor(G.dist) + G.coins * 20;
      if (total > G.best) { G.best = total; localStorage.setItem('runner_best', String(total)); }
      ov.querySelector('#rn-over-stats').textContent = '行程 ' + Math.floor(G.dist) + ' 丈 · 灵石 ' + G.coins + ' 枚';
      ov.querySelector('#rn-over-total').textContent = '总分 ' + total;
      ov.querySelector('#rn-over-realm').textContent = '此行境界 · ' + realmOf(G.dist);
      ov.querySelector('#rn-best-over').textContent = '最远纪录 ' + G.best + ' 分';
      setTimeout(() => { if (G.mode === 'over') { G.hud.style.display = 'none'; G.over.style.display = ''; } }, 650);
    }

    /* ---------- 生成障碍物 ---------- */
    function spawnPattern() {
      const r = Math.random();
      const gy = G.groundY;
      if (r < 0.35) {
        // 地面尖刺怪（行走）
        const w = 36, h = 40;
        G.obstacles.push({
          type: 'spikeMan', x: G.W + 60, y: gy, w, h,
          animT: 0, frames: ['spikeMan_walk1', 'spikeMan_walk2'],
        });
        // 灵石弧线
        if (Math.random() < 0.6) {
          const n = 3 + Math.floor(Math.random() * 3);
          for (let i = 0; i < n; i++) {
            G.coinsArr.push({ x: G.W + 60 + w / 2 + (i - (n - 1) / 2) * 36, y: gy - rand(50, 90), ph: Math.random() * 7 });
          }
        }
      } else if (r < 0.55) {
        // 飞行敌人（低空）
        const w = 40, h = 36;
        const fy = gy - rand(30, 70);
        G.obstacles.push({
          type: 'flyMan', x: G.W + 60, y: fy, w, h,
          animT: 0, frames: ['flyMan'],
        });
        if (Math.random() < 0.5) {
          const n = 4 + Math.floor(Math.random() * 3);
          for (let i = 0; i < n; i++) {
            G.coinsArr.push({ x: G.W + 60 + i * 32, y: fy - rand(20, 50) + Math.sin(i * 0.8) * 25, ph: Math.random() * 7 });
          }
        }
      } else if (r < 0.72) {
        // 尖刺球（滚动）
        const w = 34, h = 34;
        G.obstacles.push({
          type: 'spikeBall', x: G.W + 60, y: gy, w, h,
          animT: 0, rotSpd: rand(3, 6),
        });
      } else if (r < 0.85) {
        // 高空飞行敌人（需要滑铲）
        const w = 38, h = 30;
        const fy = gy - rand(50, 80);
        G.obstacles.push({
          type: 'wingMan', x: G.W + 60, y: fy, w, h,
          animT: 0, frames: ['wingMan1', 'wingMan2'],
        });
      } else {
        // 灵石串（纯奖励）
        const n = 5 + Math.floor(Math.random() * 4);
        const baseY = gy - rand(40, 100);
        for (let i = 0; i < n; i++) {
          G.coinsArr.push({ x: G.W + 60 + i * 34, y: baseY + Math.sin(i / n * Math.PI * 2) * 30, ph: Math.random() * 7 });
        }
      }
    }

    /* ---------- 更新 ---------- */
    function update(dt) {
      G.elapsed += dt;
      G.speed = Math.min(580, 220 + G.elapsed * 5.5);
      const vx = G.speed * dt;
      G.worldX += vx;
      G.dist += vx / 40;
      G.animT += dt;

      if (G.invuln > 0) G.invuln -= dt;
      if (G.streakT > 0) { G.streakT -= dt; if (G.streakT <= 0) G.streak = 0; }

      const p = G.player;
      const gravity = 1800;
      const jumpForce = -720;
      const groundY = G.groundY;

      // 跳跃缓冲和土狼时间
      if (p.grounded) { p.coyote = 0.12; } else { p.coyote -= dt; }
      if (G.holding && p.jumpHeld) { p.jumpBuf = 0.12; } else { p.jumpBuf -= dt; }

      // 滑铲
      if (p.sliding) {
        p.slideT -= dt;
        if (p.slideT <= 0) p.sliding = false;
      }

      // 跳跃
      if (p.jumpBuf > 0 && p.coyote > 0) {
        p.vy = jumpForce * (G.holding ? 1 : 0.6);
        p.grounded = false;
        p.coyote = 0; p.jumpBuf = 0;
        Sound.jump();
        // 尘土粒子
        if (!G.reduced) {
          for (let i = 0; i < 6; i++) {
            G.parts.push({ type: 'dust', x: p.x + rand(-10, 10), y: groundY,
              vx: rand(-40, 40), vy: rand(-30, -5), life: 0, max: rand(0.3, 0.6), size: rand(3, 7) });
          }
        }
      }
      // 按住跳跃更高
      if (!p.grounded && G.holding && p.vy < 0) {
        p.vy -= 800 * dt; // 额外升力
      }

      p.vy += gravity * dt;
      p.vy = clamp(p.vy, -800, 900);
      p.y += p.vy * dt;

      // 地面碰撞
      if (p.y >= groundY) {
        if (!p.grounded && p.vy > 200) {
          // 落地尘土
          if (!G.reduced) {
            for (let i = 0; i < 4; i++) {
              G.parts.push({ type: 'dust', x: p.x + rand(-8, 8), y: groundY,
                vx: rand(-30, 30), vy: rand(-15, -3), life: 0, max: rand(0.2, 0.4), size: rand(2, 5) });
            }
          }
        }
        p.y = groundY;
        p.vy = 0;
        p.grounded = true;
      }

      // 生成
      G.spawnT -= dt;
      if (G.spawnT <= 0) {
        spawnPattern();
        G.spawnT = clamp(rand(1.5, 2.2) - G.elapsed * 0.004, 1.0, 2.2);
      }

      // 移动障碍物
      for (const ob of G.obstacles) {
        ob.x -= vx * (ob.type === 'flyMan' ? 1.3 : ob.type === 'wingMan' ? 1.15 : 1);
        ob.animT = (ob.animT || 0) + dt;
      }
      G.obstacles = G.obstacles.filter(ob => ob.x + ob.w > -80);

      // 移动灵石
      for (const c of G.coinsArr) c.x -= vx;
      G.coinsArr = G.coinsArr.filter(c => c.x > -40 && !c.dead);

      // 粒子
      for (const pt of G.parts) {
        pt.life += dt; pt.x += pt.vx * dt; pt.y += pt.vy * dt;
        if (pt.type === 'dust') pt.vy += 300 * dt;
      }
      G.parts = G.parts.filter(pt => pt.life < pt.max);

      // 碰撞
      if (G.invuln <= 0) {
        const pw = p.sliding ? 32 : 28, ph = p.sliding ? 24 : 42;
        const px1 = p.x - pw / 2, px2 = p.x + pw / 2;
        const py1 = p.y - ph, py2 = p.y;

        for (const ob of G.obstacles) {
          const ox1 = ob.x, ox2 = ob.x + ob.w;
          const oy1 = ob.y - ob.h, oy2 = ob.y;
          if (px2 > ox1 + 4 && px1 < ox2 - 4 && py2 > oy1 + 4 && py1 < oy2 - 4) {
            die(ob.type); return;
          }
        }
      }

      // 灵石收集
      for (const c of G.coinsArr) {
        const dx = c.x - p.x, dy = c.y - (p.y - 25);
        if (dx * dx + dy * dy < 30 * 30) {
          c.dead = true;
          G.coins++;
          G.streak = Math.min(G.streak + 1, 8);
          G.streakT = 2.2;
          Sound.collect(G.streak - 1);
          if (!G.reduced) {
            for (let i = 0; i < 6; i++) {
              const a = Math.random() * Math.PI * 2, sp = rand(20, 80);
              G.parts.push({ type: 'spark', x: c.x, y: c.y,
                vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
                life: 0, max: rand(0.2, 0.5), size: rand(3, 6) });
            }
          }
        }
      }

      // HUD
      const d = Math.floor(G.dist);
      if (d !== G._d) { G._d = d; G.hudDist.textContent = d; }
      if (G.coins !== G._s) { G._s = G.coins; G.hudCoins.textContent = G.coins; }
      const rl = realmOf(G.dist);
      if (rl !== G._r) { G._r = rl; G.hudRealm.textContent = rl; }
      Sound.setWind(0.03 + (G.speed / 580) * 0.08);
    }

    /* ---------- 绘制 ---------- */
    function drawImage(img, x, y, w, h) {
      if (img.complete && img.naturalWidth > 0) {
        ctx.drawImage(img, x, y, w, h);
      }
    }

    function drawParallax(img, factor, offsetY, scaleH) {
      if (!img.complete || img.naturalWidth === 0) return;
      const scale = (scaleH || G.H) / img.naturalHeight;
      const w = img.naturalWidth * scale;
      const offset = -(G.worldX * factor) % w;
      for (let x = offset - w; x < G.W + w; x += w) {
        ctx.drawImage(img, x, offsetY || 0, w, scaleH || G.H);
      }
    }

    function render() {
      const p = G.player;
      ctx.clearRect(0, 0, G.W, G.H);

      // 天空渐变
      const sky = ctx.createLinearGradient(0, 0, 0, G.H);
      sky.addColorStop(0, '#87CEEB');
      sky.addColorStop(0.5, '#B8E0F0');
      sky.addColorStop(1, '#E8F5E0');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, G.W, G.H);

      // 背景视差层
      drawParallax(ASSETS.bg1, 0.05, 0, G.H);
      drawParallax(ASSETS.bg2, 0.12, 0, G.H);
      drawParallax(ASSETS.bg3, 0.25, 0, G.H);
      drawParallax(ASSETS.bg4, 0.45, 0, G.H);

      // 背景云
      for (const bc of G.bgClouds) {
        bc.fx -= bc.sp * 0.016;
        if (bc.fx < -0.3) bc.fx = 1.3;
        const cw = 80 * bc.sc, ch = 40 * bc.sc;
        ctx.globalAlpha = 0.5 * bc.sc;
        drawImage(ASSETS.cloud, bc.fx * G.W, bc.fy * G.H, cw, ch);
        ctx.globalAlpha = 1;
      }

      // 地面 tile 平铺
      const groundH = 48;
      const groundW = ASSETS.ground.complete && ASSETS.ground.naturalWidth > 0
        ? (ASSETS.ground.naturalWidth / ASSETS.ground.naturalHeight) * groundH : 64;
      const groundOffset = -(G.worldX) % groundW;
      for (let x = groundOffset - groundW; x < G.W + groundW; x += groundW) {
        drawImage(ASSETS.ground, x, G.groundY, groundW, groundH);
      }
      // 地面下方填充
      ctx.fillStyle = '#5B8C3E';
      ctx.fillRect(0, G.groundY + groundH, G.W, G.H - G.groundY - groundH);

      // 装饰草
      const grassSpacing = 180;
      const grassOffset = -(G.worldX) % grassSpacing;
      for (let x = grassOffset - grassSpacing; x < G.W + grassSpacing; x += grassSpacing) {
        const seed = Math.floor((x + G.worldX) / grassSpacing);
        const img = seed % 2 === 0 ? ASSETS.grass1 : ASSETS.grass2;
        const gh = 20 + (seed % 3) * 5;
        drawImage(img, x + (seed % 5) * 20, G.groundY - gh + 4, 24, gh);
      }

      // 灵石
      for (const c of G.coinsArr) {
        const bob = Math.sin(G.t * 3 + c.ph) * 4;
        const sz = 20;
        ctx.save();
        ctx.translate(c.x, c.y + bob);
        ctx.rotate(Math.sin(G.t * 2 + c.ph) * 0.2);
        // 发光菱形
        const grad = ctx.createRadialGradient(0, 0, 2, 0, 0, sz);
        grad.addColorStop(0, 'rgba(120,220,255,0.9)');
        grad.addColorStop(0.5, 'rgba(60,180,240,0.5)');
        grad.addColorStop(1, 'rgba(30,140,220,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(-sz, -sz, sz * 2, sz * 2);
        ctx.beginPath();
        ctx.moveTo(0, -sz * 0.6); ctx.lineTo(sz * 0.35, 0); ctx.lineTo(0, sz * 0.6); ctx.lineTo(-sz * 0.35, 0);
        ctx.closePath();
        ctx.fillStyle = '#40C8FF';
        ctx.fill();
        ctx.strokeStyle = '#80E0FF';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // 障碍物
      for (const ob of G.obstacles) {
        let img;
        if (ob.type === 'spikeMan') {
          const frame = Math.floor(ob.animT * 6) % 2;
          img = ASSETS[ob.frames[frame]];
        } else if (ob.type === 'flyMan') {
          img = ASSETS.flyMan;
        } else if (ob.type === 'spikeBall') {
          img = ASSETS.spikeBall;
          ctx.save();
          ctx.translate(ob.x + ob.w / 2, ob.y - ob.h / 2);
          ctx.rotate(ob.animT * ob.rotSpd);
          drawImage(img, -ob.w / 2, -ob.h / 2, ob.w, ob.h);
          ctx.restore();
          continue;
        } else if (ob.type === 'wingMan') {
          const frame = Math.floor(ob.animT * 8) % 2;
          img = ASSETS[ob.frames[frame]];
        }
        if (img) drawImage(img, ob.x, ob.y - ob.h, ob.w, ob.h);
      }

      // 粒子
      for (const pt of G.parts) {
        const alpha = 1 - pt.life / pt.max;
        ctx.globalAlpha = alpha * 0.6;
        if (pt.type === 'dust') {
          ctx.fillStyle = '#B8A080';
          ctx.beginPath(); ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2); ctx.fill();
        } else if (pt.type === 'spark') {
          ctx.fillStyle = '#60D0FF';
          ctx.beginPath(); ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2); ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      // 玩家
      const blink = G.invuln > 0 && Math.floor(G.t * 12) % 2 === 0;
      if (!blink || G.mode !== 'playing') {
        let pImg;
        const ph = p.sliding ? 28 : 50;
        const pw = p.sliding ? 44 : 40;
        if (G.mode === 'over') {
          pImg = ASSETS.bunny_hurt;
        } else if (!p.grounded) {
          pImg = ASSETS.bunny_jump;
        } else if (p.sliding) {
          pImg = ASSETS.bunny_ready;
        } else {
          const frame = Math.floor(G.animT * 10) % 2;
          pImg = frame === 0 ? ASSETS.bunny_walk1 : ASSETS.bunny_walk2;
        }
        // 滑铲时压扁
        ctx.save();
        if (p.sliding) {
          ctx.translate(p.x, p.y);
          ctx.scale(1, 0.6);
          drawImage(pImg, -pw / 2, -ph, pw, ph);
        } else {
          drawImage(pImg, p.x - pw / 2, p.y - ph, pw, ph);
        }
        ctx.restore();
      }

      // 菜单模式的装饰动画
      if (G.mode === 'menu') {
        // 轻轻的呼吸浮动
        ctx.globalAlpha = 0.03;
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, G.W, G.H);
        ctx.globalAlpha = 1;
      }
    }

    /* ---------- 主循环 ---------- */
    function tick(now) {
      if (!G.running) return;
      const dt = Math.min((now - G.last) / 1000, 0.033);
      G.last = now;
      G.t += dt;
      if (G.mode === 'playing') {
        update(dt);
      } else {
        // 菜单/结算背景缓动
        G.worldX += 25 * dt;
        if (G.mode === 'menu') {
          G.dist = (G.dist + 10 * dt) % 6400;
        }
        for (const pt of G.parts) { pt.life += dt; pt.x += pt.vx * dt; pt.y += pt.vy * dt; if (pt.type === 'dust') pt.vy += 300 * dt; }
        G.parts = G.parts.filter(pt => pt.life < pt.max);
      }
      render();
      G.raf = requestAnimationFrame(tick);
    }

    window.__runner = { get G() { return G; }, startRun: () => { if (G) { Sound.init(); startRun(); } } };
  }

  /* ---------- 启动 ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => loadAssets(initRunner));
  } else {
    loadAssets(initRunner);
  }
})();
