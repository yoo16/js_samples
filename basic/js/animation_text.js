// 1文字ずつフェードインしながらテキストを表示する関数
function displayTextOneByOne(elementId, text, delay = 100) {
    var index = 0;

    function displayNextChar() {
        const outputElement = document.getElementById(elementId);

        const span = document.createElement('span');
        span.textContent = text[index];
        span.classList.add('fade-in');
        outputElement.appendChild(span);

        index++;
        if (index < text.length) {
            setTimeout(displayNextChar, delay);
        }
    }

    displayNextChar();
}

var message = "世界を変える一杯のコーヒー";
// テキストを1文字ずつフェードイン表示
displayTextOneByOne('output', message, 200);
