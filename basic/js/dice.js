var titleElement = document.getElementById("title");
var messageElement = document.getElementById("message");

console.log(titleElement);
console.log(messageElement);

titleElement.innerText = 'DICE';

// id取得
console.log(titleElement.id);
// id設定
titleElement.id = "dice-title";

// class取得
console.log(titleElement.className);

// class設定
titleElement.className = "text-red-500 text-4xl font-bold mb-4";

/**
 * ランダムな整数
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (max + 1 - min) + min
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

/**
 * サイコロを振る関数
 */
const rollDice = () => {
    var number = randomNumber(1, 6);
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = number;

    messageElement.innerHTML = '<p class="text-green-800">サイコロをふりました！</p>';
    // messageElement.innerText = '<p class="text-green-800">サイコロをふりました！</p>';

    resultElement.dataset.number = number;
}

// サイコロの実行
rollDice();
