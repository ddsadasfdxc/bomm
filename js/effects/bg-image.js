/**
 * 随机背景图 — 通过 Worker 代理 yppp API，避免 CORS 问题
 * 桌面端使用横图 pc.php，移动端使用竖图 pe.php
 * 加载成功后使用 Object URL 固定当前图片，避免保存时再次请求随机接口
 * 每隔 BACKGROUND_INTERVAL_MS（默认 60s）自动预加载并淡入切换下一张
 */

import { API } from '../social.js';

const isMobile = /Android|iP(hone|od)|Mobile|Opera Mobi|BlackBerry|Palm(OS)?/i.test(navigator.userAgent);
const BACKGROUND_INTERVAL_MS = 60_000;

export function loadBackgroundImage(container) {
  if (!container) return () => {};

  const type = isMobile ? 'pe' : 'pc';
  const layers = getOrCreateLayers(container);
  let currentLayer = 0;   // 当前可见层下标
  let currentUrl = null;
  let timerId = null;
  let disposed = false;

  function buildProxyUrl() {
    return `${API}/api/proxy-image?type=${type}&_=${Date.now()}`;
  }

  function adoptNewImage(blob) {
    if (disposed) return;
    const nextUrl = URL.createObjectURL(blob);
    const nextLayer = 1 - currentLayer;
    const nextEl = layers[nextLayer];
    const prevEl = layers[currentLayer];

    // 新图放到上层淡入，旧图留在下层做底，形成交叉溶解
    nextEl.style.backgroundImage = `url(${nextUrl})`;
    nextEl.style.zIndex = '2';
    prevEl.style.zIndex = '1';
    nextEl.style.opacity = '1';

    const oldUrl = currentUrl;
    currentUrl = nextUrl;
    currentLayer = nextLayer;

    container.classList.add('loaded');
    // 保存功能依赖此字段
    container.dataset.bgObjectUrl = nextUrl;

    // 淡入完成后清空旧层并释放其 Object URL
    window.setTimeout(() => {
      if (disposed) return;
      prevEl.style.backgroundImage = '';
      prevEl.style.opacity = '0';
      if (oldUrl && oldUrl !== currentUrl) {
        URL.revokeObjectURL(oldUrl);
      }
    }, 1400);
  }

  async function fetchAndAdopt() {
    if (disposed) return;
    const proxyUrl = buildProxyUrl();
    try {
      const res = await fetch(proxyUrl);
      if (!res.ok) throw new Error('fetch failed');
      const blob = await res.blob();
      adoptNewImage(blob);
    } catch (e) {
      console.warn('Background image load failed:', proxyUrl, e);
      container.classList.add('fallback');
    }
  }

  function startRotation() {
    if (disposed || timerId) return;
    // 首次立即加载
    fetchAndAdopt();
    timerId = window.setInterval(fetchAndAdopt, BACKGROUND_INTERVAL_MS);
  }

  function stopRotation() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  // 页面隐藏时暂停轮换，节省流量与资源
  function handleVisibility() {
    if (document.hidden) stopRotation();
    else startRotation();
  }

  document.addEventListener('visibilitychange', handleVisibility);

  startRotation();

  return function cleanup() {
    disposed = true;
    stopRotation();
    document.removeEventListener('visibilitychange', handleVisibility);
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
      currentUrl = null;
    }
  };
}

function getOrCreateLayers(container) {
  let layers = container.querySelectorAll(':scope > .bg-fade-layer');
  if (layers.length < 2) {
    container.querySelectorAll('.bg-fade-layer').forEach((n) => n.remove());
    const a = document.createElement('div');
    a.className = 'bg-fade-layer';
    const b = document.createElement('div');
    b.className = 'bg-fade-layer';
    container.append(a, b);
    layers = [a, b];
  }
  return [layers[0], layers[1]];
}