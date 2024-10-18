// ダブルクオーテーション​
var itemName = "コーヒー";
// 数値
var price = 500;
var quantity = 2;
var discount = 100;

// 再代入
itemName = '紅茶';

// コンソール表示
console.log(itemName);
console.log(quantity, price, discount);

// HTML表示
document.getElementById('item-name').innerHTML = itemName;
document.getElementById('price').innerHTML = price;
document.getElementById('quantity').innerHTML = quantity;
document.getElementById('discount').innerHTML = discount;

// 定数
const TAX_RATE = 0.1;
const TOKYO = "東京";

console.log(TAX_RATE);
console.log(TOKYO);

// エラー
TAX_RATE = 0.08;

var average = 0.333
var speed = 45.5
console.log(average);
console.log(speed);

// Bool
var is_active = true;
console.log(is_active);

var message = `${itemName}の価格：${price}円`;
console.log(message);