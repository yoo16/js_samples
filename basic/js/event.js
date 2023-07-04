var userNameElement = document.getElementById('user_name');
var itemElement = document.getElementById('item_name');
var priceElement = document.getElementById('price');
var quantityElement = document.getElementById('quantity');
var messageElement = document.getElementById('message');

function inputUserName() {
    console.log('change!!')
    var userName = userNameElement.value;
    var message = userName + 'さん、いらっしゃい';
    messageElement.innerHTML = message;
}

function order() {
    var itemName = itemElement.innerHTML
    var price = priceElement.innerHTML
    var quantity = quantityElement.value
    var totalPrice = price * quantity
    var message = itemName + "が " + quantity + "つで " + totalPrice + "円です"
    messageElement.innerHTML = message
}