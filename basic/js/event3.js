
var counterElement = document.getElementById('counter');
var time = 1000;
var timer;
function start() {
    var count = 0;
    clearInterval(timer)
    timer = setInterval(function () {
        count++;
        counterElement.innerHTML = count;
    }, time)
}

function stop() {
    clearInterval(timer)
    counterElement.innerHTML = 0;
}

var character = document.getElementById('character');
character.style.position = 'absolute';

var moveTime = 100;
var characterTimer;
function startCharacter() {
    var count = 0;
    clearInterval(timer)
    timer = setInterval(function () {
        count++;
        var left = count + 'px';
        character.style.left = left;
    }, moveTime)
}

function stopCharacter() {
    clearInterval(timer)
}

var messageElement = document.getElementById('message')
function mouseOver() {
    var rect = character.getBoundingClientRect();
    var message = `(top, left) = (${rect.top}, ${rect.left})`;
    messageElement.innerText = message;
}
function mouseOut() {
    messageElement.innerText = 'キャラクターをマウスオーバーしてください';
}