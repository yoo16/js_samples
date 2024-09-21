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
var amount = 1;
amount++;
console.log(amount);

amount--;
console.log(amount);

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
 * テキスト連結
 */
var drink = "コーヒー";
var message = drink + "の価格：" + price + "円";
console.log(message);

message += "\n";
message += "支払い方法を選択してください。";

console.log(message);

/**
 * テンプレートリテラル
 */
const POINT_RATE = 0.01;
var point = price * POINT_RATE;
var message = `ポイント： ${point}pt`;

console.log(message);

// 変数 price に 数値 300 を代入
var price = 300;
var amount = 5;
var discount = -50;
var tax = 0.1;

var total_price = price * amount;
console.log(total_price);

/**
 * 計算
 */
var total_price = 0;  //合計金額
var price = 300;    //値段
var amount = 5;     //個数
var discount = 100;  //値引き
var tax = 0.1;      //税率

total_price = price * amount;
total_price -= discount;
total_price *= (1 + tax);
console.log(total_price.toFixed());
