var messageElement = document.getElementById('message');

function add() {
    messageElement.classList.add("active");
}

function remove() {
    messageElement.classList.remove("active");
}

function toggle() {
    messageElement.classList.toggle("active");
}

function replace() {
    messageElement.classList.replace("message", "frame");
}

function over(element) {
    element.style.background = 'darkseagreen';
    element.style.border = '1px solid white';
}

function out(element) {
    element.style.background = 'none';
    element.style.border = '1px solid darkcyan';
}

var element = document.getElementById('alert');
element.style.background = '#ff0000';
element.style.color = '#ffffff';
element.style.border = '1px solid #ff0000';
element.style.padding = '10px';
element.style.width = '50px';

var comment = document.createElement('p');
comment.innerHTML = 'スタイルをテキストで指定しました';
comment.style.cssText = "border: 2px solid darkgray; font-weight: 600; padding: 10px;";

document.getElementById('display').appendChild(comment);