/**
 * 统一天气效果系统
 * 支持 rain / snow / none 三种模式
 * - 雨滴：像素级文字碰撞、反弹、溅射、底部涟漪
 * - 雪花：3D 远近透视、飘动、文字堆积/滑落
 * - 设置面板持久化到 localStorage
 */

const STORAGE_KEY = 'wenruo-weather-mode';

export function initWeather(canvas) {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let particles = [];
  let splashes = [];
  let ripples = [];
  let snowStuck = []; // 堆积在文字上的雪花
  let textMask = null;
  let lastTime = 0;
  let rafId = null;
  let active = true;
  let mode = 'none';

  const MODES = ['rain', 'snow', 'none'];
  const MAX_PARTICLES = { rain: 220, snow: 300 };
  const GRAVITY = { rain: 0.38, snow: 0.06 };
  const WIND = 0.25;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildTextMask();
  }

  async function buildTextMask() {
    await document.fonts.ready;
    const maskCanvas = document.createElement('canvas');
    const mw = Math.max(1, Math.floor(width * dpr));
    const mh = Math.max(1, Math.floor(height * dpr));
    maskCanvas.width = mw;
    maskCanvas.height = mh;
    const mctx = maskCanvas.getContext('2d');
    mctx.clearRect(0, 0, mw, mh);

    const selectors = '.brush-text, .intro-subtitle, .intro-quote, .blog-title, .section-title';
    document.querySelectorAll(selectors).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize) || 16;
      const fontWeight = style.fontWeight || 700;
      const fontFamily = style.fontFamily || '"LXGW WenKai", serif';
      const text = el.textContent?.trim();
      if (!text) return;

      mctx.save();
      mctx.scale(dpr, dpr);
      mctx.fillStyle = 'rgba(0,0,0,1)';
      mctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      mctx.textAlign = 'center';
      mctx.textBaseline = 'middle';
      mctx.fillText(text, rect.left + rect.width / 2, rect.top + rect.height / 2);
      mctx.restore();
    });

    textMask = {
      data: mctx.getImageData(0, 0, mw, mh).data,
      width: mw,
      height: mh,
      dpr,
    };
  }

  function getAlpha(x, y) {
    if (!textMask) return 0;
    const ix = Math.floor(x * textMask.dpr);
    const iy = Math.floor(y * textMask.dpr);
    if (ix < 0 || ix >= textMask.width || iy < 0 || iy >= textMask.height) return 0;
    return textMask.data[(iy * textMask.width + ix) * 4 + 3];
  }

  function getNormal(x, y) {
    const r = 3;
    let dx = 0, dy = 0, total = 0;
    for (let oy = -r; oy <= r; oy++) {
      for (let ox = -r; ox <= r; ox++) {
        const a = getAlpha(x + ox, y + oy);
        dx += ox * a;
        dy += oy * a;
        total += a;
      }
    }
    if (total < 1) return { x: 0, y: -1 };
    const len = Math.hypot(dx, dy);
    if (len < 1) return { x: 0, y: -1 };
    return { x: dx / len, y: dy / len };
  }

  function createRainDrop() {
    return {
      type: 'rain',
      x: Math.random() * (width + 200) - 100,
      y: -Math.random() * 120 - 20,
      vx: (Math.random() - 0.5) * 1.2 + WIND,
      vy: Math.random() * 3 + 7,
      len: Math.random() * 14 + 9,
      width: Math.random() * 1.3 + 0.5,
      alpha: Math.random() * 0.35 + 0.25,
      collideCooldown: 0,
    };
  }

  function createSnowflake() {
    const z = Math.random();
    return {
      type: 'snow',
      x: Math.random() * (width + 200) - 100,
      y: -Math.random() * 100 - 10,
      z,
      size: (1 - z * 0.7) * 4 + 1, // 远近大小 1.3 ~ 5
      vy: (1 - z * 0.6) * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.6,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.02 + Math.random() * 0.03,
      alpha: 0.4 + (1 - z) * 0.45,
      blur: z * 1.2,
      stuck: false,
      stuckX: 0,
      stuckY: 0,
      stuckLife: 0,
    };
  }

  function spawnSplash(x, y, nx, ny) {
    const count = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < count; i++) {
      const speed = Math.random() * 3.5 + 1.2;
      const angle = Math.atan2(-ny, nx) + (Math.random() - 0.5) * 1.4;
      splashes.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2,
        life: 1,
        alpha: Math.random() * 0.55 + 0.35,
        size: Math.random() * 1.8 + 0.4,
      });
    }
  }

  function spawnRipple(x, y) {
    if (Math.random() > 0.55) return;
    ripples.push({
      x,
      y,
      r: 0,
      maxR: Math.random() * 20 + 10,
      alpha: Math.random() * 0.35 + 0.2,
      life: 1,
    });
  }

  function reflectVelocity(vx, vy, nx, ny) {
    const dot = vx * nx + vy * ny;
    const restitution = 0.35 + Math.random() * 0.25;
    return {
      x: (vx - 2 * dot * nx) * restitution,
      y: (vy - 2 * dot * ny) * restitution,
    };
  }

  function updateRain(drop) {
    drop.vy += GRAVITY.rain;
    drop.vx *= 0.994;
    drop.vy *= 0.994;

    const steps = Math.max(1, Math.ceil(Math.hypot(drop.vx, drop.vy) / 4));
    const stepX = drop.vx / steps;
    const stepY = drop.vy / steps;

    for (let s = 0; s < steps; s++) {
      drop.x += stepX;
      drop.y += stepY;

      if (drop.collideCooldown > 0) drop.collideCooldown--;

      if (drop.collideCooldown <= 0) {
        const alpha = getAlpha(drop.x, drop.y);
        if (alpha > 40) {
          const normal = getNormal(drop.x, drop.y);
          const reflected = reflectVelocity(drop.vx, drop.vy, normal.x, normal.y);
          drop.vx = reflected.x + normal.x * 1.5;
          drop.vy = reflected.y + normal.y * 1.5;
          drop.x -= normal.x * 3;
          drop.y -= normal.y * 3;
          spawnSplash(drop.x, drop.y, normal.x, normal.y);
          drop.collideCooldown = 8;
          break;
        }
      }
    }

    if (drop.y > height + 10) {
      spawnRipple(drop.x, height - 4);
      Object.assign(drop, createRainDrop());
    }
  }

  function updateSnow(f) {
    if (f.stuck) {
      f.stuckLife -= 0.008;
      if (f.stuckLife <= 0 || Math.random() < 0.02) {
        f.stuck = false;
        f.vy = 0.5;
        f.y += 2;
      }
      return;
    }

    f.sway += f.swaySpeed;
    f.vx += Math.sin(f.sway) * 0.015;
    f.x += f.vx + WIND * (1 - f.z * 0.5);
    f.y += f.vy;

    // 文字堆积
    if (getAlpha(f.x, f.y + f.size) > 30) {
      if (Math.random() > 0.4) {
        f.stuck = true;
        f.stuckLife = 0.7 + Math.random() * 0.5;
        f.stuckX = f.x;
        f.stuckY = f.y;
        snowStuck.push({ x: f.x, y: f.y, size: f.size, alpha: f.alpha, life: 1, z: f.z });
      } else {
        const normal = getNormal(f.x, f.y + f.size);
        f.vx += normal.x * 0.3;
        f.vy = Math.max(0.4, f.vy + normal.y * 0.2);
      }
    }

    if (f.y > height + 10 || f.x > width + 50 || f.x < -50) {
      Object.assign(f, createSnowflake());
    }
  }

  function drawRain(drop) {
    const angle = Math.atan2(drop.vy, drop.vx);
    ctx.save();
    ctx.translate(drop.x, drop.y);
    ctx.rotate(angle);
    const grad = ctx.createLinearGradient(-drop.len / 2, 0, drop.len / 2, 0);
    grad.addColorStop(0, `rgba(210, 220, 230, 0)`);
    grad.addColorStop(0.5, `rgba(220, 230, 240, ${drop.alpha})`);
    grad.addColorStop(1, `rgba(210, 220, 230, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(0, 0, drop.len / 2, drop.width / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawSnow(f) {
    ctx.save();
    ctx.filter = `blur(${f.blur}px)`;
    ctx.fillStyle = `rgba(245, 250, 255, ${f.alpha})`;
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawSplash(s) {
    ctx.fillStyle = `rgba(215, 225, 235, ${s.alpha * s.life})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawRipple(r) {
    ctx.strokeStyle = `rgba(205, 215, 225, ${r.alpha * r.life})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(r.x, r.y, r.r, r.r * 0.28, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  function ensureParticles() {
    const target = mode === 'none' ? 0 : MAX_PARTICLES[mode];
    while (particles.length < target) {
      particles.push(mode === 'rain' ? createRainDrop() : createSnowflake());
    }
    while (particles.length > target) {
      particles.pop();
    }
    if (mode === 'none') {
      splashes = [];
      ripples = [];
      snowStuck = [];
    }
  }

  function frame(timestamp) {
    if (!active) return;
    const dt = Math.min((timestamp - lastTime) / 16.67, 2) || 1;
    lastTime = timestamp;

    ctx.clearRect(0, 0, width, height);
    ensureParticles();

    if (mode === 'rain') {
      for (let i = particles.length - 1; i >= 0; i--) {
        updateRain(particles[i]);
        drawRain(particles[i]);
      }

      for (let i = splashes.length - 1; i >= 0; i--) {
        const s = splashes[i];
        s.vy += GRAVITY.rain * 0.6;
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.032 * dt;
        if (s.life <= 0) splashes.splice(i, 1);
        else drawSplash(s);
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.r += 0.55 * dt;
        r.life -= 0.018 * dt;
        if (r.life <= 0 || r.r >= r.maxR) ripples.splice(i, 1);
        else drawRipple(r);
      }
    } else if (mode === 'snow') {
      // 先画堆积（在雪花下面）
      for (let i = snowStuck.length - 1; i >= 0; i--) {
        const s = snowStuck[i];
        s.life -= 0.005;
        if (s.life <= 0) {
          snowStuck.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.filter = `blur(${s.z * 0.8}px)`;
        ctx.fillStyle = `rgba(245, 250, 255, ${s.alpha * s.life})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        updateSnow(particles[i]);
        drawSnow(particles[i]);
      }
    }

    rafId = requestAnimationFrame(frame);
  }

  function setMode(newMode) {
    if (!MODES.includes(newMode)) newMode = 'none';
    if (mode === newMode) return;
    mode = newMode;
    particles = [];
    splashes = [];
    ripples = [];
    snowStuck = [];
    localStorage.setItem(STORAGE_KEY, mode);
    ensureParticles();
  }

  function getMode() {
    return mode;
  }

  // 初始化
  const savedMode = localStorage.getItem(STORAGE_KEY);
  mode = MODES.includes(savedMode) ? savedMode : 'none';

  resize();
  window.addEventListener('resize', () => {
    clearTimeout(resize.resizeTimer);
    resize.resizeTimer = setTimeout(resize, 120);
  });

  const observer = new MutationObserver(() => {
    clearTimeout(resize.resizeTimer);
    resize.resizeTimer = setTimeout(buildTextMask, 150);
  });
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });

  rafId = requestAnimationFrame(frame);

  return {
    setMode,
    getMode,
    destroy() {
      active = false;
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    },
  };
}
