const HITOKOTO_API = 'https://v1.hitokoto.cn?c=i&c=k';
const DEFAULT_QUOTE = '研墨';

export async function initInkLoader() {
  const loader = document.getElementById('inkLoader');
  const textEl = loader?.querySelector('.ink-loader-text');
  if (!textEl) return;

  try {
    const res = await fetch(HITOKOTO_API);
    if (!res.ok) throw new Error('Hitokoto API error');
    const data = await res.json();
    if (data?.hitokoto) {
      textEl.textContent = data.hitokoto;
    }
  } catch (err) {
    console.warn('Hitokoto load failed:', err);
    textEl.textContent = DEFAULT_QUOTE;
  }
}

export function hideInkLoader(minDelay = 800) {
  const loader = document.getElementById('inkLoader');
  if (!loader) return;

  const now = performance.now();
  const elapsed = now - (window.__inkLoaderStart || now);
  const remaining = Math.max(0, minDelay - elapsed);

  if (document.readyState === 'complete') {
    setTimeout(() => loader.classList.add('loaded'), remaining + 600);
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('loaded'), remaining + 300);
    });
  }
}

window.__inkLoaderStart = performance.now();
