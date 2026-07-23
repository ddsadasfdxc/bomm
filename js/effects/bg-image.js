/**
 * 随机背景图 — 调用 yppp API
 * 桌面端使用横图 pc.php，移动端使用竖图 pe.php
 */

const API_PC = 'https://api.yppp.net/pc.php?return=json';
const API_PE = 'https://api.yppp.net/pe.php?return=json';

export async function loadBackgroundImage(container) {
  if (!container) return;

  const isMobile = /Android|iP(hone|od)|Mobile|Opera Mobi|BlackBerry/i.test(navigator.userAgent);
  const apiUrl = isMobile ? API_PE : API_PC;

  try {
    const res = await fetch(`${apiUrl}&_=${Date.now()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const url = data?.acgurl;
    if (!url) throw new Error('No image URL');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    container.style.backgroundImage = `url(${url})`;
    container.classList.add('loaded');
  } catch (err) {
    console.warn('Background image load failed:', err);
    container.classList.add('fallback');
  }
}
