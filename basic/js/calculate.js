// 変数・定数定義
var name = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
const TAX_RATE = 0.1;

// １増やす
quantity++;

var totalPrice = (price * quantity - discount) * (1 + TAX_RATE);

// 四捨五入
totalPrice = totalPrice.toFixed();
// totalPrice = Math.round(totalPrice);
// 小数点切り上げ
// totalPrice = Math.ceil(totalPrice);

document.getElementById('name').innerHTML = name;
document.getElementById('price').innerHTML = price;
document.getElementById('quantity').innerHTML = quantity;
document.getElementById('discount').innerHTML = discount;
document.getElementById('totalPrice').innerHTML = totalPrice;

/**
 * テキスト連結
 */
var tableNo = 3;
var orderNo = 20341;
var orderCode = tableNo + "-" + orderNo;
document.getElementById('order-code').innerHTML = orderCode;

/**
 * テンプレートリテラル
 */
var orderCode = `${tableNo}-${orderNo}`;
document.getElementById('order-code').innerHTML = orderCode;