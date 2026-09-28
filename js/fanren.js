/* fanren.js — 《凡人修仙传》同人长卷交互
   1) 章节滚动显现  2) 章节展开余韵  3) 卷首/卷尾按钮
   4) 右侧卷轴进度  6) 卷尾星图点亮  7) 飘落花瓣
   全部为渐进增强：JS 失效时内容依然可读。
*/
(() => {
  const root = document.querySelector('.section-fanren');
  if (!root) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const chapters = Array.from(root.querySelectorAll('.fr-chapter'));
  const prologue = root.querySelector('.fr-prologue');

  /* ── 1. 滚动显现 ── */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });

    chapters.forEach((chapter) => revealObserver.observe(chapter));
    if (prologue) revealObserver.observe(prologue);
  } else {
    chapters.forEach((chapter) => chapter.classList.add('is-visible'));
  }

  /* ── 2. 章节展开余韵 ── */
  root.querySelectorAll('.fr-toggle').forEach((toggle) => {
    const more = toggle.parentElement.querySelector('.fr-more');
    if (!more) return;
    toggle.addEventListener('click', () => {
      const open = !more.hidden;
      more.hidden = open;
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.textContent = open ? '展开余韵' : '收起余韵';
    });
  });

  /* ── 3. 卷首/卷尾按钮 ── */
  root.querySelectorAll('[data-fr-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.getAttribute('data-fr-target'));
      if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });

  root.querySelectorAll('[data-fr-top]').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  /* ── 4. 右侧卷轴进度 ── */
  const rail = root.querySelector('.fr-rail');
  const fill = root.querySelector('.fr-rail-fill');
  const dots = Array.from(root.querySelectorAll('.fr-rail-dot'));
  let raf = 0;

  const update = () => {
    raf = 0;

    if (rail) {
      const rect = root.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const raw = (window.scrollY + window.innerHeight * 0.5 - top) / Math.max(1, rect.height);
      const progress = Math.min(1, Math.max(0, raw));
      rail.classList.toggle('is-active', raw > -0.02 && raw < 1.02);
      if (fill) fill.style.height = (progress * 100).toFixed(2) + '%';
      const idx = Math.min(chapters.length - 1, Math.floor(raw * chapters.length));
      dots.forEach((dot, i) => dot.classList.toggle('is-on', i === idx && raw >= 0 && raw <= 1));
    }

  };

  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  /* ── 6. 卷尾星图点亮 ── */
  const stars = root.querySelector('.fr-stars');
  if (stars && 'IntersectionObserver' in window) {
    const starObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        Array.from(stars.querySelectorAll('.fr-star-node')).forEach((node, i) => {
          setTimeout(() => node.classList.add('is-lit'), i * 220);
        });
        starObserver.disconnect();
      });
    }, { threshold: 0.4 });
    starObserver.observe(stars);
  }

  /* ── 7. 飘落花瓣 ── */
  const petalHost = root.querySelector('.fr-petals');
  if (petalHost && !reduceMotion) {
    const count = window.innerWidth < 760 ? 4 : 8;
    for (let i = 0; i < count; i += 1) {
      const petal = document.createElement('i');
      petal.className = 'fr-petal';
      petal.style.left = (Math.random() * 100).toFixed(2) + '%';
      petal.style.animationDuration = (14 + Math.random() * 16).toFixed(1) + 's';
      petal.style.animationDelay = (-Math.random() * 20).toFixed(1) + 's';
      petal.style.setProperty('--fr-drift', (Math.random() * 160 - 80).toFixed(0) + 'px');
      petalHost.appendChild(petal);
    }
  }

  /* ── 8. 章节圆点跳转 ── */
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const target = chapters[Number(dot.dataset.index) || i];
      if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });
})();