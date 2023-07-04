var itemElement = document.getElementById('item_name');
var priceElement = document.getElementById('price');
var messageElement = document.getElementById('message');
var price = priceElement.textContent;

messageElement.innerHTML = '<span>いらっしゃい</span>';

/**
 * ランダムな整数をブラウザ表示
 */
function randomNumber(min, max) {
    //(0 - 1 のランダム) * (max + 1 - min) + min
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

var titleElement = document.getElementById("title")
titleElement.innerHTML = 'DICE'

var number = randomNumber(1, 6)
var resultElement = document.getElementById("result")
resultElement.innerHTML = number;