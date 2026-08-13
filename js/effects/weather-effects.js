/** Fixed rain effect with text collision, splashes and bottom ripples. */
export function initWeather(canvas) {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let splashes = [];
  let ripples = [];
  let textMask = null;
  let lastTime = 0;
  let rafId = null;
  let active = true;
  const MAX_PARTICLES = 220;
  const GRAVITY = 0.38;
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
      const text = el.textContent?.trim();
      if (!text) return;
      mctx.save();
      mctx.scale(dpr, dpr);
      mctx.fillStyle = 'rgba(0,0,0,1)';
      mctx.font = `${style.fontWeight || 700} ${parseFloat(style.fontSize) || 16}px ${style.fontFamily || 'serif'}`;
      mctx.textAlign = 'center';
      mctx.textBaseline = 'middle';
      mctx.fillText(text, rect.left + rect.width / 2, rect.top + rect.height / 2);
      mctx.restore();
    });

    textMask = { data: mctx.getImageData(0, 0, mw, mh).data, width: mw, height: mh, dpr };
  }

  function getAlpha(x, y) {
    if (!textMask) return 0;
    const ix = Math.floor(x * textMask.dpr);
    const iy = Math.floor(y * textMask.dpr);
    if (ix < 0 || ix >= textMask.width || iy < 0 || iy >= textMask.height) return 0;
    return textMask.data[(iy * textMask.width + ix) * 4 + 3];
  }

  function getNormal(x, y) {
    const radius = 3;
    let dx = 0;
    let dy = 0;
    let total = 0;
    for (let oy = -radius; oy <= radius; oy++) {
      for (let ox = -radius; ox <= radius; ox++) {
        const alpha = getAlpha(x + ox, y + oy);
        dx += ox * alpha;
        dy += oy * alpha;
        total += alpha;
      }
    }
    if (total < 1) return { x: 0, y: -1 };
    const length = Math.hypot(dx, dy);
    return length < 1 ? { x: 0, y: -1 } : { x: dx / length, y: dy / length };
  }

  function createRainDrop() {
    return {
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

  function spawnSplash(x, y, nx, ny) {
    const count = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < count; i++) {
      const speed = Math.random() * 3.5 + 1.2;
      const angle = Math.atan2(-ny, nx) + (Math.random() - 0.5) * 1.4;
      splashes.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 1.2, life: 1, alpha: Math.random() * 0.55 + 0.35, size: Math.random() * 1.8 + 0.4 });
    }
  }

  function spawnRipple(x, y) {
    if (Math.random() > 0.55) return;
    ripples.push({ x, y, r: 0, maxR: Math.random() * 20 + 10, alpha: Math.random() * 0.35 + 0.2, life: 1 });
  }

  function updateRain(drop) {
    drop.vy += GRAVITY;
    drop.vx *= 0.994;
    drop.vy *= 0.994;
    const steps = Math.max(1, Math.ceil(Math.hypot(drop.vx, drop.vy) / 4));
    const stepX = drop.vx / steps;
    const stepY = drop.vy / steps;

    for (let step = 0; step < steps; step++) {
      drop.x += stepX;
      drop.y += stepY;
      if (drop.collideCooldown > 0) drop.collideCooldown--;
      if (drop.collideCooldown <= 0 && getAlpha(drop.x, drop.y) > 40) {
        const normal = getNormal(drop.x, drop.y);
        const dot = drop.vx * normal.x + drop.vy * normal.y;
        const restitution = 0.35 + Math.random() * 0.25;
        drop.vx = (drop.vx - 2 * dot * normal.x) * restitution + normal.x * 1.5;
        drop.vy = (drop.vy - 2 * dot * normal.y) * restitution + normal.y * 1.5;
        drop.x -= normal.x * 3;
        drop.y -= normal.y * 3;
        spawnSplash(drop.x, drop.y, normal.x, normal.y);
        drop.collideCooldown = 8;
        break;
      }
    }

    if (drop.y > height + 10) {
      spawnRipple(drop.x, height - 4);
      Object.assign(drop, createRainDrop());
    }
  }

  function drawRain(drop) {
    const angle = Math.atan2(drop.vy, drop.vx);
    ctx.save();
    ctx.translate(drop.x, drop.y);
    ctx.rotate(angle);
    const gradient = ctx.createLinearGradient(-drop.len / 2, 0, drop.len / 2, 0);
    gradient.addColorStop(0, 'rgba(210, 220, 230, 0)');
    gradient.addColorStop(0.5, `rgba(220, 230, 240, ${drop.alpha})`);
    gradient.addColorStop(1, 'rgba(210, 220, 230, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(0, 0, drop.len / 2, drop.width / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function ensureParticles() {
    while (particles.length < MAX_PARTICLES) particles.push(createRainDrop());
    while (particles.length > MAX_PARTICLES) particles.pop();
  }

  function frame(timestamp) {
    if (!active) return;
    const dt = Math.min((timestamp - lastTime) / 16.67, 2) || 1;
    lastTime = timestamp;
    ctx.clearRect(0, 0, width, height);
    ensureParticles();

    for (let i = particles.length - 1; i >= 0; i--) {
      updateRain(particles[i]);
      drawRain(particles[i]);
    }
    for (let i = splashes.length - 1; i >= 0; i--) {
      const splash = splashes[i];
      splash.vy += GRAVITY * 0.6;
      splash.x += splash.vx;
      splash.y += splash.vy;
      splash.life -= 0.032 * dt;
      if (splash.life <= 0) splashes.splice(i, 1);
      else {
        ctx.fillStyle = `rgba(215, 225, 235, ${splash.alpha * splash.life})`;
        ctx.beginPath();
        ctx.arc(splash.x, splash.y, splash.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = ripples.length - 1; i >= 0; i--) {
      const ripple = ripples[i];
      ripple.r += 0.55 * dt;
      ripple.life -= 0.018 * dt;
      if (ripple.life <= 0 || ripple.r >= ripple.maxR) ripples.splice(i, 1);
      else {
        ctx.strokeStyle = `rgba(205, 215, 225, ${ripple.alpha * ripple.life})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(ripple.x, ripple.y, ripple.r, ripple.r * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    rafId = requestAnimationFrame(frame);
  }

  resize();
  ensureParticles();
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
    destroy() {
      active = false;
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    },
  };
}