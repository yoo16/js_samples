// Canvas とコンテキストの取得
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// キャンバスサイズ
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

// 複数のドットを格納する配列
const dots = [];
// ドットの数（必要に応じて調整可能）
const numDots = 200;
// 距離制限
const distanceLimit = 100;

/**
 * ドットの生成
 */
function createDots() {
    for (let i = 0; i < numDots; i++) {
        const dot = new Dot();
        dots.push(dot);
    }
}

/**
 * アニメーション
 */
function animate() {
    // トレイル効果
    // 各フレームで、完全に消去せずに半透明の黒で上書きする
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, w, h);
    // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    // ctx.fillRect(255, 255, w, h);

    // 各ドットの更新と描画
    for (const dot of dots) {
        dot.update();
        dot.draw();
    }

    // 各ドットの間の線を描画
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            // 座標計算
            const deltaX = dots[i].x - dots[j].x;
            const deltaY = dots[i].y - dots[j].y;
            // 距離を計算
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // 距離が100未満なら線を描画
            if (distance < distanceLimit) {
                // 透明度を動的に設定
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
                // 太さを設定
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                // 線を描画
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.stroke();
            }
        }
    }

    // 次のフレームをリクエスト
    requestAnimationFrame(animate);
}

// リサイズイベント
window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
});

// ドットの生成
createDots();
// アニメーション開始
animate();