/* 方块大千 —— Minecraft 双模式像素/3D游戏舱 */

function buildMinecraftOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'mc-overlay';
  overlay.innerHTML = `
    <div class="mc-container">
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
          Loading 3D World: W/A/S/D 行走 · 空格跳跃 · 鼠标移动视角 | 左键破坏 · 右键放置 · 数字键切换方块
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
  let activeMode = '3d';

  card.addEventListener('click', () => {
    if (!overlay) {
      overlay = buildMinecraftOverlay();
      frame = overlay.querySelector('#mc-frame');

      // 切换模式 TABs
      const tabs = overlay.querySelectorAll('.mc-tab-btn');
      tabs.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('active')) return;
          tabs.forEach(t => t.classList.remove('active'));
          btn.classList.add('active');

          const mode = btn.dataset.mode;
          activeMode = mode;

          const loader = overlay.querySelector('.mc-loader');
          loader.style.display = 'flex';

          if (mode === '3d') {
            frame.src = "https://minecraft.kelvinzhang.ca";
            overlay.querySelector('#mc-tips-content').textContent =
              "W/A/S/D 移动 · 空格跳跃 · 鼠标控制视角 | 左键破坏 · 右键放置 · 数字键 1-7 切换材质";
          } else {
            frame.src = "https://turbowarp.org/10128407/embed";
            overlay.querySelector('#mc-tips-content').textContent =
              "W/A/S/D/方向键移动 · 鼠标点击挖掘/放置 · 1-9 工具切换 · E 打开背包";
          }

          frame.onload = () => {
            loader.style.display = 'none';
          };
        });
      });

      // 初始加载隐藏 Loader
      frame.onload = () => {
        overlay.querySelector('.mc-loader').style.display = 'none';
      };

      // 归来关闭
      overlay.querySelector('.mc-close-btn').addEventListener('click', closeMc);

      // 全屏切换
      overlay.querySelector('.mc-fullscreen-btn').addEventListener('click', () => {
        if (!document.fullscreenElement) {
          overlay.requestFullscreen().catch(err => {
            console.error('Fullscreen request failed:', err);
          });
        } else {
          document.exitFullscreen();
        }
      });
    }

    // 重载/初始化 iframe 地址（防止关闭后挂载 about:blank 开销）
    if (frame.src === 'about:blank' || frame.src === '') {
      const currentActiveTab = overlay.querySelector('.mc-tab-btn.active');
      const mode = currentActiveTab ? currentActiveTab.dataset.mode : '3d';
      overlay.querySelector('.mc-loader').style.display = 'flex';
      if (mode === '3d') {
        frame.src = "https://minecraft.kelvinzhang.ca";
      } else {
        frame.src = "https://turbowarp.org/10128407/embed";
      }
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeMc() {
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      if (document.fullscreenElement) {
        try { document.exitFullscreen(); } catch(_) {}
      }
      // 卸载 iframe 内容，释放 CPU/GPU 内存，切断 3D 背景渲染开销
      if (frame) frame.src = 'about:blank';
    }
  }

  // Esc 键退出支持
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) {
      closeMc();
    }
  });
}
