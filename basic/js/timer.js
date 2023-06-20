
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