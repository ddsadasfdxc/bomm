/* 大千世界 —— 银河观想 (Three.js) */
import * as THREE from 'three';
import { prefersReducedMotion } from './utils/prefers-reduced-motion.js';

let state = null;

export function initCosmos() {
  const card = document.querySelector('[data-cosmos]');
  if (!card) return;
  card.addEventListener('click', openCosmos);
}

function openCosmos() {
  try {
    if (!state) state = buildCosmos();
  } catch (e) {
    console.warn('Cosmos unavailable:', e);
    return;
  }
  state.overlay.classList.add('open');
  state.ui.classList.remove('faded');
  document.body.style.overflow = 'hidden';
  state.running = true;
  state.clock.getDelta();
  requestAnimationFrame(state.loop);
}

function closeCosmos() {
  if (!state) return;
  state.overlay.classList.remove('open');
  document.body.style.overflow = '';
  state.running = false;
}

function makeGlowTexture(inner, outer) {
  const s = 128;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2);
  g.addColorStop(0, inner);
  g.addColorStop(0.3, inner.replace('1)', '0.55)'));
  g.addColorStop(0.65, outer.replace('0.6)', '0.18)'));
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(c);
}

function buildGalaxy() {
  const group = new THREE.Group();
  const COUNT = 18000;
  const ARMS = 4;
  const INNER = 0.9;
  const OUTER = 13;
  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);

  const cInner = new THREE.Color(1.0, 0.78, 0.52);   // 暖金核心
  const cMid   = new THREE.Color(0.82, 0.86, 1.0);   // 银白
  const cOuter = new THREE.Color(0.45, 0.62, 1.0);   // 靛蓝远臂

  for (let i = 0; i < COUNT; i++) {
    const r = Math.pow(Math.random(), 1.6) * OUTER + INNER;
    const arm = (i % ARMS) / ARMS * Math.PI * 2;
    const spin = r * 0.55;
    const scatter = (1.1 - r / OUTER) * 0.6 + 0.12;
    const rx = (Math.random() - 0.5) * scatter * r * 0.35;
    const rz = (Math.random() - 0.5) * scatter * r * 0.35;
    const ry = (Math.random() - 0.5) * scatter * (1.0 - r / OUTER) * 1.4;

    pos[i*3]   = Math.cos(arm + spin) * r + rx;
    pos[i*3+1] = ry;
    pos[i*3+2] = Math.sin(arm + spin) * r + rz;

    const t = r / OUTER;
    const c = new THREE.Color();
    if (t < 0.35) c.lerpColors(cInner, cMid, t / 0.35);
    else c.lerpColors(cMid, cOuter, (t - 0.35) / 0.65);
    const jitter = 0.85 + Math.random() * 0.3;
    col[i*3]   = Math.min(1, c.r * jitter);
    col[i*3+1] = Math.min(1, c.g * jitter);
    col[i*3+2] = Math.min(1, c.b * jitter);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

  const starTex = makeGlowTexture('rgba(255,250,240,1)', 'rgba(160,180,255,0.6)');
  const mat = new THREE.PointsMaterial({
    size: 0.16,
    map: starTex,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  group.add(new THREE.Points(geo, mat));

  // 亮星层（少量大颗粒）
  const BCOUNT = 600;
  const bpos = new Float32Array(BCOUNT * 3);
  for (let i = 0; i < BCOUNT; i++) {
    const r = Math.pow(Math.random(), 1.4) * OUTER + INNER;
    const a = Math.random() * Math.PI * 2 + r * 0.55;
    bpos[i*3]   = Math.cos(a) * r + (Math.random() - 0.5);
    bpos[i*3+1] = (Math.random() - 0.5) * 0.8;
    bpos[i*3+2] = Math.sin(a) * r + (Math.random() - 0.5);
  }
  const bgeo = new THREE.BufferGeometry();
  bgeo.setAttribute('position', new THREE.BufferAttribute(bpos, 3));
  const bmat = new THREE.PointsMaterial({
    size: 0.42, map: starTex, color: 0xfff2dd,
    transparent: true, opacity: 0.85,
    depthWrite: false, blending: THREE.AdditiveBlending,
  });
  group.add(new THREE.Points(bgeo, bmat));

  // 核心辉光
  const core = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,214,160,1)', 'rgba(255,150,90,0.6)'),
    transparent: true, opacity: 0.9,
    depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  core.scale.set(7, 7, 1);
  group.add(core);

  // 星云
  const nebColors = [
    'rgba(140,120,255,0.6)', 'rgba(90,160,255,0.6)',
    'rgba(200,110,220,0.6)', 'rgba(90,220,220,0.6)', 'rgba(255,140,160,0.6)',
  ];
  const nebulas = [];
  for (let i = 0; i < 5; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTexture('rgba(255,255,255,0.35)', nebColors[i]),
      transparent: true, opacity: 0.12,
      depthWrite: false, blending: THREE.AdditiveBlending,
      color: new THREE.Color(nebColors[i].replace(/[\d.]+\)/, '1)')),
    }));
    const ang = Math.random() * Math.PI * 2;
    const rr = 6 + Math.random() * 10;
    s.position.set(Math.cos(ang) * rr, (Math.random() - 0.5) * 4, Math.sin(ang) * rr);
    const sc = 14 + Math.random() * 16;
    s.scale.set(sc, sc, 1);
    group.add(s);
    nebulas.push(s);
  }

  return { group, nebulas, brightMat: bmat };
}


