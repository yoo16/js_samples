var itemElement = document.getElementById('item_name');
var priceElement = document.getElementById('price');
var amountElement = document.getElementById('amount');
var messageElement = document.getElementById('message');
var buyBtn = document.getElementById('buyBtn');

message.textContent = 'いらっしゃい';
buyBtn.addEventListener('click', function () {
    var itemName = itemElement.textContent;
    var price = priceElement.textContent;
    var amount = amountElement.value;

    var totalPrice = price * amount;
    var message = itemName + 'を' + amount + '個でよいかい？' + totalPrice + 'G だよ';
    messageElement.textContent = message;
})
