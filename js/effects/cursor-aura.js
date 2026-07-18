export class CursorAura {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.lastMouse = { x: -1000, y: -1000 };
    this.isActive = true;

    this.onMove = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', this.onMove);
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  spawnParticle(x, y) {
    this.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5 - 0.3,
      life: 1,
      size: Math.random() * 3 + 1
    });
  }

  animate() {
    if (!this.isActive) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const dx = this.mouse.x - this.lastMouse.x;
    const dy = this.mouse.y - this.lastMouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 5) {
      const steps = Math.min(dist / 5, 5);
      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        this.spawnParticle(
          this.lastMouse.x + dx * t + (Math.random() - 0.5) * 8,
          this.lastMouse.y + dy * t + (Math.random() - 0.5) * 8
        );
      }
      this.lastMouse.x = this.mouse.x;
      this.lastMouse.y = this.mouse.y;
    }

    this.particles = this.particles.filter((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.015;
      p.size *= 0.98;

      if (p.life <= 0) return false;

      this.ctx.beginPath();
      const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      gradient.addColorStop(0, `rgba(91, 122, 118, ${p.life * 0.4})`);
      gradient.addColorStop(1, 'rgba(91, 122, 118, 0)');
      this.ctx.fillStyle = gradient;
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      return true;
    });

    requestAnimationFrame(() => this.animate());
  }

  destroy() {
    this.isActive = false;
    window.removeEventListener('mousemove', this.onMove);
  }
}
