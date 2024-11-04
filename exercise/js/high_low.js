var resultDisplay = document.getElementById('result');
var myNumberDisplay = document.getElementById('my-number');
var pcNumberDisplay = document.getElementById('pc-number')
var retryBtn = document.getElementById('retry-btn')
var selectButtonArea = document.getElementById('select-button-area')
var scoreDisplay = document.getElementById('score-display');

var pcNumber = 0;
var myNumber = 0;
var score = 0;
var isWin = false;
var isDraw = false;

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

function initGame() {
    isWin = false;
    isDraw = false;

    // PCのカードをランダムで取得
    pcNumber = randomNumber(1, 13);
    pcNumberDisplay.innerHTML = pcNumber;

    resultDisplay.style.display = 'none';
    retryBtn.style.display = 'none';
    selectButtonArea.style.display = 'flex';

    // 全てのボタンを表示
    document.getElementById('low-btn').style.display = 'inline';
    document.getElementById('draw-btn').style.display = 'inline';
    document.getElementById('high-btn').style.display = 'inline';
}

function checkGame() {
    resultDisplay.innerHTML = (isWin) ? 'Win' : 'Lose';
    myNumberDisplay.innerHTML = myNumber;

    resultDisplay.style.display = 'block';
    selectButtonArea.style.display = 'flex';
    retryBtn.style.display = 'block';

    updateScore(isWin, true);
}

function updateScore(isWin, isDraw) {
    if (isWin) {
        score += isDraw ? 10 : 1;
    } else {
        score -= 2;
    }
    scoreDisplay.innerHTML = score;
}

function choiceHigh() {
    myNumber = randomNumber(1, 13);
    isWin = (myNumber > pcNumber);
    checkGame();
    hideButtonsExcept('high-btn');
}

function choiceLow() {
    myNumber = randomNumber(1, 13);
    isWin = (myNumber < pcNumber);
    checkGame();
    hideButtonsExcept('low-btn');
}

function choiceDraw() {
    myNumber = randomNumber(1, 13);
    isWin = (myNumber == pcNumber);
    checkGame();
    hideButtonsExcept('draw-btn');
}

function hideButtonsExcept(selectedButtonId) {
    document.getElementById('low-btn').style.display = selectedButtonId === 'low-btn' ? 'inline' : 'none';
    document.getElementById('draw-btn').style.display = selectedButtonId === 'draw-btn' ? 'inline' : 'none';
    document.getElementById('high-btn').style.display = selectedButtonId === 'high-btn' ? 'inline' : 'none';
}

initGame();
