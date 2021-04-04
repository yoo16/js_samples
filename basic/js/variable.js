
//変数の宣言
var value = 3;
console.log(value + 1);

$value = 1;
console.log($value - 2);

$value = 5;
console.log($value * 3);

$value = 4;
console.log($value / 5);

$value = 6;
console.log($value % 5);

/**
 * define string
 */
var message = 'Hello!!';
var title = 'JavaScript';

console.log(message);
console.log(title);

/**
 * concat
 */
var new_message = message + title;
console.log(new_message);

new_message+= 2020;
console.log(new_message);

/**
 * 単項演算
 */
value = 5;
++value;
console.log(value);

value = 5;
--value;
console.log(value);

/**
 * 複合演算
 */
value = 10;
value += 5; // value に 5 足した結果を value に代入
console.log(value);

value = 10;
value -= 5; // value から 5 を引いた結果を value に代入
console.log(value);

value = 10;
value *= 5; // value に 5 をかけた結果を value に代入
console.log(value);

value = 10;
value /= 5; // value を 5 で割った結果を value に代入
console.log(value);

/**
 * literal
 */
var word1 = 'I like';
var word2 = 'Sushi';
message = `${word1} ${word2}`;
console.log(message);

var city_name = '東京';

var number_1 = 1;
var number_2 = 100;
var number_3 = -10;
var number_4 = 2.5;
var number_5 = 0.333;
var number_6 = 3.14;

var is_active = true;

// 変数 price に 数値 300 を代入
var price = 300;
var amount = 5;
var discount = -50;
var tax = 0.1;

var total_price = price * amount;
console.log(total_price);

/**
 * データ型
 */
//文字列
var city_name = '東京';

//数値
number_1 = 1;
number_2 = 100;
number_3 = -10;

//論理型（bool）
var is_bool;

value = 10;
is_bool = (value == 20);
console.log(is_bool);

value = 0;
is_bool = (value < -10);
console.log(is_bool);

value = 0;
is_bool = (value > -10);
console.log(is_bool);

value = 10;
is_bool = (value >= 10);
console.log(is_bool);

var total_price = 0;  //合計金額
var price = 300;    //値段
var amount = 5;     //個数
var discount = 100;  //値引き
var tax = 0.1;      //税率

total_price = price * amount;
total_price-= discount;
total_price*= (1 + tax);
console.log(total_price.toFixed());