/* ---- 太阳系：太阳 / 地球 / 月球 ---- */

function makeSunTexture() {
  const s = 256;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s/2, s/2, s*0.08, s/2, s/2, s/2);
  g.addColorStop(0, '#fffbe8');
  g.addColorStop(0.25, '#ffe9a8');
  g.addColorStop(0.5, '#ffbe5a');
  g.addColorStop(0.78, '#f07d2e');
  g.addColorStop(1, '#8a2f08');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  // 表面米粒组织噪点
  for (let i = 0; i < 900; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.pow(Math.random(), 0.6) * s * 0.48;
    const x = s/2 + Math.cos(a) * r;
    const y = s/2 + Math.sin(a) * r;
    const rad = 1 + Math.random() * 3.2;
    const bright = Math.random() > 0.5;
    ctx.beginPath();
    ctx.fillStyle = bright ? 'rgba(255,244,200,0.16)' : 'rgba(160,60,10,0.14)';
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
  }
  return new THREE.CanvasTexture(c);
}

function makeCoronaTexture() {
  const s = 256;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s/2);
  g.addColorStop(0, 'rgba(255,236,180,0.85)');
  g.addColorStop(0.22, 'rgba(255,190,110,0.42)');
  g.addColorStop(0.5, 'rgba(255,140,60,0.14)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  // 日冕射流
  ctx.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2 + Math.random() * 0.3;
    const len = s * (0.32 + Math.random() * 0.16);
    const x0 = s/2 + Math.cos(a) * s * 0.14;
    const y0 = s/2 + Math.sin(a) * s * 0.14;
    const x1 = s/2 + Math.cos(a) * len;
    const y1 = s/2 + Math.sin(a) * len;
    const lg = ctx.createLinearGradient(x0, y0, x1, y1);
    lg.addColorStop(0, 'rgba(255,210,140,0.28)');
    lg.addColorStop(1, 'rgba(255,140,60,0)');
    ctx.strokeStyle = lg;
    ctx.lineWidth = 2.5 + Math.random() * 3.5;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  }
  return new THREE.CanvasTexture(c);
}

