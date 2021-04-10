
var monster = 'スライム';

// Number
var amount = 2;
var price = 1000;
var discount = -100;

var tax_rate = 0.1;
var average = 0.333;
var speed = 45.5;

// Bool
var is_active = true;


//変数の宣言
var hp = 3;
console.log(hp + 1);

hp = 1;
console.log(hp - 2);

hp = 5;
console.log(hp * 3);

hp = 4;
console.log(hp / 5);

$hp = 6;
console.log($hp % 5);

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

new_message += 2020;
console.log(new_message);

/**
 * 単項演算
 */
hp = 5;
++hp;
console.log(hp);

hp = 5;
--hp;
console.log(hp);

/**
 * 複合演算
 */
hp = 10;
hp += 5; // hp に 5 足した結果を hp に代入
console.log(hp);

hp = 10;
hp -= 5; // hp から 5 を引いた結果を hp に代入
console.log(hp);

hp = 10;
hp *= 5; // hp に 5 をかけた結果を hp に代入
console.log(hp);

hp = 10;
hp /= 5; // hp を 5 で割った結果を hp に代入
console.log(hp);

/**
 * 連結
 */
hp = 10;
monster_name = 'スライム';
var status_message = monster_name + 'のHPは' + hp;
console.log(status_message);

var status_message = `${monster_name}のHPは${hp}`;
console.log(status_message);

//単項演算
var message = 'この物語は';
message += 'フィクションです。';
console.log(message);

message+= 2020;
console.log(message);

//右辺から計算
var attack = 10;
hp = 50;
hp = hp - attack;
console.log(hp);


// 変数 price に 数値 300 を代入
var price = 300;
var amount = 5;
var discount = -50;
var tax = 0.1;

var total_price = price * amount;
console.log(total_price);


//論理型（bool）
var is_bool;

hp = 10;
is_bool = (hp == 20);
console.log(is_bool);

hp = 0;
is_bool = (hp < -10);
console.log(is_bool);

hp = 0;
is_bool = (hp > -10);
console.log(is_bool);

hp = 10;
is_bool = (hp >= 10);
console.log(is_bool);

/**
 * 三項演算
 */
 hp = 10;
 var result = (hp <= 20) ? 'ピンチ！' : 'まだ平気';
 console.log(result);

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
