// オーダーアプリ
const TAX_RATE = 0.1;
var itemName = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
var totalPrice = 0;
var tableNo = 1;

/**
 * showHTML()
 * HTML表示
 * @param {*} id 
 * @param {*} value 
 */

function showHTML(id, value) {
    document.getElementById(id).innerHTML = value;
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
function createOrderCode(tableNo) {
    var orderNo = randomNumber(1, 1000);
    var orderCode = tableNo + "-" + orderNo;
    return orderCode;
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
const formatDate = function (year, month, day) {
    return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
};

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

showHTML('item-name', itemName);
showHTML('price', price);
showHTML('quantity', quantity);

// 合計金額
totalPrice = calculateTotalPrice(price, quantity, discount);

// HTML表示（割引、合計金額）
showHTML('discount', discount);
showHTML('totalPrice', totalPrice);

// オーダー完了処理
setTimeout(() => {
    showHTML('status', "オーダー完了");

    var orderCode = createOrderCode(tableNo);
    showHTML('order-code', orderCode);

    // 日付表示
    // var date = formatDate(2024, 10, 6);
    // showHTML('order-at', date);
}, 2000);
