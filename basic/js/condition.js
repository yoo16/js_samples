const TAX_RATE = 0.1;
var money = 1000;  //所持金: 値を変えてみる
var itemName = "コーヒー";
var price = 500;
var quantity = 2;
var isMember = true;  // 会員: 値を変えてみる
// 会員の場合、割引100
var discount = (isMember) ? 100 : 0;
var totalPrice = 0;
var tableNo = 1;
var message = "";

/**
 * showHTML()
 * HTML表示
 */
function showHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}

/**
 * calculateTotalPrice()
 * 合計金額（税込）の計算 
 */
function calculateTotalPrice(price, quantity, discount) {
    var totalPrice = (price * quantity - discount) * (1 + TAX_RATE);
    return totalPrice.toFixed();
}

/**
 * createOrderCode()
 * オーダーコード生成
 */
function createOrderCode(tableNo) {
    var orderNo = randomNumber(1, 1000);
    var orderCode = tableNo + "-" + orderNo;
    return orderCode;
}

/**
 * formatDate()
 * 年月日生成
 */
const formatDate = function (year, month, day) {
    return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
};

/**
 * randomNumber()
 * ランダムな整数
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

/**
 * order()
 * オーダー
 */
function order() {
    var orderCode = createOrderCode(tableNo);
    showHTML('order-code', orderCode);

    // 日付表示
    var date = formatDate(2024, 10, 6);
    showHTML('order-at', date);

    showHTML('status', "オーダー完了");
}

/**
 * pay()
 * 支払い処理
 */
function pay() {
    var message = "決済中...";
    if (totalPrice  <= 0) {
        message = "金額エラー";
    } else if (money >= totalPrice) {
        message = "支払い完了";
    } else {
        message = "残高不足";
    }
    showHTML('status', message)
}

// 商品情報
showHTML('item-name', itemName);
showHTML('price', price);
showHTML('quantity', quantity);

// メンバーステータス
if (isMember) {
    showHTML('member-status', "会員");
}

// 合計金額
totalPrice = calculateTotalPrice(price, quantity, discount);

// 会員の場合、割引価格表示
showHTML('discount', discount);

// 合計金額表示
showHTML('totalPrice', totalPrice);

// オーダー
setTimeout(order, 2000);
// 決済
setTimeout(pay, 5000);