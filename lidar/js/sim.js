import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(innerWidth, innerHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.01, 1000);
camera.position.set(2, 2, 2);
const controls = new OrbitControls(camera, renderer.domElement);

const grid = new THREE.GridHelper(10, 10, 0x444444, 0x222222);
scene.add(grid);

// ===== 点群を格納する変数 =====
let points = null;

// 点群ロード（PLY/XYZ用の関数の最後で points に代入する想定）
function addPointCloud(geometry) {
    if (points) scene.remove(points); // 既存を消す
    const mat = new THREE.PointsMaterial({ size: 0.02, vertexColors: true });
    points = new THREE.Points(geometry, mat);
    scene.add(points);
}

// ===== リセットボタン処理 =====
document.getElementById('resetBtn').addEventListener('click', () => {
    if (points) {
        scene.remove(points);
        points.geometry.dispose();
        points.material.dispose();
        points = null;
    }
});

addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
});

renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
});