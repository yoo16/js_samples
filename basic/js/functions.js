

/**
 * ビルトイン関数
 */
// parseInt() : 文字列を整数に変換
var numberString = "2024";
var number = parseInt(numberString);
// Number() : 文字列を数値に変換
// var number = Number(numberString);

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

// オーダーアプリ
const TAX_RATE = 0.1;
var name = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
var totalPrice = 0;

/**
 * オーダー表示
 */
function order(name, price, quantity) {
    document.getElementById('name').innerHTML = name;
    document.getElementById('price').innerHTML = price;
    document.getElementById('quantity').innerHTML = quantity;
}

/**
 * 合計金額（税込）の計算 
 */
function calculateTotalPrice(price, quantity, discount) {
    var totalPrice = (price * quantity - discount) * (1 + TAX_RATE);
    return totalPrice.toFixed();
}

/**
 * オーダーコード
 */
function createOrderCode(tableNo, orderNo) {
    var orderCode = tableNo + "-" + orderNo;
    return orderCode;
}

/**
 * ランダムな整数
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

// オーダー
order(name, price, quantity);

// 合計金額
totalPrice = calculateTotalPrice(price, quantity, discount);

document.getElementById('discount').innerHTML = -discount;
document.getElementById('totalPrice').innerHTML = totalPrice;

// // オーダー完了処理
document.getElementById('status').innerHTML = "loading..."
setTimeout(() => {
    document.getElementById('status').innerHTML = "オーダーが完了しました"

    var tableNo = randomNumber(1, 10);
    var orderNo = randomNumber(1000, 10000);
    var orderCode = createOrderCode(tableNo, orderNo);
    document.getElementById('order-code').innerHTML = orderCode;
}, 2000);


// 年月日
const formatDate = function(year, month, day) {
    return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
};

var date = formatDate(2024, 10, 6);
document.getElementById('orderAt').innerHTML = date;
