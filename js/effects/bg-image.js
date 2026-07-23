/**
 * 随机背景图 — 调用 yppp API
 * 桌面端使用横图 pc.php，移动端使用竖图 pe.php
 */

const API_PC = 'https://api.yppp.net/pc.php';
const API_PE = 'https://api.yppp.net/pe.php';

export function loadBackgroundImage(container) {
  if (!container) return;

  const isMobile = /Android|iP(hone|od)|Mobile|Opera Mobi|BlackBerry|Palm(OS)?/i.test(navigator.userAgent);
  const apiUrl = `${isMobile ? API_PE : API_PC}?_=${Date.now()}`;

  const img = new Image();
  img.src = apiUrl;

  img.onload = () => {
    container.style.backgroundImage = `url(${apiUrl})`;
    container.classList.add('loaded');
  };

  img.onerror = () => {
    console.warn('Background image load failed:', apiUrl);
    container.classList.add('fallback');
  };
}
