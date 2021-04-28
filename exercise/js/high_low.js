var result = document.getElementById('result');
var question = document.getElementById('question')
var retry_btn = document.getElementById('retry_btn')
var button_area = document.getElementById('button_area')
var score_display = document.getElementById('score_display');

retry_btn.style.display = 'none';

var question_number = 0;
var result_number = 0;
var score = 0;

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

function initGame() {
    question_number = randomNumber(1, 13)
    question.innerText = question_number

    result.style.display = 'none';
    button_area.style.display = 'block';
}

function checkGame(is_win) {
    console.log(is_win);
    var result_string = (is_win) ? 'Win' : 'Lose';
    var message = result_string + '!! <br>' + result_number;
    result.innerHTML = message;

    result.style.display = 'block';
    button_area.style.display = 'none';
}


function updateScore(is_win, is_draw) {
    if (is_win) {
        if (is_draw) {
            score+= 10;
        } else {
            score+= 1;
        }
    } else {
        score-= 2;
    }
    score_display.innerHTML = score;
}

function showRetry() {
    retry_btn.style.display = 'block';
}

function choiceHigh() {
    result_number = randomNumber(1, 13)
    var is_win = (result_number > question_number);
    checkGame(is_win)
    updateScore(is_win, false);
    showRetry();
}

function choiceLow() {
    result_number = randomNumber(1, 13)
    var is_win = (result_number < question_number);
    checkGame(is_win)
    updateScore(is_win, false);
    showRetry();
}

function choiceDraw() {
    result_number = randomNumber(1, 13)
    var is_win = (result_number == question_number);
    checkGame(is_win)
    updateScore(is_win, true);
    showRetry();
}

initGame();