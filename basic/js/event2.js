var messageElement = document.getElementById('message');
var characterElement = document.getElementById('character_name');

var itemElement = document.getElementById('item_name');
var priceElement = document.getElementById('item_price');
var amountElement = document.getElementById('amount');


function inputCharacterName() {
    console.log('change!');

    var character_name = characterElement.value;
    var message = character_name + 'さん、いらっしゃい';
    messageElement.innerHTML = message;
}

function buy() {
    console.log('buy!');

    var itemName = itemElement.textContent;
    var price = priceElement.textContent;
    var amount = amountElement.value;

    var totalPrice = price * amount;
    var message = itemName + 'を' + amount + '個でよいかい？' + totalPrice + 'G だよ';
    messageElement.textContent = message;
}
