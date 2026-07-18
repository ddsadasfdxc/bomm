# 温若的个人小站 — 主页实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 实现「温若的个人小站」主页：一个水墨仙气、纵向长卷叙事的单页网站，使用 Three.js + GSAP + 原生 ES 模块，包含开场粒子书写、人物卷轴展开、尾章留白三个章节。

**Architecture:** 采用单页长卷结构，Three.js 负责全屏 WebGL 背景（水墨粒子、云雾层），GSAP ScrollTrigger 负责滚动驱动动画，每个章节封装为独立 ES 模块。文案集中在 `data/content.json`，样式使用 CSS 变量系统，移动端降级为简化 Canvas 2D。

**Tech Stack:** Three.js（模块化导入）、GSAP + ScrollTrigger、原生 CSS、原生 ES 模块、Vite（开发服务器 + 构建）。

---

## 文件结构

```
/workspace
├── index.html
├── package.json
├── vite.config.js
├── data/
│   └── content.json
├── css/
│   ├── base.css
│   ├── variables.css
│   └── sections.css
├── js/
│   ├── main.js
│   ├── app.js
│   ├── scenes/
│   │   ├── intro-scene.js
│   │   ├── character-scene.js
│   │   └── outro-scene.js
│   ├── effects/
│   │   ├── ink-particles.js
│   │   ├── clouds.js
│   │   └── cursor-aura.js
│   └── utils/
│       ├── load-content.js
│       └── prefers-reduced-motion.js
└── assets/
    └── fonts/
```

---

### Task 1: 初始化项目并安装依赖

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `.gitignore`

- [ ] **Step 1: 初始化 package.json**

```json
{
  "name": "wenruo-personal-site",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "gsap": "^3.12.5",
    "three": "^0.166.0"
  },
  "devDependencies": {
    "vite": "^5.3.0"
  }
}
```

- [ ] **Step 2: 创建 vite.config.js**

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
```

- [ ] **Step 3: 创建 .gitignore**

```
node_modules/
dist/
.DS_Store
*.local
```

- [ ] **Step 4: 安装依赖**

Run: `npm install`
Expected: `node_modules/` 目录生成，无错误。

- [ ] **Step 5: 提交**

```bash
git add package.json vite.config.js .gitignore
git commit -m "chore: initialize Vite project with Three.js and GSAP"
```

---

### Task 2: 创建基础 HTML 与数据文件

**Files:**
- Create: `index.html`
- Create: `data/content.json`

- [ ] **Step 1: 创建 index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>温若 · 个人小站</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;600;700&family=Cinzel:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="webgl-bg"></div>
  <canvas id="cursor-aura"></canvas>

  <main id="scroll-container">
    <section id="intro" class="section section-intro">
      <div class="intro-content">
        <svg class="intro-title" viewBox="0 0 400 160" aria-label="温若">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="brush-text" id="title-wen">温</text>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="brush-text" id="title-ruo">若</text>
        </svg>
        <p class="intro-subtitle">散修 · 剑修</p>
        <p class="intro-quote">一缕清风，半卷残云。</p>
      </div>
    </section>

    <section id="character" class="section section-character">
      <div class="scroll scroll-left">
        <div class="scroll-handle"></div>
        <div class="scroll-paper">
          <h2 class="section-title">独行</h2>
          <dl class="character-info">
            <dt>出身</dt>
            <dd id="char-origin"></dd>
            <dt>境界</dt>
            <dd id="char-realm"></dd>
            <dt>性格</dt>
            <dd id="char-personality"></dd>
          </dl>
        </div>
        <div class="scroll-handle"></div>
      </div>
    </section>

    <section id="outro" class="section section-outro">
      <div class="outro-content">
        <p class="outro-line">道未成，行不止。</p>
        <p class="outro-hint">更多画卷、法宝、功法，待续。</p>
      </div>
    </section>
  </main>

  <script type="module" src="/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: 创建 data/content.json**

```json
{
  "site": {
    "title": "温若 · 个人小站",
    "lang": "zh-CN"
  },
  "intro": {
    "name": "温若",
    "subtitle": "散修 · 剑修",
    "quote": "一缕清风，半卷残云。"
  },
  "character": {
    "title": "独行",
    "info": [
      { "label": "出身", "value": "散修，无门无派" },
      { "label": "境界", "value": "筑基后期" },
      { "label": "性格", "value": "清冷寡言，剑心通明" }
    ]
  },
  "outro": {
    "line": "道未成，行不止。",
    "hint": "更多画卷、法宝、功法，待续。"
  }
}
```

- [ ] **Step 3: 提交**

```bash
git add index.html data/content.json
git commit -m "feat: add base HTML structure and content data"
```

---

### Task 3: 创建 CSS 变量与基础样式

**Files:**
- Create: `css/variables.css`
- Create: `css/base.css`
- Create: `css/sections.css`

- [ ] **Step 1: 创建 css/variables.css**

```css
:root {
  --bg-primary: #0c0f0a;
  --bg-ink-1: #1a1f18;
  --bg-ink-2: #2a3328;
  --text-paper: #f5f0e6;
  --text-muted: rgba(245, 240, 230, 0.65);
  --accent-cinnabar: #c45a4a;
  --accent-indigo: #5b7a76;
  --font-serif: 'Noto Serif SC', 'Songti SC', serif;
  --font-display: 'Cinzel', 'Noto Serif SC', serif;
  --ease-brush: cubic-bezier(0.22, 1, 0.36, 1);
}
```

- [ ] **Step 2: 创建 css/base.css**

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: auto;
  background: var(--bg-primary);
  color: var(--text-paper);
  font-family: var(--font-serif);
}

body {
  overflow-x: hidden;
  min-height: 100vh;
  background: var(--bg-primary);
}

#webgl-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

#cursor-aura {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;
}

#scroll-container {
  position: relative;
  z-index: 2;
}

.section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
}

.brush-text {
  fill: none;
  stroke: var(--text-paper);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  font-family: var(--font-serif);
  font-size: 120px;
  font-weight: 700;
  paint-order: stroke;
}
```

