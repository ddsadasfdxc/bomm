export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isMobile() {
  return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
}
