/**
 * 超逼真雨滴碰撞系统（像素级）
 * - 雨滴下落并受重力加速
 * - 与页面上真实文字像素发生碰撞，碰到笔画后反弹/溅射
 * - 落底后产生涟漪
 */

export function initRainCollision(canvas) {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let drops = [];
  let splashes = [];
  let ripples = [];
  let textMask = null;
  let lastTime = 0;
  let rafId = null;
  let active = true;

  const MAX_DROPS = 220;
  const GRAVITY = 0.38;
  const WIND = 0.35;
  const AIR_RESISTANCE = 0.994;

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

  function createDrop() {
    return {
      x: Math.random() * (width + 200) - 100,
      y: -Math.random() * 120 - 20,
      vx: (Math.random() - 0.5) * 1.2 + WIND,
      vy: Math.random() * 3 + 7,
      len: Math.random() * 14 + 9,
      width: Math.random() * 1.3 + 0.5,
      alpha: Math.random() * 0.35 + 0.25,
      collided: false,
      collideCooldown: 0,
    };
  }

  function spawnSplash(x, y, nx, ny) {
    const count = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < count; i++) {
      const speed = Math.random() * 3.5 + 1.2;
      const spread = 1.4;
      const angle = Math.atan2(-ny, nx) + (Math.random() - 0.5) * spread;
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

  function updateDrop(drop) {
    drop.vy += GRAVITY;
    drop.vx *= AIR_RESISTANCE;
    drop.vy *= AIR_RESISTANCE;

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

          // 沿法线反向推出笔画，避免卡在里面
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
      Object.assign(drop, createDrop());
    }
  }

  function drawDrop(drop) {
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

  function frame(timestamp) {
    if (!active) return;
    const dt = Math.min((timestamp - lastTime) / 16.67, 2) || 1;
    lastTime = timestamp;

    ctx.clearRect(0, 0, width, height);

    while (drops.length < MAX_DROPS) drops.push(createDrop());

    for (let i = drops.length - 1; i >= 0; i--) {
      const drop = drops[i];
      updateDrop(drop);
      drawDrop(drop);
    }

    for (let i = splashes.length - 1; i >= 0; i--) {
      const s = splashes[i];
      s.vy += GRAVITY * 0.6;
      s.x += s.vx;
      s.y += s.vy;
      s.life -= 0.032 * dt;
      if (s.life <= 0) {
        splashes.splice(i, 1);
      } else {
        drawSplash(s);
      }
    }

    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.r += 0.55 * dt;
      r.life -= 0.018 * dt;
      if (r.life <= 0 || r.r >= r.maxR) {
        ripples.splice(i, 1);
      } else {
        drawRipple(r);
      }
    }

    rafId = requestAnimationFrame(frame);
  }

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
    destroy() {
      active = false;
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    },
  };
}