- [ ] **Step 3: 创建 css/sections.css**

```css
.section-intro {
  flex-direction: column;
  text-align: center;
}

.intro-title {
  width: 320px;
  height: 160px;
  overflow: visible;
}

.intro-subtitle {
  margin-top: 1.5rem;
  font-family: var(--font-display);
  font-size: 1.25rem;
  letter-spacing: 0.5em;
  color: var(--accent-indigo);
  opacity: 0;
}

.intro-quote {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--text-muted);
  opacity: 0;
}

.section-character {
  overflow: hidden;
}

.scroll {
  display: flex;
  align-items: center;
  max-width: 800px;
  width: 100%;
}

.scroll-handle {
  width: 24px;
  height: 320px;
  background: linear-gradient(90deg, #3e2b1f, #2a1d15);
  border-radius: 4px;
  flex-shrink: 0;
}

.scroll-paper {
  flex: 1;
  height: 280px;
  background: rgba(245, 240, 230, 0.06);
  border-top: 1px solid rgba(245, 240, 230, 0.1);
  border-bottom: 1px solid rgba(245, 240, 230, 0.1);
  padding: 2rem 3rem;
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
}

.section-character .section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-paper);
}

.character-info {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 0.75rem 1.5rem;
  font-size: 1.1rem;
}

.character-info dt {
  color: var(--accent-indigo);
  font-weight: 600;
}

.character-info dd {
  color: var(--text-paper);
  opacity: 0;
  transform: translateY(12px);
}

.section-outro {
  flex-direction: column;
  text-align: center;
}

.outro-line {
  font-size: 2rem;
  letter-spacing: 0.3em;
  opacity: 0;
}

.outro-hint {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  opacity: 0;
}

@media (max-width: 640px) {
  .intro-title {
    width: 240px;
    height: 120px;
  }
  .brush-text {
    font-size: 90px;
  }
  .character-info {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: 在 index.html 的 `<head>` 中添加样式链接**

在 `</head>` 前插入：

```html
<link rel="stylesheet" href="/css/variables.css">
<link rel="stylesheet" href="/css/base.css">
<link rel="stylesheet" href="/css/sections.css">
```

- [ ] **Step 5: 提交**

```bash
git add css/variables.css css/base.css css/sections.css index.html
git commit -m "feat: add ink-wash CSS variables and section styles"
```

---

### Task 4: 加载内容数据

**Files:**
- Create: `js/utils/load-content.js`
- Create: `js/utils/prefers-reduced-motion.js`

- [ ] **Step 1: 创建 js/utils/load-content.js**

```javascript
export async function loadContent() {
  const response = await fetch('/data/content.json');
  if (!response.ok) {
    throw new Error(`Failed to load content: ${response.status}`);
  }
  return response.json();
}
```

- [ ] **Step 2: 创建 js/utils/prefers-reduced-motion.js**

```javascript
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isMobile() {
  return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
}
```

- [ ] **Step 3: 提交**

```bash
git add js/utils/load-content.js js/utils/prefers-reduced-motion.js
git commit -m "feat: add content loader and motion preference utils"
```

---

### Task 5: 创建 Three.js 水墨粒子效果

**Files:**
- Create: `js/effects/ink-particles.js`
- Modify: `js/main.js`（后续创建）

- [ ] **Step 1: 创建 js/effects/ink-particles.js**

```javascript
import * as THREE from 'three';

