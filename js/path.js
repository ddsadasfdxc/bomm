export async function initPath() {
  const container = document.getElementById('pathTimeline');
  if (!container) return;
  try {
    const res = await fetch('/data/content.json?v=' + Date.now());
    const data = await res.json();
    const items = (data.chronicle || []).slice().reverse();
    container.innerHTML = items.length === 0
      ? '<div class=\"path-item\">暂无记录</div>'
      : items.map(item => `
        <div class=\"path-item\">
          <div class=\"path-year\">${escapeHtml(item.year || '')}</div>
          <div class=\"path-title\">${escapeHtml(item.title || '')}</div>
          <div class=\"path-desc\">${escapeHtml(item.desc || '')}</div>
        </div>
      `).join('');
  } catch (e) {
    container.innerHTML = '<div class=\"path-item\">剑谱加载失败</div>';
  }
}
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
