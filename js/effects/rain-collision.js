/**
 * 超逼真雨滴碰撞系统
 * - 雨滴下落并受重力加速
 * - 与 DOM 文字元素（如 .brush-text）发生矩形碰撞后反弹/溅射
 * - 落地后产生涟漪
 */

export function initRainCollision(canvas) {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let drops = [];
  let splashes = [];
  let ripples = [];
  let obstacles = [];
  let lastTime = 0;
  let rafId = null;
  let active = true;

  const MAX_DROPS = 180;
  const GRAVITY = 0.35;
  const WIND = 0.3;
  const AIR_RESISTANCE = 0.992;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    updateObstacles();
  }

  function updateObstacles() {
    obstacles = [];
    document.querySelectorAll('.brush-text, .intro-subtitle, .intro-quote, .blog-title').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        obstacles.push({
          x: rect.left,
          y: rect.top,
          w: rect.width,
          h: rect.height,
          el,
        });
      }
    });
  }

  function createDrop() {
    return {
      x: Math.random() * (width + 200) - 100,
      y: -Math.random() * 80 - 20,
      vx: (Math.random() - 0.5) * 1.5 + WIND,
      vy: Math.random() * 3 + 6,
      len: Math.random() * 12 + 8,
      width: Math.random() * 1.2 + 0.6,
      alpha: Math.random() * 0.35 + 0.25,
      life: 1,
    };
  }

  function spawnSplash(x, y, nx, ny) {
    const count = Math.floor(Math.random() * 4) + 3;
    for (let i = 0; i < count; i++) {
      const speed = Math.random() * 3 + 1.5;
      const angle = Math.atan2(-ny, nx) + (Math.random() - 0.5) * 1.6;
      splashes.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        life: 1,
        alpha: Math.random() * 0.5 + 0.3,
        size: Math.random() * 1.5 + 0.5,
      });
    }
  }

  function spawnRipple(x, y) {
    if (Math.random() > 0.6) return;
    ripples.push({
      x,
      y,
      r: 0,
      maxR: Math.random() * 18 + 10,
      alpha: Math.random() * 0.35 + 0.25,
      life: 1,
    });
  }

  function reflectVelocity(vx, vy, nx, ny) {
    const dot = vx * nx + vy * ny;
    const restitution = 0.4 + Math.random() * 0.25;
    const friction = 0.85;
    const rx = (vx - 2 * dot * nx) * restitution;
    const ry = (vy - 2 * dot * ny) * restitution;
    return {
      x: nx === 0 ? rx * friction : rx,
      y: ny === 0 ? ry * friction : ry,
    };
  }

  function updateDrop(drop) {
    drop.vy += GRAVITY;
    drop.vx *= AIR_RESISTANCE;
    drop.vy *= AIR_RESISTANCE;
    drop.x += drop.vx;
    drop.y += drop.vy;

    let collided = false;
    for (const ob of obstacles) {
      const nextX = drop.x + drop.vx;
      const nextY = drop.y + drop.vy;
      if (
        nextX >= ob.x &&
        nextX <= ob.x + ob.w &&
        nextY >= ob.y &&
        nextY <= ob.y + ob.h
      ) {
        const prevX = drop.x - drop.vx;
        const prevY = drop.y - drop.vy;
        let nx = 0, ny = 0;
        if (prevX < ob.x) nx = -1;
        else if (prevX > ob.x + ob.w) nx = 1;
        else if (prevY < ob.y) ny = -1;
        else ny = 1;

        const reflected = reflectVelocity(drop.vx, drop.vy, nx, ny);
        drop.vx = reflected.x;
        drop.vy = reflected.y;

        if (nx !== 0) {
          drop.x = nx < 0 ? ob.x - 1 : ob.x + ob.w + 1;
        } else {
          drop.y = ny < 0 ? ob.y - 1 : ob.y + ob.h + 1;
        }

        spawnSplash(drop.x, drop.y, nx, ny);
        collided = true;
        break;
      }
    }

    if (!collided && drop.y > height + 10) {
      spawnRipple(drop.x, height - 4);
      Object.assign(drop, createDrop());
    }
  }

  function drawDrop(drop) {
    const speed = Math.hypot(drop.vx, drop.vy);
    const angle = Math.atan2(drop.vy, drop.vx);
    ctx.save();
    ctx.translate(drop.x, drop.y);
    ctx.rotate(angle);
    const grad = ctx.createLinearGradient(-drop.len / 2, 0, drop.len / 2, 0);
    grad.addColorStop(0, `rgba(200, 210, 220, 0)`);
    grad.addColorStop(0.5, `rgba(210, 220, 230, ${drop.alpha})`);
    grad.addColorStop(1, `rgba(200, 210, 220, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(0, 0, drop.len / 2, drop.width / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawSplash(s) {
    ctx.fillStyle = `rgba(210, 220, 230, ${s.alpha * s.life})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawRipple(r) {
    ctx.strokeStyle = `rgba(200, 210, 220, ${r.alpha * r.life})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(r.x, r.y, r.r, r.r * 0.25, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  function frame(timestamp) {
    if (!active) return;
    const dt = Math.min((timestamp - lastTime) / 16.67, 2);
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
      s.life -= 0.03 * dt;
      if (s.life <= 0) {
        splashes.splice(i, 1);
      } else {
        drawSplash(s);
      }
    }

    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.r += 0.6 * dt;
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
    resize();
  });

  const observer = new MutationObserver(updateObstacles);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });

  let resizeTimer;
  window.addEventListener('scroll', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateObstacles, 100);
  });

  rafId = requestAnimationFrame(frame);

  return {
    destroy() {
      active = false;
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    },
  };
}
