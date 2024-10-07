// タイトルの設定
var titleElement = document.getElementById("title");
var messageElement = document.getElementById("message");
var diceElement = document.getElementById("dice");
var number = 1;

// タイトルと初期メッセージの設定
titleElement.innerText = 'DICE';
messageElement.innerHTML = 'サイコロをふってください！';

/**
 * ランダムな整数を生成
 */
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

/**
 * サイコロの画像を切り替える関数
 */
const updateDiceImage = (number) => {
    var resultElement = document.getElementById("result");
    resultElement.src = `./images/dice${number}.png`;
};

/**
 * サイコロを振る関数
 */
const rollDice = () => {
    console.log("Click!");

    // サイコロが振られている間、画像をランダムに変更(0.05秒インターバル）
    const interval = setInterval(() => {
        number = randomNumber(1, 6);
        updateDiceImage(number);
    }, 50);

    // アニメーション開始
    diceElement.classList.add("rolling");

    // ２秒後にサイコロを止める
    setTimeout(() => {
        // タイマー停止
        clearInterval(interval);

        // アニメーション終了
        diceElement.classList.remove("rolling");

        // メッセージ更新
        messageElement.innerHTML = "サイコロをふりました！";
    }, 2000);
};

// ウィンドウ読み込み完了後に実行
window.onload = () => {
    // ローディングを非表示
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
}