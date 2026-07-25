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
      '<p class="cosmos-hint">拖动环视 · 滚轮近观 · Esc 归来</p>' +
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

  const st = {
    overlay, ui, renderer, scene, camera,
    running: false,
    clock: new THREE.Clock(),
    baseAngle: 0,
    rot: { x: 0, y: 0 },
    cur: { dist: 19 },
    tgt: { rx: 0.18, ry: 0, dist: 19 },
    dragging: false, px: 0, py: 0,
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
    }
    renderer.render(scene, camera);
    requestAnimationFrame(st.loop);
  };

  // 交互
  canvas.addEventListener('pointerdown', (e) => {
    st.dragging = true; st.px = e.clientX; st.py = e.clientY;
    canvas.setPointerCapture(e.pointerId);
    ui.classList.add('faded');
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!st.dragging) return;
    st.tgt.ry += (e.clientX - st.px) * 0.0042;
    st.tgt.rx = Math.max(-0.85, Math.min(0.85, st.tgt.rx + (e.clientY - st.py) * 0.0026));
    st.px = e.clientX; st.py = e.clientY;
  });
  canvas.addEventListener('pointerup', () => { st.dragging = false; });
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    st.tgt.dist = Math.max(8, Math.min(32, st.tgt.dist + e.deltaY * 0.02));
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
