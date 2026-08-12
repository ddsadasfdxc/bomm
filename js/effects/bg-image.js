/**
 * 随机背景图 — 通过 Worker 代理 yppp API，避免 CORS 问题
 * 桌面端使用横图 pc.php，移动端使用竖图 pe.php
 * 加载成功后使用 Object URL 固定当前图片，避免保存时再次请求随机接口
 */

import { API } from '../social.js';

const isMobile = /Android|iP(hone|od)|Mobile|Opera Mobi|BlackBerry|Palm(OS)?/i.test(navigator.userAgent);

export function loadBackgroundImage(container) {
  if (!container) return;

  const type = isMobile ? 'pe' : 'pc';
  const proxyUrl = `${API}/api/proxy-image?type=${type}&_=${Date.now()}`;

  fetch(proxyUrl)
    .then((res) => {
      if (!res.ok) throw new Error('fetch failed');
      return res.blob();
    })
    .then((blob) => {
      const objectUrl = URL.createObjectURL(blob);
      const img = new Image();
      img.src = objectUrl;
      img.onload = () => {
        container.style.backgroundImage = `url(${objectUrl})`;
        container.dataset.bgObjectUrl = objectUrl;
        container.classList.add('loaded');
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        throw new Error('image load failed');
      };
    })
    .catch(() => {
      console.warn('Background image load failed:', proxyUrl);
      container.classList.add('fallback');
    });
}
