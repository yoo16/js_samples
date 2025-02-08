// Canvas 要素を取得し、2D コンテキストを取得
const canvas = document.getElementById('myCanvas');
// 2D コンテキスト
const ctx = canvas.getContext('2d');

/**
 * drawTriangle()
 */
function drawTriangle() {
    ctx.fillStyle = 'skyblue';
    ctx.strokeStyle = 'skyblue';
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(150, 0);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

/**
 * drawSquare()
 */
function drawSquare() {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    ctx.fillRect(200, 0, 100, 100);
    ctx.strokeRect(200, 0, 100, 100);
}

/**
 * drawCircle()
 */
function drawCircle() {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.arc(400, 50, 50, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

/**
 * drawText();
 */
function drawTextOnCanvas(text, x, y, font, color) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(text, x, y);
}

// 描画
drawTriangle();
drawSquare();
drawCircle();

drawTextOnCanvas('Hello, Canvas!', 150, 150, '20px Arial', 'blue');
drawTextOnCanvas('この文字はCanvasを使って描画しています', 0, 200, '20px Arial', 'blue');