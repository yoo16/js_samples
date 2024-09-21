var itemElement = document.getElementById('item_name');
var priceElement = document.getElementById('price');
var quantityElement = document.getElementById('quantity');
var messageElement = document.getElementById('message');

var itemName = "Ice Coffee";
var price = 3.5;

itemElement.innerText = itemName;
priceElement.innerText = `$ ${price}`;

var quantity = quantityElement.dataset.quantity;
console.log(quantity)
quantityElement.innerText = `x ${quantity}`;

var totalPrice = price * quantity;
messageElement.innerHTML = `<span class="font-bold">Total: $ ${totalPrice}</span>`;