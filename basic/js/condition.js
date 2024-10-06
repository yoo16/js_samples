// 変数・定数定義
const TAX_RATE = 0.1;
var name = "コーヒー";
var price = 500;
var quantity = 2;
var isMember = true;
var discount = (isMember) ? 100 : 0;
var totalPrice = 0;
var money = 1000;  //値を変えてみる
var message = "";

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

/**
 * 会員ステータス
 */
function memberStatus() {
    if (isMember) {
        document.getElementById('member-status').innerHTML = "会員";
    }
}

/**
 * 支払い処理
 */
function pay() {
    var message = "決済中...";
    if (price <= 0) {
        message = "金額エラー";
    } else if (money >= totalPrice) {
        message = "支払い完了";
    } else {
        message = "残高不足";
    }
    document.getElementById('status').innerHTML = message;
}

// オーダー完了処理
document.getElementById('status').innerHTML = "Loading..."
setTimeout(() => {
    document.getElementById('status').innerHTML = "オーダーが完了しました"

    var tableNo = randomNumber(1, 10);
    var orderNo = randomNumber(1000, 10000);
    var orderCode = createOrderCode(tableNo, orderNo);
    document.getElementById('order-code').innerHTML = orderCode;

    // 支払い
    pay();
}, 2000);


// メンバーステータス
memberStatus();

// オーダー
order(name, price, quantity);

// 合計金額
totalPrice = calculateTotalPrice(price, quantity, discount);

document.getElementById('discount').innerHTML = -discount;
document.getElementById('totalPrice').innerHTML = totalPrice;
