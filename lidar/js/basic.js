import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PLYLoader } from 'three/addons/loaders/PLYLoader.js';

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('c') });
renderer.setSize(innerWidth, innerHeight);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.01, 1000);
camera.position.set(2, 2, 2);
const controls = new OrbitControls(camera, renderer.domElement);

const grid = new THREE.GridHelper(10, 10, 0x444444, 0x222222);
scene.add(grid);

// ===== 点群を格納する変数 =====
let currentPoints;

// ===== 点群追加 =====
function addPoints(geometry) {
    if (currentPoints) {
        scene.remove(currentPoints);
        currentPoints.geometry.dispose();
        currentPoints.material.dispose();
    }
    const mat = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: !!geometry.getAttribute('color'),
        sizeAttenuation: true
    });
    currentPoints = new THREE.Points(geometry, mat);
    scene.add(currentPoints);
}

// ===== PLYローダー =====
function loadPLYBuffer(buf) {
    const loader = new PLYLoader();
    const geo = loader.parse(buf);
    geo.center();
    addPoints(geo);
}

// ===== XYZローダー =====
function loadXYZText(txt) {
    const lines = txt.split(/\r?\n/).filter(Boolean);
    const positions = new Float32Array(lines.length * 3);
    const colors = new Float32Array(lines.length * 3);
    lines.forEach((l, i) => {
        const sp = l.trim().split(/\s+/);
        positions.set([+sp[0], +sp[1], +sp[2]], i * 3);
        const r = (sp[3] || 255) / 255, g = (sp[4] || 255) / 255, b = (sp[5] || 255) / 255;
        colors.set([r, g, b], i * 3);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.center();
    addPoints(geo);
}

// ===== ファイル選択 =====
document.getElementById('file').addEventListener('change', async e => {
    const f = e.target.files[0];
    if (!f) return;
    const ext = f.name.split('.').pop().toLowerCase();
    if (ext === 'ply') loadPLYBuffer(await f.arrayBuffer());
    if (ext === 'xyz') loadXYZText(await f.text());
});

// ===== リセットボタン =====
const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (currentPoints) {
            scene.remove(currentPoints);
            currentPoints.geometry.dispose();
            currentPoints.material.dispose();
            currentPoints = null;
        }
        // カメラ位置も初期化したい場合
        camera.position.set(2, 2, 2);
        controls.target.set(0, 0, 0);
        controls.update();
    });
}

// ===== リサイズ =====
addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
});

// ===== レンダリングループ =====
renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
});
