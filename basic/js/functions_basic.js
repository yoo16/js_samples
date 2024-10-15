/**
 * ビルトイン関数
 */
// parseInt() : 文字列を整数に変換
var numberString = "0005";
var number = parseInt(numberString);
// Number() : 文字列を数値に変換
// var number = Number(numberString);

console.log(numberString);
console.log(number);

var result = isNaN("コーヒー");
console.log(result);

var result = isNaN("0005");
console.log(result);

var result = isNaN(5);
console.log(result);

var height = 169.5;
var result = Math.round(height);
console.log(result);

var result = Math.ceil(height);
console.log(result);

var result = Math.floor(height);
console.log(result);


// Math.max() を使用して最大値を取得
var maxValue = Math.max(1, 5, 10, 3);
console.log(maxValue);


/**
 * ユーザ定義関数
 */
function calculate(x) {
    var y = x + 5
    return y
}

var answer = calculate(8)
console.log(answer)

answer = calculate(71)
console.log(answer)


//無名関数
var hello1 = function (name) {
    var message = name + 'さん、いらっしゃい'
    return message
}
var message = hello1('東京　太郎');
console.log(message)

//アロー関数
var hello2 = (name) => {
    var message = name + 'さん、いらっしゃい'
    return message
}
var message = hello2('東京　太郎');
console.log(message)

//HTML の読み込み完了したら実行
window.onload = function () {
    console.log('東京');
}
console.log("横浜")