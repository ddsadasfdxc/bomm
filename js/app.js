import { InkParticles } from './effects/ink-particles.js';
import { CloudLayer } from './effects/clouds.js';
import { CursorAura } from './effects/cursor-aura.js';
import { loadBackgroundImage } from './effects/bg-image.js';
import { initIntroScene } from './scenes/intro-scene.js';
import { loadContent } from './utils/load-content.js';
import { prefersReducedMotion, isMobile } from './utils/prefers-reduced-motion.js';
import { initMusicPlayer } from './music-player.js';
import { initNotes } from './notes.js';
import { openGmailAlias } from './tools.js';
import { initMessageBoard, initContactForm, trackVisit, loadStats } from './social.js';
import { initChat } from './chat.js';
import * as THREE from 'three';

export async function initApp() {
  loadBackgroundImage(document.getElementById('bg-image'));

  const content = await loadContent();

  document.querySelector('.intro-subtitle').textContent = content.intro.subtitle;
  document.querySelector('.intro-quote').textContent = content.intro.quote;
  document.querySelector('.intro-desc').textContent = content.intro.desc;
  loadHitokoto(document.querySelector('.intro-quote'), content.intro.quote);
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
  initMusicPlayer();
  initNav();
  initNotes();
  initTools();
  initMessageBoard();
  initContactForm();
  initChat();
  trackVisit();
  loadStats(document.getElementById('statsBar'));

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    if (inkParticles) inkParticles.destroy();
    if (cursorAura) cursorAura.destroy();
  };
}

async function loadHitokoto(el, fallback) {
  try {
    const res = await fetch('https://v1.hitokoto.cn');
    if (!res.ok) throw new Error('Hitokoto API error');
    const data = await res.json();
    if (data && data.hitokoto) {
      el.textContent = data.hitokoto;
    }
  } catch (err) {
    console.warn('Hitokoto load failed:', err);
    el.textContent = fallback;
  }
}

function initNav() {
  const tabs = document.querySelectorAll('.ios-nav-tab');
  const pages = document.querySelectorAll('.page');
  const navInner = document.querySelector('.ios-nav-inner');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const pageName = tab.dataset.page;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      pages.forEach(p => {
        p.classList.toggle('active', p.id === `page-${pageName}`);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  if (navInner) {
    const onScroll = () => {
      navInner.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}

function initTools() {
  const card = document.querySelector('[data-tool="gmail-alias"]');
  if (card) {
    card.addEventListener('click', () => openGmailAlias());
  }
}
