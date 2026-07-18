import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initIntroScene(content) {
  const titleChars = document.querySelectorAll('.intro-title .brush-text');
  const subtitle = document.querySelector('.intro-subtitle');
  const quote = document.querySelector('.intro-quote');

  titleChars.forEach((char) => {
    const length = char.getComputedTextLength();
    char.style.strokeDasharray = length;
    char.style.strokeDashoffset = length;
    char.style.fill = 'transparent';
  });

  const tl = gsap.timeline({ delay: 0.8 });

  tl.to(titleChars, {
    strokeDashoffset: 0,
    fill: '#f5f0e6',
    duration: 2.5,
    stagger: 0.4,
    ease: 'power2.inOut'
  })
  .to(subtitle, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=1')
  .to(quote, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.6');

  ScrollTrigger.create({
    trigger: '#intro',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
      gsap.to('.intro-content', {
        opacity: 1 - self.progress,
        y: self.progress * -80,
        duration: 0.1
      });
    }
  });
}
