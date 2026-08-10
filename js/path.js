export async function initPath() {
  const body = document.getElementById('pathTerminalBody');
  const cursor = document.getElementById('pathCursor');
  const bar = document.getElementById('pathProgressBar');
  if (!body || !cursor) return;

  // 在页面切换到剑谱时开始打字；若已经 active 则立即开始
  const page = document.getElementById('page-path');
  if (page && page.classList.contains('active')) {
    runTerminal(body, cursor, bar);
  } else {
    const observer = new MutationObserver(() => {
      if (page && page.classList.contains('active')) {
        observer.disconnect();
        runTerminal(body, cursor, bar);
      }
    });
    if (page) observer.observe(page, { attributes: true, attributeFilter: ['class'] });
  }
}

function runTerminal(body, cursor, bar) {
  if (body.dataset.running === 'true') return;
  body.dataset.running = 'true';
  body.innerHTML = '';

  const lines = [
    { text: 'wenruo@jianghu:~$ ./inventory --scan --verbose', type: 'command', delay: 35 },
    { text: '[OK] 挂载项目根目录 /workspace', type: 'info', delay: 18 },
    { text: '[OK] 加载构建配置 vite.config.js', type: 'info', delay: 18 },
    { text: '', type: 'blank', delay: 0 },
    { text: '>>> 统计代码资产中，请稍候 ...', type: 'highlight', delay: 22 },
    { text: '', type: 'blank', delay: 0 },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', type: 'divider', delay: 12 },
    { text: '  代码行数总计：约 18,420 行', type: 'stat', delay: 22 },
    { text: '  注释与文档：  约 2,100 行', type: 'stat', delay: 20 },
    { text: '  文件数量：    47 个前端模块 + 8 个独立子页面', type: 'stat', delay: 22 },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', type: 'divider', delay: 12 },
    { text: '', type: 'blank', delay: 0 },
    { text: '>>> 文字量级换算', type: 'highlight', delay: 22 },
    { text: '按中文出版行业每页约 500 字估算：', type: 'info', delay: 18 },
    { text: '18,420 行 ≈ 420,000 字 ≈ 840 页标准 32 开本', type: 'stat', delay: 24 },
    { text: '相当于一部《围城》（约 250,000 字）+《挪威的森林》（约 170,000 字）的总和', type: 'stat', delay: 26 },
    { text: '若按金庸《射雕英雄传》（约 930,000 字）折算，约为 0.45 部射雕', type: 'stat', delay: 26 },
    { text: '', type: 'blank', delay: 0 },
    { text: '>>> 技术架构', type: 'highlight', delay: 22 },
    { text: '', type: 'blank', delay: 0 },
    { text: '【核心构建】Vite 5 + Rollup 快速打包，生产产物压缩后 ≈ 190 KB', type: 'info', delay: 22 },
    { text: '【三维渲染】Three.js 水墨粒子系统 + 自定义 CloudLayer 云雾层', type: 'info', delay: 24 },
    { text: '【动效引擎】GSAP + 原生 CSS @keyframes，支持 reduced-motion 降级', type: 'info', delay: 24 },
    { text: '【通信层】  原生 Fetch + Vercel Serverless API（Node.js）', type: 'info', delay: 24 },
    { text: '【数据持久】LocalStorage（本地点数 / 留言草稿 / 配置）+ Upstash Redis（服务端）', type: 'info', delay: 26 },
    { text: '【字体系统】Noto Serif SC + Cinzel，衬线古意；Nunito / M PLUS Rounded 1c 用于主题站', type: 'info', delay: 28 },
    { text: '【样式体系】CSS 变量换肤 + 模块化解耦，覆盖 12+ 样式文件', type: 'info', delay: 24 },
    { text: '', type: 'blank', delay: 0 },
    { text: '>>> 工程复杂度', type: 'highlight', delay: 22 },
    { text: '', type: 'blank', delay: 0 },
    { text: '  · 单页应用 5 个主页面，iOS 灵动岛式顶部导航切换', type: 'stat', delay: 24 },
    { text: '  · 8 个独立子页面：咒术高专、紫阳花、海森堡、赛博、大千、御剑、方块、灵兔', type: 'stat', delay: 28 },
    { text: '  · AI 聊天支持多模型切换、温度调节、历史导出', type: 'stat', delay: 24 },
    { text: '  · 咒灵图鉴 CRUD、宿傩手指收集、黑闪 CPS 训练器等独立小游戏', type: 'stat', delay: 28 },
    { text: '  · 留言板 + 联系表单 + 访问统计，服务端落盘', type: 'stat', delay: 24 },
    { text: '', type: 'blank', delay: 0 },
    { text: '>>> 付出与迭代', type: 'highlight', delay: 22 },
    { text: '', type: 'blank', delay: 0 },
    { text: '这是一个从零开始、一版一版凿出来的个人站点。', type: 'info', delay: 22 },
    { text: '从最初的静态文字，到 WebGL 背景；', type: 'info', delay: 20 },
    { text: '从底部导航，到 iOS 灵动岛式胶囊栏；', type: 'info', delay: 20 },
    { text: '从单一主页，到 OC 站、二次元站、影视致敬站平行宇宙；', type: 'info', delay: 24 },
    { text: '每一次 commit 都是一次小闭关。', type: 'info', delay: 20 },
    { text: '', type: 'blank', delay: 0 },
    { text: '累计 commit：70+', type: 'stat', delay: 20 },
    { text: '累计 push 到 main：50+', type: 'stat', delay: 20 },
    { text: '平均每个功能模块经历 3~5 轮交互打磨', type: 'stat', delay: 22 },
    { text: '', type: 'blank', delay: 0 },
    { text: '>>> 当前状态', type: 'highlight', delay: 22 },
    { text: '', type: 'blank', delay: 0 },
    { text: '  构建状态：✓ 通过', type: 'info', delay: 18 },
    { text: '  部署状态：✓ GitHub Pages 在线', type: 'info', delay: 20 },
    { text: '  心情状态：像刚擦完剑，还冒着热气', type: 'info', delay: 22 },
    { text: '', type: 'blank', delay: 0 },
    { text: 'wenruo@jianghu:~$ █', type: 'command', delay: 30 },
  ];

  let lineIndex = 0;
  let totalChars = lines.reduce((sum, l) => sum + l.text.length, 0);
  let typedChars = 0;

  function updateProgress() {
    if (bar) {
      const pct = Math.min(100, Math.round((typedChars / totalChars) * 100));
      bar.style.width = pct + '%';
    }
  }

  function createLine() {
    if (lineIndex >= lines.length) {
      cursor.remove();
      if (bar) bar.style.width = '100%';
      return;
    }

    const item = lines[lineIndex++];
    const line = document.createElement('div');
    line.className = 'path-terminal-line path-line-' + item.type;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;

    if (item.type === 'blank') {
      line.style.height = '0.7em';
      setTimeout(createLine, 40);
      return;
    }

    if (item.type === 'command') {
      const prompt = document.createElement('span');
      prompt.className = 'path-prompt';
      prompt.textContent = 'wenruo@jianghu:~$ ';
      line.appendChild(prompt);
    }

    const textSpan = document.createElement('span');
    line.appendChild(textSpan);
    line.appendChild(cursor);

    let charIndex = 0;
    function typeChar() {
      if (charIndex < item.text.length) {
        textSpan.textContent += item.text.charAt(charIndex);
        charIndex++;
        typedChars++;
        updateProgress();
        body.scrollTop = body.scrollHeight;
        setTimeout(typeChar, item.delay);
      } else {
        setTimeout(createLine, item.type === 'command' ? 180 : 60);
      }
    }
    typeChar();
  }

  createLine();
}
