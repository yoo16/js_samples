/**
 * ビルトイン関数
 */
// parseInt() を使用して文字列を整数に変換する
var numberString = "2024";
var number = parseInt(numberString);
console.log(number);

// Math.max() を使用して最大値を取得
var maxValue = Math.max(1, 5, 10, 3);
console.log(maxValue);

// setTimeout()
setTimeout(() => {
    console.log("実行");
}, 5000);

/**
 * ユーザ定義関数
 */
function calculate(x) {
    var y = x + 5
    return y
}

var answer = calculate(8)
console.log(answer)

answer = calculate(71)
console.log(answer)

/**
 * 合計金額（税込）の計算 
 */
const TAX_RATE = 0.1;
function calculateTotalPrice(price, quantity) {
    var totalPrice = price * quantity * (1 + TAX_RATE);
    // return totalPrice;
    // return totalPrice.toFixed();
    // return Math.floor(totalPrice);
    return Math.round(totalPrice);
}

var totalPrice = calculateTotalPrice(300, 2)
console.log(totalPrice)

var totalPrice = calculateTotalPrice(285, 7)
console.log(totalPrice)


//無名関数
var hello1 = function (name) {
    var message = name + 'さん、いらっしゃい'
    return message
}
var message = hello1('東京　太郎');
console.log(message)


//アロー関数
var hello2 = (name) => {
    var message = name + 'さん、いらっしゃい'
    return message
}
var message = hello2('東京　太郎');
console.log(message)

//HTML の読み込み完了したら実行
window.onload = function () {
    console.log('東京');
}
console.log("横浜")

/**
 * 1 から 6 までの整数をランダムでだす
 */
randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

var number = randomNumber(1, 6);
console.log(number);
