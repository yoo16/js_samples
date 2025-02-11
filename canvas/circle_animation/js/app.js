const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 最小・最大の円の個数と初期値
let minCircles = 3;
let maxCircles = 8;
let numCircles = minCircles;

const interval = 3000;
const radius = 20;
const centerRadius = 100;
const baseSpeed = 0.02;
const iterationDepth = 3; // 中点計算の試行回数
const angleMode = 'random'; // 'random' または 'fixed'
const speedMode = 'random'; // 'random' または 'fixed'

// 角度、速度、円の中心位置は numCircles に依存するので、再計算可能なように変数宣言しておく
let angles, speeds, circleCenters;

// 円の個数が変わったときに各配列を更新する関数
function updateCircles() {
    angles = angleMode === 'random'
        ? Array.from({ length: numCircles }, () => Math.random() * Math.PI * 2)
        : Array.from({ length: numCircles }, (_, i) => (i / numCircles) * 2 * Math.PI);
    speeds = speedMode === 'random'
        ? Array.from({ length: numCircles }, () => baseSpeed * (0.5 + Math.random()))
        : Array(numCircles).fill(baseSpeed);
    circleCenters = Array.from({ length: numCircles }, (_, i) => {
        const theta = (i / numCircles) * (2 * Math.PI);
        return {
            x: canvas.width / 2 + centerRadius * Math.cos(theta),
            y: canvas.height / 2 + centerRadius * Math.sin(theta)
        };
    });
}

// 初期設定
updateCircles();

function calculateMidPoints(points) {
    return points.map((point, i) => {
        const nextPoint = points[(i + 1) % points.length];
        return {
            x: (point.x + nextPoint.x) / 2,
            y: (point.y + nextPoint.y) / 2
        };
    });
}

function drawLines(points, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.lineTo(points[0].x, points[0].y);
    ctx.stroke();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;

    // 各円周上の点の座標を計算
    const points = circleCenters.map((center, i) => {
        return {
            x: center.x + radius * Math.cos(angles[i]),
            y: center.y + radius * Math.sin(angles[i])
        };
    });

    // 円を描画
    ctx.strokeStyle = "black";
    circleCenters.forEach(center => {
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        ctx.stroke();
    });

    // 各円周上の点を描画
    ctx.fillStyle = "red";
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fill();
    });

    // 中点計算による多角形の描画（各反復ごとに色を変える）
    let currentPoints = points;
    const colors = ["blue", "green", "purple", "orange", "brown"];
    for (let i = 0; i < iterationDepth; i++) {
        drawLines(currentPoints, colors[i % colors.length]);
        currentPoints = calculateMidPoints(currentPoints);
    }

    // 各円上の点の角度を更新
    angles = angles.map((angle, i) => angle + speeds[i]);

    requestAnimationFrame(draw);
}

draw();

// 一定時間ごとに numCircles を更新（ここでは5秒ごとに更新）
setInterval(() => {
    numCircles++;  // 1つ増やす
    if (numCircles > maxCircles) {
        numCircles = minCircles;  // 8を超えたら3に戻す
    }
    updateCircles(); // 円の個数が変わったので、角度・速度・中心位置を再計算
}, interval);