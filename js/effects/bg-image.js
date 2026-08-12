/**
 * 随机背景图 — 调用 yppp API
 * 桌面端使用横图 pc.php，移动端使用竖图 pe.php
 * 加载成功后使用 Object URL 固定当前图片，避免保存时再次请求随机接口
 */

const API_PC = 'https://api.yppp.net/pc.php';
const API_PE = 'https://api.yppp.net/pe.php';

export function loadBackgroundImage(container) {
  if (!container) return;

  const isMobile = /Android|iP(hone|od)|Mobile|Opera Mobi|BlackBerry|Palm(OS)?/i.test(navigator.userAgent);
  const apiUrl = `${isMobile ? API_PE : API_PC}?_=${Date.now()}`;

  fetch(apiUrl, { mode: 'cors' })
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
      console.warn('Background image load failed:', apiUrl);
      container.classList.add('fallback');
    });
}
