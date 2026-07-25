/* 方块大千 —— Minecraft 双模式像素/3D游戏舱（含设备选择） */

function detectMobile() {
  const ua = navigator.userAgent || '';
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;
  return isMobileUA || (isTouchScreen && isSmallScreen);
}

function buildMinecraftOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'mc-overlay';
  overlay.innerHTML = `
    <div class="mc-device-select" id="mc-device-select">
      <div class="mc-device-title">选择你的设备</div>
      <div class="mc-device-sub">方寸之间，重构大千</div>
      <div class="mc-device-grid">
        <button class="mc-device-btn" data-device="desktop">
          <div class="mc-device-icon">🖥️</div>
          <div class="mc-device-name">桌面模式</div>
          <div class="mc-device-desc">键鼠精准操控 · 3D 沉浸体验</div>
        </button>
        <button class="mc-device-btn" data-device="mobile">
          <div class="mc-device-icon">📱</div>
          <div class="mc-device-name">移动端模式</div>
          <div class="mc-device-desc">触屏优化 · 虚拟摇杆 · 快捷栏</div>
        </button>
      </div>
      <div class="mc-device-hint">移动端将自动切换至 2D 大荒史诗</div>
    </div>
    <div class="mc-container" id="mc-container" style="display:none">
      <div class="mc-header">
        <div class="mc-tabs">
          <button class="mc-tab-btn active" data-mode="3d">三千世界 (3D)</button>
          <button class="mc-tab-btn" data-mode="2d">大荒史诗 (2D)</button>
        </div>
        <div class="mc-controls">
          <button class="mc-ctrl-btn mc-fullscreen-btn" title="全屏独立体验">全屏</button>
          <button class="mc-ctrl-btn mc-close-btn">归 来</button>
        </div>
      </div>
      <div class="mc-body">
        <div class="mc-loader">探索方块世界中...</div>
        <iframe id="mc-frame" src="https://minecraft.kelvinzhang.ca" allow="autoplay; fullscreen; keyboard" allowfullscreen></iframe>
      </div>
      <div class="mc-footer">
        <div class="mc-tips" id="mc-tips-content">
          W/A/S/D 行走 · 空格跳跃 · 鼠标移动视角 | 左键破坏 · 右键放置 · 数字键切换方块
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
}

export function initMinecraft() {
  const card = document.querySelector('[data-minecraft]');
  if (!card) return;

  let overlay = null;
  let frame = null;
  let container = null;
  let deviceSelect = null;
  let activeMode = '3d';
  let deviceMode = 'desktop'; // 'desktop' | 'mobile'

  function applyDeviceMode(mode) {
    deviceMode = mode;
    const isMobile = mode === 'mobile';

    // 切换容器样式
    container.style.display = 'flex';
    deviceSelect.style.display = 'none';
    container.classList.toggle('mc-mobile', isMobile);
    container.classList.toggle('mc-desktop', !isMobile);

    // 移动端强制 2D 模式，并隐藏 3D Tab
    const tabs = container.querySelectorAll('.mc-tab-btn');
    const tab3d = container.querySelector('[data-mode="3d"]');
    const tab2d = container.querySelector('[data-mode="2d"]');

    if (isMobile) {
      tab3d.style.display = 'none';
      tabs.forEach(t => t.classList.remove('active'));
      tab2d.classList.add('active');
      activeMode = '2d';
      frame.src = 'https://turbowarp.org/662310182/embed';
      container.querySelector('#mc-tips-content').textContent =
        '触屏拖动挖掘/放置 · 虚拟摇杆移动 · 点击方块选择 · 双指缩放视角';
    } else {
      tab3d.style.display = '';
      tabs.forEach(t => t.classList.remove('active'));
      tab3d.classList.add('active');
      activeMode = '3d';
      frame.src = 'https://minecraft.kelvinzhang.ca';
      container.querySelector('#mc-tips-content').textContent =
        'W/A/S/D 移动 · 空格跳跃 · 鼠标控制视角 | 左键破坏 · 右键放置 · 数字键 1-7 切换材质';
    }

    const loader = container.querySelector('.mc-loader');
    loader.style.display = 'flex';
    frame.onload = () => { loader.style.display = 'none'; };
  }

  function closeMc() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (document.fullscreenElement) {
      try { document.exitFullscreen(); } catch (_) {}
    }
    // 重置到设备选择页，下次进入重新选择
    container.style.display = 'none';
    deviceSelect.style.display = 'flex';
    deviceSelect.querySelectorAll('.mc-device-btn').forEach(b => b.classList.remove('selected'));
    if (frame) frame.src = 'about:blank';
  }

  card.addEventListener('click', () => {
    if (!overlay) {
      overlay = buildMinecraftOverlay();
      frame = overlay.querySelector('#mc-frame');
      container = overlay.querySelector('#mc-container');
      deviceSelect = overlay.querySelector('#mc-device-select');

      // 设备选择按钮
      deviceSelect.querySelectorAll('.mc-device-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          deviceSelect.querySelectorAll('.mc-device-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          setTimeout(() => applyDeviceMode(btn.dataset.device), 300);
        });
      });

      // Tab 切换
      const tabs = container.querySelectorAll('.mc-tab-btn');
      tabs.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('active')) return;
          if (deviceMode === 'mobile' && btn.dataset.mode === '3d') return; // 移动端禁3D
          tabs.forEach(t => t.classList.remove('active'));
          btn.classList.add('active');
          const mode = btn.dataset.mode;
          activeMode = mode;
          const loader = container.querySelector('.mc-loader');
          loader.style.display = 'flex';
          if (mode === '3d') {
            frame.src = 'https://minecraft.kelvinzhang.ca';
            container.querySelector('#mc-tips-content').textContent =
              'W/A/S/D 移动 · 空格跳跃 · 鼠标控制视角 | 左键破坏 · 右键放置 · 数字键 1-7 切换材质';
          } else {
            frame.src = 'https://turbowarp.org/662310182/embed';
            container.querySelector('#mc-tips-content').textContent =
              deviceMode === 'mobile'
                ? '触屏拖动挖掘/放置 · 虚拟摇杆移动 · 点击方块选择 · 双指缩放视角'
                : 'W/A/S/D/方向键移动 · 鼠标点击挖掘/放置 · 1-9 工具切换 · E 打开背包';
          }
          frame.onload = () => { loader.style.display = 'none'; };
        });
      });

      // 归来关闭
      container.querySelector('.mc-close-btn').addEventListener('click', closeMc);

      // 全屏切换
      container.querySelector('.mc-fullscreen-btn').addEventListener('click', () => {
        if (!document.fullscreenElement) {
          overlay.requestFullscreen().catch(err => console.error('Fullscreen failed:', err));
        } else {
          document.exitFullscreen();
        }
      });
    }

    // 自动推荐设备模式
    const isMobile = detectMobile();
    const autoBtn = deviceSelect.querySelector(`[data-device="${isMobile ? 'mobile' : 'desktop'}"]`);
    if (autoBtn) autoBtn.classList.add('recommended');

    // 重置到设备选择
    container.style.display = 'none';
    deviceSelect.style.display = 'flex';
    frame.src = 'about:blank';

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  // Esc 退出
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) {
      closeMc();
    }
  });
}
