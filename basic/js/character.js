var character = document.getElementById('character');
var messageElement = document.getElementById('message');

character.style.position = 'absolute';

var timer;
const interval = 100;
const step = 10;
var x = 0;
var count = 0;
var direction = 1;

function start() {
    clearInterval(timer);
    timer = setInterval(() => {
        count++;
        x += step * direction;
        character.style.left = x + 'px';

        // Get the width of the screen and the character
        var screenWidth = window.innerWidth;
        var characterWidth = character.offsetWidth;

        // Reverse direction when reaching the screen edges
        if (x + characterWidth >= screenWidth || x <= 0) {
            direction *= -1;  // Reverse direction
        }
    }, interval);
}

function stop() {
    clearInterval(timer);
}

function showPlot() {
    var rect = character.getBoundingClientRect();
    var message = `(top, left) = (${rect.top}, ${rect.left})`;
    messageElement.innerText = message;
}

function hidePlot() {
    messageElement.innerText = 'キャラクターをマウスオーバーしてください';
}

// Optional: Start moving the character on page load
start();
