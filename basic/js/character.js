var character = document.getElementById('character');
var messageElement = document.getElementById('message');

// 初期設定
var x = 0; // X軸位置
var y = 0; // Y軸位置
var step = 2; // 移動量
var keys = {}; // 押されているキーを追跡
var isAnimating = false;

function animate() {
    // 上下左右のキーが押されている場合に移動
    if (keys["ArrowUp"]) {
        y -= step;
    }
    if (keys["ArrowDown"]) {
        y += step;
    }
    if (keys["ArrowLeft"]) {
        x -= step;
    }
    if (keys["ArrowRight"]) {
        x += step;
    }

    // キャラクターの位置を更新
    character.style.transform = `translate(${x}px, ${y}px)`;

    // 次のフレームをリクエスト
    if (isAnimating) {
        requestAnimationFrame(animate);
    }
}

function startAnimation() {
    if (!isAnimating) {
        isAnimating = true;
        animate(); // アニメーションを開始
    }
}

function stopAnimation() {
    isAnimating = false; // アニメーションを停止
}

// キーが押されたときの処理
function handleKeyDown(event) {
    // 押されたキーを記録
    keys[event.key] = true;
    // アニメーションを開始
    startAnimation();
}

// キーが離されたときの処理
function handleKeyUp(event) {
    // 離されたキーを記録
    keys[event.key] = false;
    // 全てのキーが離されたらアニメーションを停止
    if (!keys["ArrowUp"] && !keys["ArrowDown"] && !keys["ArrowLeft"] && !keys["ArrowRight"]) {
        stopAnimation();
    }
}

// イベントリスナーを設定
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);