export class InkParticles {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 50;

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    this.particles = this.createParticles();
    this.scene.add(this.particles);

    this.clock = new THREE.Clock();
    this.resizeHandler = this.onResize.bind(this);
    window.addEventListener('resize', this.resizeHandler);
  }

  createParticles() {
    const count = window.innerWidth < 768 ? 800 : 2500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const opacities = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      sizes[i] = Math.random() * 1.5 + 0.5;
      opacities[i] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0xf5f0e6) }
      },
      vertexShader: `
        attribute float size;
        attribute float opacity;
        varying float vOpacity;
        uniform float uTime;
        void main() {
          vOpacity = opacity;
          vec3 pos = position;
          pos.x += sin(uTime * 0.3 + position.y * 0.1) * 1.5;
          pos.y += cos(uTime * 0.2 + position.x * 0.1) * 1.0;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (120.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vOpacity;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          float alpha = smoothstep(0.5, 0.0, dist) * vOpacity * 0.35;
          gl_FragColor = vec4(uColor, alpha);
        }
      `
    });

    return new THREE.Points(geometry, material);
  }

  animate() {
    this.particles.material.uniforms.uTime.value = this.clock.getElapsedTime();
    this.renderer.render(this.scene, this.camera);
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  destroy() {
    window.removeEventListener('resize', this.resizeHandler);
    this.renderer.dispose();
    this.container.removeChild(this.renderer.domElement);
  }
}
```

- [ ] **Step 2: 提交**

```bash
git add js/effects/ink-particles.js
git commit -m "feat: add Three.js ink wash particle background"
```

---

### Task 6: 创建云雾层效果

**Files:**
- Create: `js/effects/clouds.js`

- [ ] **Step 1: 创建 js/effects/clouds.js**

```javascript
import * as THREE from 'three';

