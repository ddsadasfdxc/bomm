import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initCharacterScene(content) {
  const scrollPaper = document.querySelector('.scroll-paper');
  const infoItems = document.querySelectorAll('.character-info dd');
  const title = document.querySelector('.section-character .section-title');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#character',
      start: 'top 70%',
      end: 'top 20%',
      scrub: 1
    }
  });

  tl.to(scrollPaper, {
    clipPath: 'inset(0 0% 0 0)',
    duration: 1.5,
    ease: 'power2.inOut'
  })
  .fromTo(title,
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.6 },
    '-=0.8'
  )
  .to(infoItems, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  }, '-=0.4');
}
