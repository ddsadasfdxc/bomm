export function initScrollReveal() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.section-card, .note-card, .path-item, .explore-header').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
}

export function initTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.tilt-card, .section-card, .note-card, .path-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = x / rect.width - 0.5;
      const cy = y / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${cx * 6}deg) rotateX(${-cy * 6}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

export function initProgressInk() {
  const bar = document.createElement('div');
  bar.className = 'scroll-ink';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scroll = (h.scrollTop || document.body.scrollTop);
    const total = h.scrollHeight - h.clientHeight;
    bar.style.width = (total ? (scroll / total) * 100 : 0) + '%';
  }, { passive: true });
}