function makeEarthTexture() {
  const w = 512, h = 256;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  // 海洋：深浅渐变
  const og = ctx.createLinearGradient(0, 0, 0, h);
  og.addColorStop(0, '#16324e');
  og.addColorStop(0.5, '#0d3d63');
  og.addColorStop(1, '#122c46');
  ctx.fillStyle = og;
  ctx.fillRect(0, 0, w, h);
  // 大陆斑块（多边形团簇）
  const continents = [
    [0.16, 0.32, 0.16], [0.34, 0.58, 0.11], [0.52, 0.26, 0.14],
    [0.66, 0.48, 0.12], [0.82, 0.30, 0.10], [0.44, 0.74, 0.09], [0.12, 0.68, 0.08],
  ];
  continents.forEach(([cx, cy, size]) => {
    for (let b = 0; b < 26; b++) {
      const a = Math.random() * Math.PI * 2;
      const rr = Math.pow(Math.random(), 0.7) * size * w;
      const x = (cx * w + Math.cos(a) * rr + w) % w;
      const y = Math.min(h - 6, Math.max(6, cy * h + Math.sin(a) * rr * 0.6));
      const rad = 4 + Math.random() * 14;
      const land = ctx.createRadialGradient(x, y, 0, x, y, rad);
      const hue = Math.random();
      const col = hue > 0.72 ? 'rgba(196,168,120,' : (hue > 0.3 ? 'rgba(84,128,72,' : 'rgba(60,102,60,');
      land.addColorStop(0, col + '0.95)');
      land.addColorStop(1, col + '0)');
      ctx.fillStyle = land;
      ctx.beginPath();
      ctx.arc(x, y, rad, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  // 极地冰盖
  const cap = ctx.createLinearGradient(0, 0, 0, h);
  cap.addColorStop(0, 'rgba(235,244,250,0.95)');
  cap.addColorStop(0.09, 'rgba(235,244,250,0)');
  cap.addColorStop(0.91, 'rgba(235,244,250,0)');
  cap.addColorStop(1, 'rgba(235,244,250,0.95)');
  ctx.fillStyle = cap;
  ctx.fillRect(0, 0, w, h);
  return new THREE.CanvasTexture(c);
}

function makeCloudTexture() {
  const w = 512, h = 256;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * w;
    const y = h * 0.12 + Math.random() * h * 0.76;
    const cw = 20 + Math.random() * 70;
    const ch = 6 + Math.random() * 16;
    const g = ctx.createRadialGradient(x, y, 0, x, y, cw);
    g.addColorStop(0, 'rgba(255,255,255,0.5)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, ch / cw);
    ctx.beginPath();
    ctx.arc(0, 0, cw, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  return new THREE.CanvasTexture(c);
}

function makeMoonTexture() {
  const s = 256;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s/2, s/2, s*0.05, s/2, s/2, s/2);
  g.addColorStop(0, '#d9d4cd');
  g.addColorStop(0.7, '#b3ada5');
  g.addColorStop(1, '#7d7873');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  // 环形山
  for (let i = 0; i < 120; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = Math.pow(Math.random(), 0.5) * s * 0.46;
    const x = s/2 + Math.cos(a) * r;
    const y = s/2 + Math.sin(a) * r;
    const rad = 1.5 + Math.random() * 7;
    ctx.beginPath();
    ctx.fillStyle = 'rgba(70,66,62,0.35)';
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'rgba(230,226,220,0.28)';
    ctx.arc(x - rad * 0.25, y - rad * 0.25, rad * 0.55, 0, Math.PI * 2);
    ctx.fill();
  }
  return new THREE.CanvasTexture(c);
}

function buildSolarSystem() {
  const sys = new THREE.Group();   // 跟随银河慢转
  const orbitR = 4.6;
  sys.position.set(orbitR, 0.55, 0);

  const local = new THREE.Group(); // 太阳系自身（公转演示）
  sys.add(local);

  // --- 太阳 ---
  const sunR = 0.6;
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(sunR, 48, 32),
    new THREE.MeshBasicMaterial({ map: makeSunTexture() })
  );
  local.add(sun);

  const corona = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeCoronaTexture(),
    transparent: true, opacity: 0.95,
    depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  corona.scale.set(4.4, 4.4, 1);
  local.add(corona);

  const sunLight = new THREE.PointLight(0xffe6b8, 90, 30, 1.6);
  local.add(sunLight);

  // --- 地球（含月球） ---
  const earthOrbit = new THREE.Group();
  local.add(earthOrbit);

  const earthPivot = new THREE.Group();
  earthPivot.position.set(1.75, 0, 0);
  earthOrbit.add(earthPivot);

  const earthR = 0.22;
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(earthR, 48, 32),
    new THREE.MeshPhongMaterial({
      map: makeEarthTexture(),
      specular: new THREE.Color(0x2a4a66),
      shininess: 14,
    })
  );
  earth.rotation.z = 0.41; // 地轴倾角 ~23.5°
  earthPivot.add(earth);

  const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(earthR * 1.035, 48, 32),
    new THREE.MeshLambertMaterial({
      map: makeCloudTexture(),
      transparent: true, opacity: 0.55, depthWrite: false,
    })
  );
  clouds.rotation.z = 0.41;
  earthPivot.add(clouds);

  // 地球大气边缘辉光
  const atmo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(120,180,255,0.55)', 'rgba(60,120,255,0.35)'),
    transparent: true, opacity: 0.5,
    depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  atmo.scale.set(earthR * 3.4, earthR * 3.4, 1);
  earthPivot.add(atmo);

  // --- 月球 ---
  const moonPivot = new THREE.Group();
  earthPivot.add(moonPivot);
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.062, 32, 24),
    new THREE.MeshPhongMaterial({ map: makeMoonTexture(), shininess: 4 })
  );
  moon.position.set(0.48, 0, 0);
  moonPivot.add(moon);

  // 地球公转轨道线
  const orbitPts = [];
  for (let i = 0; i <= 128; i++) {
    const a = (i / 128) * Math.PI * 2;
    orbitPts.push(new THREE.Vector3(Math.cos(a) * 1.75, 0, Math.sin(a) * 1.75));
  }
  const orbitLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(orbitPts),
    new THREE.LineBasicMaterial({ color: 0x8899bb, transparent: true, opacity: 0.28 })
  );
  local.add(orbitLine);

  // 环境补光，避免背光面死黑
  const amb = new THREE.AmbientLight(0x334455, 1.6);
  local.add(amb);

  return { sys, sun, corona, sunLight, earthOrbit, earthPivot, earth, clouds, moonPivot, moon };
}

