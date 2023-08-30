document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById('calculate-btn');
    calculateBtn.addEventListener('click', function (event) {
        const price = document.getElementById('price').value;
        const quantity = document.getElementById('quantity').value;

        const result = document.getElementById('result');
        var message = "入力が間違っています";
        if (!isNaN(price) && !isNaN(quantity)) {
            const totalPrice = price * quantity;
            message = "合計金額は" + totalPrice + "円です。";
        }
        result.innerHTML = message;
        event.preventDefault();
    }, false);

    //counter
    var count = 0;
    const countBtn = document.getElementById('count-btn');
    const removeBtn = document.getElementById('remove-btn');
    const countHandler = function () {
        document.getElementById('count').innerHTML = count++
    }
    countBtn.addEventListener('click', countHandler);

    removeBtn.addEventListener('click', function () {
        countBtn.removeEventListener('click', countHandler)
        document.getElementById('count').innerHTML = "イベントを停止しました"
    });

    const mouseArea = document.getElementById('mouse-area')
    mouseArea.addEventListener('mouseover', function (event) {
        this.innerHTML = 'マウスオーバー'
    })
    mouseArea.addEventListener('mouseout', function (event) {
        this.innerHTML = 'マウスアウト'
    })

    const mouseMoveArea = document.getElementById('mouse-move-area')
    mouseMoveArea.addEventListener('mousemove', function (event) {
        var message = `(x, y) = (${event.pageX} ${event.pageY})`
        this.innerHTML = message
    })

    keydownEvent = (event) => {
        console.log(event.keyCode)
        document.getElementById('keycode-area').innerHTML = event.keyCode;
    }
    document.addEventListener('keydown', keydownEvent);
});

