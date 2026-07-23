/**
 * 我的笔记系统 — 从本地 content.json 加载
 */

let notesCache = [];

export function initNotes() {
  const grid = document.getElementById('notesGrid');
  if (!grid) return;
  fetchNotes().then(() => renderNotes(grid));
}

async function fetchNotes() {
  try {
    const res = await fetch('/data/content.json');
    const data = await res.json();
    notesCache = data.notes || [];
  } catch (e) {
    notesCache = [];
  }
}

function renderNotes(grid) {
  grid.innerHTML = notesCache.length === 0
    ? '<div class="note-empty">暂无笔记</div>'
    : notesCache.map(note => `
      <div class="note-card" data-note="${note.id}">
        <div class="note-card-icon">${note.icon || '📝'}</div>
        <h3>${escapeHtml(note.title)}</h3>
        <p>${escapeHtml((note.content || '').slice(0, 80))}${note.content?.length > 80 ? '…' : ''}</p>
        <div class="note-card-date">${note.date || ''}</div>
        <div class="note-card-brush"></div>
      </div>`).join('');

  grid.querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('click', () => {
      const note = notesCache.find(n => n.id === card.dataset.note);
      if (note) openNote(note);
    });
  });
}

function openNote(note) {
  const overlay = document.createElement('div');
  overlay.className = 'note-overlay';
  overlay.innerHTML = `
    <div class="note-modal">
      <button class="note-modal-close">&times;</button>
      <div class="note-modal-title">${note.icon || '📝'} ${escapeHtml(note.title)}</div>
      <div class="note-modal-meta">${note.date || ''}</div>
      <div class="note-modal-body">${formatContent(note.content)}</div>
    </div>`;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.note-modal-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
}

function formatContent(text) {
  return escapeHtml(text).split('\n').filter(l => l.trim()).map(l => `<p>${l}</p>`).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}