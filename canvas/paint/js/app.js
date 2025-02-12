// DOM 要素
const colorPicker = document.getElementById('colorPicker');
const lineWidthRange = document.getElementById('lineWidth');
const lineWidthValue = document.getElementById('lineWidthValue');
const resetButton = document.getElementById('resetButton');
const downloadButton = document.getElementById('downloadButton');

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

/**
 * 描画を開始する
 * @param {number} x - 描画の開始 x 座標
 * @param {number} y - 描画の開始 y 座標
 */
function startDrawing(x, y) {
    isDrawing = true;
    [lastX, lastY] = [x, y];
}

/**
 * 描画を続ける
 * @param {number} x - 描画の継続 x 座標
 * @param {number} y - 描画の継続 y 座標
 */
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

/**
 * 描画終了
 * 描画フラグを false に設定し、描画動作を停止する。
 */
function endDrawing() {
    isDrawing = false;
}

// イベント
// マウスダウン
canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    startDrawing(e.clientX - rect.left, e.clientY - rect.top);
});

// タッチ開始
canvas.addEventListener('touchstart', (e) => {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    startDrawing(touch.clientX - rect.left, touch.clientY - rect.top);
    e.preventDefault();
});

// マウス移動
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    draw(e.clientX - rect.left, e.clientY - rect.top);
});

// タッチ移動
canvas.addEventListener('touchmove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    draw(touch.clientX - rect.left, touch.clientY - rect.top);
    e.preventDefault();
});

// マウスアップ
canvas.addEventListener('mouseup', endDrawing);
// マウスアウト
canvas.addEventListener('mouseout', endDrawing);

// タッチ終了
canvas.addEventListener('touchend', endDrawing);
canvas.addEventListener('touchcancel', endDrawing);

// コントロール変更時のイベントリスナー
colorPicker.addEventListener('change', (e) => {
    currentColor = e.target.value;
});

// 太さ入力
lineWidthRange.addEventListener('input', (e) => {
    currentLineWidth = e.target.value;
    lineWidthValue.textContent = currentLineWidth;
});

// リセットボタンクリック
resetButton.addEventListener('click', () => {
    // キャンバス全体をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// ダウンロードボタンクリック
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