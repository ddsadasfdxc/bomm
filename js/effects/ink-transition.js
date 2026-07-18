import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initInkTransitions() {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section, index) => {
    if (index === 0) return;
    const mask = document.createElement('div');
    mask.className = 'ink-mask';
    mask.style.cssText = `
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, transparent 0%, #0c0f0a 100%);
      pointer-events: none;
      z-index: 10;
      opacity: 0;
    `;
    section.appendChild(mask);

    gsap.fromTo(mask,
      { opacity: 0.8 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 1
        }
      }
    );
  });
}
