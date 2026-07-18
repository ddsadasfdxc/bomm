import { InkParticles } from './effects/ink-particles.js';
import { CloudLayer } from './effects/clouds.js';
import { CursorAura } from './effects/cursor-aura.js';
import { initIntroScene } from './scenes/intro-scene.js';
import { loadContent } from './utils/load-content.js';
import { prefersReducedMotion, isMobile } from './utils/prefers-reduced-motion.js';
import * as THREE from 'three';

export async function initApp() {
  const content = await loadContent();

  document.querySelector('.intro-subtitle').textContent = content.intro.subtitle;
  document.querySelector('.intro-quote').textContent = content.intro.quote;
  document.querySelector('.intro-desc').textContent = content.intro.desc;
  document.title = content.site.title;

  const webglContainer = document.getElementById('webgl-bg');
  const cursorCanvas = document.getElementById('cursor-aura');

  let inkParticles = null;
  let cloudLayer = null;
  let cursorAura = null;
  let animationId = null;

  if (!prefersReducedMotion()) {
    try {
      inkParticles = new InkParticles(webglContainer);
      cloudLayer = new CloudLayer(inkParticles.scene, { count: isMobile() ? 3 : 6 });

      if (!isMobile()) {
        cursorAura = new CursorAura(cursorCanvas);
      }

      const clock = new THREE.Clock();
      const renderLoop = () => {
        const elapsed = clock.getElapsedTime();
        const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        inkParticles.animate();
        if (cloudLayer) cloudLayer.update(elapsed, scrollProgress);
        animationId = requestAnimationFrame(renderLoop);
      };
      renderLoop();
    } catch (error) {
      console.warn('WebGL effects unavailable, falling back to static content:', error);
      webglContainer.style.background = 'radial-gradient(ellipse at center, #1a1f18 0%, #0c0f0a 100%)';
    }
  }

  initIntroScene(content.intro);

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    if (inkParticles) inkParticles.destroy();
    if (cursorAura) cursorAura.destroy();
  };
}
