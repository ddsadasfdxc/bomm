import { InkParticles } from './effects/ink-particles.js';
import { CloudLayer } from './effects/clouds.js';
import { CursorAura } from './effects/cursor-aura.js';
import { initIntroScene } from './scenes/intro-scene.js';
import { initCharacterScene } from './scenes/character-scene.js';
import { initOutroScene } from './scenes/outro-scene.js';
import { initInkTransitions } from './effects/ink-transition.js';
import { loadContent } from './utils/load-content.js';
import { prefersReducedMotion, isMobile } from './utils/prefers-reduced-motion.js';

export async function initApp() {
  const content = await loadContent();

  const infoMap = {
    '出身': 'char-origin',
    '境界': 'char-realm',
    '性格': 'char-personality'
  };

  content.character.info.forEach((item) => {
    const id = infoMap[item.label];
    if (id) {
      document.getElementById(id).textContent = item.value;
    }
  });

  document.querySelector('.section-character .section-title').textContent = content.character.title;
  document.querySelector('.intro-subtitle').textContent = content.intro.subtitle;
  document.querySelector('.intro-quote').textContent = content.intro.quote;
  document.querySelector('.outro-line').textContent = content.outro.line;
  document.querySelector('.outro-hint').textContent = content.outro.hint;
  document.title = content.site.title;

  const webglContainer = document.getElementById('webgl-bg');
  const cursorCanvas = document.getElementById('cursor-aura');

  let inkParticles = null;
  let cloudLayer = null;
  let cursorAura = null;
  let animationId = null;

  if (!prefersReducedMotion()) {
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
  }

  initIntroScene(content.intro);
  initCharacterScene(content.character);
  initOutroScene(content.outro);
  initInkTransitions();

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    if (inkParticles) inkParticles.destroy();
    if (cursorAura) cursorAura.destroy();
  };
}
