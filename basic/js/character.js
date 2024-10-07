var character = document.getElementById('character');
var messageElement = document.getElementById('message');

character.style.position = 'absolute';

var timer;
const interval = 100;
const step = 10

function start() {
    var x = 0;
    var count = 0;
    clearInterval(timer)
    timer = setInterval(() => {
        count++
        x = step * count
        character.style.left = x + 'px'
    }, interval)
}

function stop() {
    clearInterval(timer)
}

function showPlot() {
    var rect = character.getBoundingClientRect();
    var message = `(top, left) = (${rect.top}, ${rect.left})`;
    messageElement.innerText = message;
}

function hidePlot() {
    messageElement.innerText = 'キャラクターをマウスオーバーしてください';
}