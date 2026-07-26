import { InkParticles } from './effects/ink-particles.js';
import { CloudLayer } from './effects/clouds.js';
import { CursorAura } from './effects/cursor-aura.js';
import { loadBackgroundImage } from './effects/bg-image.js';
import { initIntroScene } from './scenes/intro-scene.js';
import { loadContent } from './utils/load-content.js';
import { prefersReducedMotion, isMobile } from './utils/prefers-reduced-motion.js';
import { initMusicPlayer } from './music-player.js';
import { initNotes } from './notes.js';
import { initMessageBoard, initContactForm, trackVisit, loadStats } from './social.js';
import { initChat } from './chat.js';
import { initPath } from './path.js';
import { initFortune } from './fortune.js';
import { initCosmos } from './cosmos.js';
import { initSwordfly } from './swordfly.js';
import { initMinecraft } from './minecraft.js';
import { initScrollReveal, initTilt, initProgressInk } from './utils/scroll-reveal.js';
import { hideInkLoader } from './utils/ink-loader.js';
import * as THREE from 'three';

export async function initApp() {
  loadBackgroundImage(document.getElementById('bg-image'));

  const content = await loadContent();

  const quoteEl = document.querySelector('.intro-quote');
  if (quoteEl && content.quotes && content.quotes.length) {
    quoteEl.textContent = content.quotes[0].text;
    startQuoteRotator(quoteEl, content.quotes);
  } else if (quoteEl) {
    quoteEl.textContent = content.intro.quote;
    loadHitokoto(quoteEl, content.intro.quote);
  }

  document.querySelector('.intro-subtitle').textContent = content.intro.subtitle;
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
  initMusicPlayer();
  initNav();
  initNotes();
  initMessageBoard();
  initContactForm();
  initChat();
  initPath();
  initFortune();
  initCosmos();
  initSwordfly();
  initMinecraft();
  initCardGlow();
  initScrollReveal();
  initTilt();
  initProgressInk();
  hideInkLoader();
  trackVisit();
  loadStats(document.getElementById('statsBar'));

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    if (inkParticles) inkParticles.destroy();
    if (cursorAura) cursorAura.destroy();
  };
}

function startQuoteRotator(el, quotes) {
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % quotes.length;
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = quotes[idx].text || quotes[idx];
      el.style.opacity = '1';
    }, 500);
  }, 6000);
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


/* 卡片光斑跟随鼠标 */
function initCardGlow() {
  document.querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });
}
