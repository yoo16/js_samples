function calculate(x) {
    y = x + 5;
    return y;
}
var answer = calculate(3)
console.log(answer)

answer = calculate(8)
console.log(answer)

//合計金額計算
function totalPrice(price, amount) {
    const tax = 1.1;
	var total_price = price * amount * tax;
    return total_price;
}
var total_price = totalPrice(200, 5);
console.log(total_price);

//無名関数
const hello = function (name) {
    return name + 'さん、いらっしゃい！';
}
var message = hello('ヒーロー');
console.log(message);

//アロー関数
const hello2 = (name) => {
    return name + 'さん、いらっしゃい！';
}
message = hello2('ヒーロー');
console.log(message);


//ランダム
function randomNumber(min, max) {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max - min)) + min
    return number;
}
console.log(randomNumber(1, 6))