var counterElement = document.getElementById('counter');
var interval = 1000;
var timer;
var count;


//カウンター初期化
reset()

function reset() {
    count = 0
    counterElement.innerHTML = count
}

function start() {
    //タイマー削除
    clearInterval(timer)
    //タイマー開始
    timer = setInterval(() => {
        //1増加
        count++;
        //HTML更新
        counterElement.innerHTML = count;
    }, interval)
}

function stop() {
    clearInterval(timer)
}