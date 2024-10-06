//変数の宣言
var price = 500;
price = price + 200;
console.log(price);

price = 500;
price = price - 200;
console.log(price);

price = 500;
price = price * 2;
console.log(price);

price = 500;
price = price / 2;
console.log(price);

price = 500;
price = price % 3;
console.log(price);

/**
 * 単項演算
 */
var quantity = 1;
quantity++;
console.log(quantity);

quantity--;
console.log(quantity);

/**
 * 複合演算
 */
var price = 500;
price += 50;
console.log(price);

price -= 50;
console.log(price);

price *= 2;
console.log(price);

price /= 2;
console.log(price);

/**
 * 注文の計算
 */
var name = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
const TAX_RATE_1 = 0.1;
var totalPrice = (price * quantity - discount) * (1 + TAX_RATE_1);

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

/**
 * 計算
 */
var totalPrice = 0;  //合計金額
var price = 300;    //値段
var quantity = 5;     //個数
var discount = 100;  //値引き
var TAX_RATE = 0.1;      //税率

totalPrice = price * quantity;
totalPrice -= discount;
totalPrice *= (1 + TAX_RATE);
console.log(totalPrice.toFixed());
