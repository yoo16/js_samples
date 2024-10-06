var result;
var price = 500;
result = (price == 500);
console.log(result);

result = (price < 0);
console.log(result);

result = (price > 500);
console.log(result);

result = (price >= 500);
console.log(result);

/**
 * 条件分岐
 */
var message = "";
var totalPrice = 500;  //値を変えてみる
var money = 1000;  //値を変えてみる

if (totalPrice <= 0) {
    // priceが0以下の時
    message = "価格エラー";
} else if (money >= totalPrice) {
    message = "支払い完了";
} else {
    message = "残高不足";
}
console.log(message);

result = (totalPrice <= 500);

/**
 * 三項演算
 */
message = (totalPrice <= money) ? '支払い完了' : '残高不足';


**
 * switch
 */
var weekday = '水';
var type = '';

switch (weekday) {
    case '月':
        type = '燃えるゴミ';
        break;
    case '水':
        type = '燃えないゴミ';
        break;
    default:
        type = '回収なし';
        break;
}
console.log(weekday);
console.log(type);


/**
 * スコア評定
 */
var score = 85;
var rank = "";

// スコアに基づく評価
if (score >= 90) {
    rank = "A";
} else if (score >= 80) {
    rank = "B";
} else if (score >= 70) {
    rank = "C";
} else if (score >= 60) {
    rank = "D";
} else {
    rank = "F";
}

var message = `評定: ${rank}`;
console.log(message);

/**
 * 会員割引
 */
var price = 12000;
// 会員ステータス (true: 会員, false: 非会員)
var isMember = true;
var MEMBER_RATE = 0.95;
var SPECIAL_RATE = 0.95;

// 割引の計算
if (isMember) {
    console.log("- 会員")
    price *= MEMBER_RATE;
}
if (price >= 10000) {
    console.log("- 10000円以上お買い上げ")
    price *= SPECIAL_RATE;
}

var message = `金額: ${price}円`;
console.log(message);

/**
 * ゴミ分別
 */
var today = new Date();
// 0:日曜日, 1:月曜日, ..., 6:土曜日
var dayOfWeek = today.getDay();
var message = "";

// 曜日に応じたゴミの日を判別
switch (dayOfWeek) {
    case 1: // 月曜日
    case 5: // 金曜日
        message = "今日は燃えるゴミの日です。";
        break;
    case 3: // 水曜日
        message = "今日は燃えないゴミの日です。";
        break;
    default:
        message = "今日はゴミの日ではありません。";
}
console.log(message);