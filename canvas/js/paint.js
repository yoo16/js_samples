// canvas 要素と描画コンテキストの取得
const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');

// 描画状態を管理する変数
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// 現在の描画設定（初期値）
let currentColor = '#3490dc';
let currentLineWidth = 3;

// HTML 側のコントロール要素の取得
const colorPicker = document.getElementById('colorPicker');
const lineWidthRange = document.getElementById('lineWidth');
const lineWidthValue = document.getElementById('lineWidthValue');
const resetButton = document.getElementById('resetButton');
const downloadButton = document.getElementById('downloadButton');

// コントロール変更時のイベントリスナー
colorPicker.addEventListener('change', (e) => {
    currentColor = e.target.value;
});

lineWidthRange.addEventListener('input', (e) => {
    currentLineWidth = e.target.value;
    lineWidthValue.textContent = currentLineWidth;
});

// リセットボタンのイベントリスナー
resetButton.addEventListener('click', () => {
    // キャンバス全体をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// ダウンロードボタンのイベントリスナー
downloadButton.addEventListener('click', () => {
    // Canvas の内容を PNG のデータURL に変換
    const dataURL = canvas.toDataURL('image/png');

    // 一時的なリンク（aタグ）を生成してクリックし、ダウンロードを実行
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'canvas.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// 描画開始処理
function startDrawing(x, y) {
    isDrawing = true;
    [lastX, lastY] = [x, y];
}

// 描画中処理
function draw(x, y) {
    if (!isDrawing) return;
    // 前回の位置から現在の位置まで線を描画
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    // 現在の色と線の太さを適用
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentLineWidth;
    ctx.stroke();
    [lastX, lastY] = [x, y];
}

// 描画終了処理
function endDrawing() {
    isDrawing = false;
}

// マウスイベントの設定
canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    startDrawing(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    draw(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseout', endDrawing);

// タッチイベントの設定
canvas.addEventListener('touchstart', (e) => {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    startDrawing(touch.clientX - rect.left, touch.clientY - rect.top);
    e.preventDefault();
});

canvas.addEventListener('touchmove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    draw(touch.clientX - rect.left, touch.clientY - rect.top);
    e.preventDefault();
});

canvas.addEventListener('touchend', endDrawing);
canvas.addEventListener('touchcancel', endDrawing);
