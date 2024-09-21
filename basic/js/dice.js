/**
 * ランダムな整数
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