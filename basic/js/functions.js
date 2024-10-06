// オーダーアプリ
const TAX_RATE = 0.1;
var name = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
var totalPrice = 0;

/**
 * order()
 * オーダー表示
 * 
 * @param {*} name 
 * @param {*} price 
 * @param {*} quantity 
 */
function order(name, price, quantity) {
    document.getElementById('name').innerHTML = name;
    document.getElementById('price').innerHTML = price;
    document.getElementById('quantity').innerHTML = quantity;
}

/**
 * calculateTotalPrice()
 * 合計金額（税込）の計算 
 * 
 * @param {*} price 
 * @param {*} quantity 
 * @param {*} discount 
 * @returns 
 */
function calculateTotalPrice(price, quantity, discount) {
    var totalPrice = (price * quantity - discount) * (1 + TAX_RATE);
    return totalPrice.toFixed();
}

/**
 * createOrderCode()
 * オーダーコード生成
 * 
 * @param {*} tableNo 
 * @param {*} orderNo 
 * @returns 
 */
function createOrderCode(tableNo, orderNo) {
    var orderCode = tableNo + "-" + orderNo;
    return orderCode;
}

/**
 * randomNumber()
 * ランダムな整数
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

/**
 * formatDate()
 * 年月日生成
 * 
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 * @returns 
 */
const formatDate = function(year, month, day) {
    return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
};


// オーダー
order(name, price, quantity);

// 合計金額
totalPrice = calculateTotalPrice(price, quantity, discount);

// HTML表示（割引、合計金額）
document.getElementById('discount').innerHTML = -discount;
document.getElementById('totalPrice').innerHTML = totalPrice;

// オーダー完了処理
document.getElementById('status').innerHTML = "Loading..."
setTimeout(() => {
    document.getElementById('status').innerHTML = "オーダーが完了しました"

    var tableNo = randomNumber(1, 10);
    var orderNo = randomNumber(1000, 10000);
    var orderCode = createOrderCode(tableNo, orderNo);
    document.getElementById('order-code').innerHTML = orderCode;
}, 2000);


var date = formatDate(2024, 10, 6);
document.getElementById('orderAt').innerHTML = date;
