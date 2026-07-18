import gsap from 'gsap';

export function initIntroScene(content) {
  const titleChars = document.querySelectorAll('.intro-title .brush-text');
  const subtitle = document.querySelector('.intro-subtitle');
  const quote = document.querySelector('.intro-quote');
  const desc = document.querySelector('.intro-desc');

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
  .to(quote, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.6')
  .to(desc, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.6');
}
