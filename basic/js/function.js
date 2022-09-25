function calculate(x) {
    var y = x + 5
    return y
}

var answer = calculate(8)
console.log(answer)

answer = calculate(71)
console.log(answer)

/**
 * 合計金額の計算 
 */
function totalPrice(price, amount) {
    var tax_rate = 0.1
    var total_price = price * amount * (1 + tax_rate);
    // return total_price;
    // return total_price.toFixed();
    // return Math.floor(total_price);
    return Math.round(total_price);
}

var result = totalPrice(300, 27)
console.log(result)

result = totalPrice(381, 29)
console.log(result)


function showMessage(total_price)
{
    var message = '合計金額は' + total_price + '円です';
    console.log(message)
}

showMessage(result)


//無名関数
var hello = function(name) {
    var message = name + 'さん、いらっしゃい'
    return message
}
console.log(hello('ヒーロー'))


//アロー関数
var hello2 = (name) => {
    var message = name + 'さん、いらっしゃい'
    return message
}
console.log(hello2('ヒーロー'))

//HTML の読み込み完了したら実行
window.onload = function() {
    console.log('東京');
}
console.log('横浜')

/**
 * 1 から 6 までの整数をランダムでだす
 */
randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return number;
}

var number = randomNumber(1, 6)
console.log(number);
