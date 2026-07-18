import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initOutroScene(content) {
  const line = document.querySelector('.outro-line');
  const hint = document.querySelector('.outro-hint');

  gsap.timeline({
    scrollTrigger: {
      trigger: '#outro',
      start: 'top 60%',
      end: 'top 30%',
      scrub: 1
    }
  })
  .to(line, { opacity: 1, y: 0, duration: 0.8 })
  .to(hint, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
}
