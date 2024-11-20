// タイマー変数
var timer = null;
// 残り時間
var timeRemaining = 0;

// DOM要素を取得
const counterDisplay = document.getElementById('counter');
const timeInput = document.getElementById('timeInput');

// タイマーを更新する関数
function updateDisplay() {
    counterDisplay.textContent = timeRemaining;
}

// タイマーをスタートする関数
function start() {
    // タイマーが動いていない状態かつ残り時間がある場合のみ開始
    if (!timer && timeRemaining > 0) {
        timer = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateDisplay();
            }
            if (timeRemaining === 0) {
                stop();
                // タイマー終了時のアラート
                alert("Time's up!");
            }
        }, 1000);
    }
}

// タイマーをストップする関数
function stop() {
    clearInterval(timer);
    timer = null;
}

// タイマーをリセットする関数
function reset() {
    stop();
    // 時間をリセット
    timeRemaining = 0; 
    updateDisplay();
    // 入力フィールドもクリア
    timeInput.value = ''; 
}

// 入力された値でタイマーを設定する関数
function setTimer() {
    const inputSeconds = parseInt(timeInput.value, 10);
    if (!isNaN(inputSeconds) && inputSeconds > 0) {
        timeRemaining = inputSeconds;
        updateDisplay();
    } else {
        alert("0以上の数字を入力してください。");
    }
}

// 初期値を表示
updateDisplay();