export class CloudLayer {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.count = options.count || 6;
    this.planes = [];
    this.createClouds();
  }

  createClouds() {
    const geometry = new THREE.PlaneGeometry(120, 40, 32, 16);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      uniforms: {
        uColor: { value: new THREE.Color(0x5b7a76) },
        uOpacity: { value: 0.08 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          float noise = sin(vUv.x * 10.0) * sin(vUv.y * 8.0) * 0.5 + 0.5;
          float alpha = smoothstep(0.4, 0.6, noise) * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `
    });

    for (let i = 0; i < this.count; i++) {
      const plane = new THREE.Mesh(geometry, material.clone());
      plane.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30 - 10,
        -20 - i * 8
      );
      plane.rotation.x = -Math.PI / 6;
      plane.material.uniforms.uOpacity.value = 0.04 + Math.random() * 0.06;
      this.scene.add(plane);
      this.planes.push({
        mesh: plane,
        speed: 0.2 + Math.random() * 0.4
      });
    }
  }

  update(time, scrollProgress) {
    this.planes.forEach((cloud, i) => {
      cloud.mesh.position.x += Math.sin(time * 0.1 + i) * 0.01;
      cloud.mesh.position.y = cloud.mesh.position.y + scrollProgress * cloud.speed * 0.05;
    });
  }
}
```

- [ ] **Step 2: 提交**

```bash
git add js/effects/clouds.js
git commit -m "feat: add layered cloud mist with parallax scroll"
```

---

### Task 7: 创建鼠标灵气跟随效果

**Files:**
- Create: `js/effects/cursor-aura.js`

- [ ] **Step 1: 创建 js/effects/cursor-aura.js**

```javascript
export class CursorAura {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.lastMouse = { x: -1000, y: -1000 };
    this.isActive = true;

    this.onMove = (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', this.onMove);
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  spawnParticle(x, y) {
    this.particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5 - 0.3,
      life: 1,
      size: Math.random() * 3 + 1
    });
  }

  animate() {
    if (!this.isActive) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const dx = this.mouse.x - this.lastMouse.x;
    const dy = this.mouse.y - this.lastMouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 5) {
      const steps = Math.min(dist / 5, 5);
      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        this.spawnParticle(
          this.lastMouse.x + dx * t + (Math.random() - 0.5) * 8,
          this.lastMouse.y + dy * t + (Math.random() - 0.5) * 8
        );
      }
      this.lastMouse.x = this.mouse.x;
      this.lastMouse.y = this.mouse.y;
    }

    this.particles = this.particles.filter((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.015;
      p.size *= 0.98;

      if (p.life <= 0) return false;

      this.ctx.beginPath();
      const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      gradient.addColorStop(0, `rgba(91, 122, 118, ${p.life * 0.4})`);
      gradient.addColorStop(1, 'rgba(91, 122, 118, 0)');
      this.ctx.fillStyle = gradient;
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      return true;
    });

    requestAnimationFrame(() => this.animate());
  }

  destroy() {
    this.isActive = false;
    window.removeEventListener('mousemove', this.onMove);
  }
}
```

- [ ] **Step 2: 提交**

```bash
git add js/effects/cursor-aura.js
git commit -m "feat: add cursor aura particle trail"
```

---

### Task 8: 实现开场章节动画

**Files:**
- Create: `js/scenes/intro-scene.js`

- [ ] **Step 1: 创建 js/scenes/intro-scene.js**

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initIntroScene(content) {
  const titleChars = document.querySelectorAll('.intro-title .brush-text');
  const subtitle = document.querySelector('.intro-subtitle');
  const quote = document.querySelector('.intro-quote');

  titleChars.forEach((char) => {
    const length = char.getComputedTextLength();
    char.style.strokeDasharray = length;
    char.style.strokeDashoffset = length;
    char.style.fill = 'transparent';
  });

  const tl = gsap.timeline({ delay: 0.8 });

  tl.to(titleChars, {
    strokeDashoffset: 0,
    fill: '#f5f0e6',
    duration: 2.5,
    stagger: 0.4,
    ease: 'power2.inOut'
  })
  .to(subtitle, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=1')
  .to(quote, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.6');

  ScrollTrigger.create({
    trigger: '#intro',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
      gsap.to('.intro-content', {
        opacity: 1 - self.progress,
        y: self.progress * -80,
        duration: 0.1
      });
    }
  });
}
```

- [ ] **Step 2: 提交**

```bash
git add js/scenes/intro-scene.js
git commit -m "feat: add intro scene brush-writing and scroll fade"
```

---

### Task 9: 实现人物章节动画

**Files:**
- Create: `js/scenes/character-scene.js`

- [ ] **Step 1: 创建 js/scenes/character-scene.js**

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initCharacterScene(content) {
  const scrollPaper = document.querySelector('.scroll-paper');
  const infoItems = document.querySelectorAll('.character-info dd');
  const title = document.querySelector('.section-character .section-title');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#character',
      start: 'top 70%',
      end: 'top 20%',
      scrub: 1
    }
  });

  tl.to(scrollPaper, {
    clipPath: 'inset(0 0% 0 0)',
    duration: 1.5,
    ease: 'power2.inOut'
  })
  .fromTo(title,
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.6 },
    '-=0.8'
  )
  .to(infoItems, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  }, '-=0.4');
}
```

- [ ] **Step 2: 提交**

```bash
git add js/scenes/character-scene.js
git commit -m "feat: add character scene scroll unfold animation"
```

---

### Task 10: 实现尾章动画与章节转场

**Files:**
- Create: `js/scenes/outro-scene.js`
- Create: `js/effects/ink-transition.js`

- [ ] **Step 1: 创建 js/effects/ink-transition.js**

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initInkTransitions() {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section, index) => {
    if (index === 0) return;
    const mask = document.createElement('div');
    mask.className = 'ink-mask';
    mask.style.cssText = `
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, transparent 0%, #0c0f0a 100%);
      pointer-events: none;
      z-index: 10;
      opacity: 0;
    `;
    section.appendChild(mask);

    gsap.fromTo(mask,
      { opacity: 0.8 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 1
        }
      }
    );
  });
}
```

- [ ] **Step 2: 创建 js/scenes/outro-scene.js**

```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initOutroScene(content) {
  const line = document.querySelector('.outro-line');
  const hint = document.querySelector('.outro-hint');

  gsap.timeline({
    scrollTrigger: {
      trigger: '#outro',
      start: 'top 60%',
      end: 'top 30%',
      scrub: 1
    }
  })
  .to(line, { opacity: 1, y: 0, duration: 0.8 })
  .to(hint, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
}
```

- [ ] **Step 3: 提交**

```bash
git add js/effects/ink-transition.js js/scenes/outro-scene.js
git commit -m "feat: add outro scene and ink mask transitions"
```

---

### Task 11: 组装主入口与渲染循环

**Files:**
- Create: `js/main.js`
- Create: `js/app.js`

- [ ] **Step 1: 创建 js/app.js**

```javascript
import { InkParticles } from './effects/ink-particles.js';
import { CloudLayer } from './effects/clouds.js';
import { CursorAura } from './effects/cursor-aura.js';
import { initIntroScene } from './scenes/intro-scene.js';
import { initCharacterScene } from './scenes/character-scene.js';
import { initOutroScene } from './scenes/outro-scene.js';
import { initInkTransitions } from './effects/ink-transition.js';
import { loadContent } from './utils/load-content.js';
import { prefersReducedMotion, isMobile } from './utils/prefers-reduced-motion.js';

export async function initApp() {
  const content = await loadContent();
  const webglContainer = document.getElementById('webgl-bg');
  const cursorCanvas = document.getElementById('cursor-aura');

  let inkParticles = null;
  let cloudLayer = null;
  let cursorAura = null;
  let animationId = null;

  if (!prefersReducedMotion()) {
    inkParticles = new InkParticles(webglContainer);
    cloudLayer = new CloudLayer(inkParticles.scene, { count: isMobile() ? 3 : 6 });

    if (!isMobile()) {
      cursorAura = new CursorAura(cursorCanvas);
    }

    const clock = new THREE.Clock();
    const renderLoop = () => {
      const elapsed = clock.getElapsedTime();
      const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      inkParticles.animate();
      if (cloudLayer) cloudLayer.update(elapsed, scrollProgress);
      animationId = requestAnimationFrame(renderLoop);
    };
    renderLoop();
  }

  initIntroScene(content.intro);
  initCharacterScene(content.character);
  initOutroScene(content.outro);
  initInkTransitions();

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    if (inkParticles) inkParticles.destroy();
    if (cursorAura) cursorAura.destroy();
  };
}
```

- [ ] **Step 2: 创建 js/main.js**

```javascript
import { initApp } from './app.js';

initApp().catch((error) => {
  console.error('Failed to initialize app:', error);
});
```

- [ ] **Step 3: 提交**

```bash
git add js/app.js js/main.js
git commit -m "feat: wire up app entry, render loop, and all scenes"
```

---

### Task 12: 填充人物内容到 DOM

**Files:**
- Modify: `js/app.js`

- [ ] **Step 1: 在 js/app.js 中 loadContent 后插入 DOM 填充逻辑**

在 `const content = await loadContent();` 之后、`const webglContainer = ...` 之前添加：

```javascript
const infoMap = {
  '出身': 'char-origin',
  '境界': 'char-realm',
  '性格': 'char-personality'
};

content.character.info.forEach((item) => {
  const id = infoMap[item.label];
  if (id) {
    document.getElementById(id).textContent = item.value;
  }
});

document.querySelector('.section-character .section-title').textContent = content.character.title;
document.querySelector('.intro-subtitle').textContent = content.intro.subtitle;
document.querySelector('.intro-quote').textContent = content.intro.quote;
document.querySelector('.outro-line').textContent = content.outro.line;
document.querySelector('.outro-hint').textContent = content.outro.hint;
document.title = content.site.title;
```

- [ ] **Step 2: 提交**

```bash
git add js/app.js
git commit -m "feat: populate DOM content from content.json"
```

---

### Task 13: 本地验证与构建

**Files:**
- Modify: 无（验证步骤）

- [ ] **Step 1: 启动开发服务器**

Run: `npm run dev`
Expected: Vite 启动，终端显示本地 URL（如 `http://localhost:5173`）。

- [ ] **Step 2: 打开浏览器验证以下行为**

1. 页面背景为深色，水墨粒子缓慢飘动
2. 1 秒左右后，「温若」二字以毛笔书写动画出现
3. 副标题和引句依次淡入
4. 向下滚动，开场内容淡出
5. 人物章节卷轴从左侧展开，文字依次浮现
6. 继续滚动到尾章，结语和提示淡入
7. 鼠标移动时有淡淡青烟跟随
8. 页面无控制台报错

- [ ] **Step 3: 构建生产版本**

Run: `npm run build`
Expected: `dist/` 目录生成，包含 `index.html`、CSS、JS、data 文件夹。

- [ ] **Step 4: 提交**

```bash
git add dist/ 2>/dev/null || true
git commit -m "chore: verify dev server and production build" || echo "No changes to commit"
```

---

### Task 14: 移动端降级与响应式检查

**Files:**
- Modify: `css/base.css`
- Modify: `js/effects/ink-particles.js`

- [ ] **Step 1: 在 css/base.css 中添加减少动效支持**

在文件末尾添加：

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: 确保 ink-particles.js 已在 createParticles 中按屏幕宽度调整粒子数量**

确认第 25 行：`const count = window.innerWidth < 768 ? 800 : 2500;`

- [ ] **Step 3: 在移动设备或浏览器 DevTools 中检查**

1. 布局不溢出
2. 文字大小合适
3. 卷轴容器宽度 100%
4. 无卡顿或掉帧

- [ ] **Step 4: 提交**

```bash
git add css/base.css
git commit -m "feat: add reduced-motion support and mobile performance guards"
```

---

## Spec Coverage Check

| Spec 要求 | 对应 Task |
|-----------|----------|
| 水墨仙气视觉氛围 | Task 3, 5, 6 |
| Three.js WebGL 粒子与云雾 | Task 5, 6 |
| GSAP 滚动动画 | Task 8, 9, 10, 11 |
| 毛笔书写动画 | Task 8 |
| 卷轴展开动画 | Task 9 |
| 鼠标灵气效果 | Task 7 |
| 章节转场 | Task 10 |
| 移动端降级 | Task 14 |
| 数据集中管理 | Task 2, 12 |
| 纵向长卷结构 | Task 2, 8, 9, 10 |

## Placeholder Scan

- 无 TBD / TODO
- 无 "add appropriate error handling" 等模糊描述
- 每个代码步骤包含完整代码
- 文件路径明确
- 函数/变量名在全文中一致

---