function buildBackgroundStars() {
  const COUNT = 2500;
  const pos = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    const r = 55 + Math.random() * 70;
    pos[i*3]   = r * Math.sin(ph) * Math.cos(th);
    pos[i*3+1] = r * Math.cos(ph);
    pos[i*3+2] = r * Math.sin(ph) * Math.sin(th);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.55, map: makeGlowTexture('rgba(255,255,255,1)', 'rgba(200,210,255,0.6)'),
    color: 0xdde4ff, transparent: true, opacity: 0.7,
    depthWrite: false, blending: THREE.AdditiveBlending,
  });
  return new THREE.Points(geo, mat);
}

function buildCosmos() {
  const overlay = document.createElement('div');
  overlay.className = 'cosmos-overlay';
  overlay.innerHTML =
    '<canvas class="cosmos-canvas"></canvas>' +
    '<div class="cosmos-ui">' +
      '<h2 class="cosmos-title">大千世界</h2>' +
      '<p class="cosmos-sub">三千世界，不过一瞬光影</p>' +
      '<p class="cosmos-hint">拖动环视 · 双指近观 · Esc 归来</p>' +
      '<button class="cosmos-close" type="button">归 来</button>' +
    '</div>';
  document.body.appendChild(overlay);

  const canvas = overlay.querySelector('canvas');
  const ui = overlay.querySelector('.cosmos-ui');

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x03040c, 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x03040c, 0.012);
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 400);

  const { group, nebulas, brightMat } = buildGalaxy();
  scene.add(group);
  scene.add(buildBackgroundStars());

  const solar = buildSolarSystem();
  scene.add(solar.sys);

  const st = {
    overlay, ui, renderer, scene, camera,
    running: false,
    clock: new THREE.Clock(),
    baseAngle: 0,
    rot: { x: 0, y: 0 },
    cur: { dist: 19 },
    tgt: { rx: 0.18, ry: 0, dist: 19 },
    dragging: false, px: 0, py: 0,
    pointers: new Map(),
    pinchDist: 0,
    elapsed: 0,
    reduced: prefersReducedMotion(),
    loop: null,
  };

  st.loop = () => {
    if (!st.running) return;
    const dt = Math.min(st.clock.getDelta(), 0.05);
    st.elapsed += dt;
    if (!st.dragging && !st.reduced) st.baseAngle += dt * 0.045;

    st.rot.x += (st.tgt.rx - st.rot.x) * 0.055;
    st.rot.y += (st.tgt.ry - st.rot.y) * 0.055;
    st.cur.dist += (st.tgt.dist - st.cur.dist) * 0.07;

    const tilt = st.rot.x + 0.34;
    const ang = st.baseAngle + st.rot.y;
    camera.position.set(
      Math.cos(ang) * st.cur.dist * Math.cos(tilt),
      Math.sin(tilt) * st.cur.dist + 1.6,
      Math.sin(ang) * st.cur.dist * Math.cos(tilt)
    );
    camera.lookAt(0, 0.4, 0);

    if (!st.reduced) {
      group.rotation.y += dt * 0.02;
      nebulas.forEach((n, i) => { n.material.rotation += dt * 0.02 * (i % 2 ? 1 : -1); });
      brightMat.opacity = 0.7 + Math.sin(st.elapsed * 2.1) * 0.25;

      // 太阳系动态
      solar.sys.rotation.y += dt * 0.02;              // 与银河同速公转漂移
      solar.sun.rotation.y += dt * 0.06;              // 太阳自转
      solar.corona.material.rotation += dt * 0.05;    // 日冕缓旋
      const pulse = 1 + Math.sin(st.elapsed * 1.6) * 0.05;
      solar.corona.scale.set(4.4 * pulse, 4.4 * pulse, 1);
      solar.sunLight.intensity = 90 + Math.sin(st.elapsed * 1.6) * 12;
      solar.earthOrbit.rotation.y += dt * 0.22;       // 地球公转
      solar.earth.rotation.y += dt * 0.9;             // 地球自转
      solar.clouds.rotation.y += dt * 1.05;           // 云层差速
      solar.moonPivot.rotation.y += dt * 0.55;        // 月球绕地
      solar.moon.rotation.y += dt * 0.55;             // 潮汐锁定
    }
    renderer.render(scene, camera);
    requestAnimationFrame(st.loop);
  };

  // 交互：单指旋转 / 双指捏合缩放 / 滚轮缩放
  const MIN_DIST = 2.2, MAX_DIST = 32;

  const pinchDistance = () => {
    const pts = Array.from(st.pointers.values());
    if (pts.length < 2) return 0;
    const dx = pts[0].x - pts[1].x;
    const dy = pts[0].y - pts[1].y;
    return Math.hypot(dx, dy);
  };

  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    st.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (st.pointers.size === 1) {
      st.dragging = true;
      st.px = e.clientX; st.py = e.clientY;
    } else if (st.pointers.size === 2) {
      st.dragging = false;          // 双指时暂停旋转，纯缩放
      st.pinchDist = pinchDistance();
    }
    ui.classList.add('faded');
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!st.pointers.has(e.pointerId)) return;
    st.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (st.pointers.size === 2) {
      // 捏合缩放：按指距比例对数缩放，手感均匀
      const nd = pinchDistance();
      if (st.pinchDist > 0 && nd > 0) {
        const ratio = nd / st.pinchDist;
        st.tgt.dist = Math.max(MIN_DIST, Math.min(MAX_DIST, st.tgt.dist / ratio));
      }
      st.pinchDist = nd;
      return;
    }

    if (!st.dragging) return;
    st.tgt.ry += (e.clientX - st.px) * 0.0042;
    st.tgt.rx = Math.max(-0.85, Math.min(0.85, st.tgt.rx + (e.clientY - st.py) * 0.0026));
    st.px = e.clientX; st.py = e.clientY;
  });

  const endPointer = (e) => {
    st.pointers.delete(e.pointerId);
    if (st.pointers.size === 1) {
      // 双指抬起一指后，剩下一指无缝接管旋转
      const p = Array.from(st.pointers.values())[0];
      st.dragging = true;
      st.px = p.x; st.py = p.y;
      st.pinchDist = 0;
    } else if (st.pointers.size === 0) {
      st.dragging = false;
      st.pinchDist = 0;
    }
  };
  canvas.addEventListener('pointerup', endPointer);
  canvas.addEventListener('pointercancel', endPointer);

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    st.tgt.dist = Math.max(MIN_DIST, Math.min(MAX_DIST, st.tgt.dist + e.deltaY * 0.02));
    ui.classList.add('faded');
  }, { passive: false });

  overlay.querySelector('.cosmos-close').addEventListener('click', closeCosmos);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCosmos(); });
  window.addEventListener('resize', () => {
    if (!st.overlay.classList.contains('open')) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return st;
}
