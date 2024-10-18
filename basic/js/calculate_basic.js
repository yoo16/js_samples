/**
 * 二項演算
 */
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
 * 計算
 */
var totalPrice = 0;  //合計金額
var price = 300;    //値段
var quantity = 5;     //個数
var discount = 100;  //値引き
const TAX_RATE = 0.1;      //税率

totalPrice = price * quantity;
totalPrice -= discount;
totalPrice *= (1 + TAX_RATE);
console.log(totalPrice.toFixed());