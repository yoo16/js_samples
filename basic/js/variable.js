
// ダブルクオーテーション​
var name = "コーヒー";
console.log(name);
document.getElementById('name').innerHTML = name;

// シングルクォーテーション​
// 再代入
name = '紅茶';
document.getElementById('name').innerHTML = name;

// Number
var price = 500;
var quantity = 2;
var discount = 100;
console.log(quantity, price, discount);

document.getElementById('price').innerHTML = price;
document.getElementById('quantity').innerHTML = quantity;
document.getElementById('discount').innerHTML = -discount;


var average = 0.333
var speed = 45.5
console.log(average);
console.log(speed);

// Bool
var is_active = true;
console.log(is_active);

name = "コーヒー";
var message = `${name}の価格：${price}円`;
console.log(message);

// 定数
const TAX_RATE = 0.1;
const TOKYO = "東京";

console.log(TAX_RATE);
console.log(TOKYO);

// エラー
TAX_RATE = 0.08;