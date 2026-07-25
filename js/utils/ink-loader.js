export function hideInkLoader() {
  const loader = document.getElementById('inkLoader');
  if (!loader) return;
  if (document.readyState === 'complete') {
    setTimeout(() => loader.classList.add('loaded'), 600);
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('loaded'), 300);
    });
  }
}
