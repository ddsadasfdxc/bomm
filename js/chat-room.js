/* chat-room.js — 灵犀主界面 ↔ 「灵犀 · 论道」聊天子界面切换
   渐进增强：不使用该脚本时，聊天区仍在 DOM 中可被 chat.js 驱动。
   离开灵犀页时自动收起子界面，避免下次进入残留状态。
*/
(() => {
  const page = document.getElementById('page-chat');
  const hub = document.getElementById('chatHub');
  const room = document.getElementById('chatRoom');
  const enter = document.getElementById('chatRoomEnter');
  const back = document.getElementById('chatRoomBack');
  if (!page || !hub || !room || !enter || !back) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function openRoom() {
    room.classList.add('open');
    room.setAttribute('aria-hidden', 'false');
    hub.setAttribute('aria-hidden', 'true');
    room.scrollTop = 0;
    const input = document.getElementById('chatInput');
    if (input) {
      window.setTimeout(() => {
        try { input.focus({ preventScroll: true }); } catch (e) { /* noop */ }
      }, reduceMotion ? 0 : 420);
    }
  }

  function closeRoom() {
    if (!room.classList.contains('open')) return;
    room.classList.remove('open');
    room.setAttribute('aria-hidden', 'true');
    hub.removeAttribute('aria-hidden');
  }

  enter.addEventListener('click', openRoom);
  back.addEventListener('click', closeRoom);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && room.classList.contains('open')) closeRoom();
  });

  // 离开灵犀页 → 收起子界面
  new MutationObserver(() => {
    if (!page.classList.contains('active')) closeRoom();
  }).observe(page, { attributes: true, attributeFilter: ['class'] });

  // 初始状态
  room.setAttribute('aria-hidden', 'true');
})();
