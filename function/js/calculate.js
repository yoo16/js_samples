/**
 * 
 * @param {Number} x 
 * @returns Number
 */
function calculate(x) {
    y = x + 5;
    return y;
}

var answer = calculate(2);
console.log(answer);

/**
 * 
 * @param {Number} price 
 * @param {Number} amount 
 * 
 * @returns Number
 */
function totalPrice(price, amount) {
    const tax = 1.1;
    var value = price * amount * tax;
    return value;
}
var total_price = totalPrice(200, 5);
console.log(total_price);


/**
 * 
 * @param {String} name 
 * @returns String
 */
const hello = function (name) {
    return name + ' さん、こんにちは！';
}

var message = hello('Yokohama');
console.log(message);

const hello2 = (name) => {
    return name + ' さん、こんにちは！';
}

message = hello2('Tokyo');
console.log(message);

window.onload = function () {
    console.log("ページ読み込み完了");
};

window.onload = () => {
    console.log("ページ読み込み完了");
};

function calculateArea(radius) {
    var area = radius * radius * Math.PI;
    return area;
}

var area = calculateArea(3);
console.log(area);