const reusult = document.getElementById('reusult');
const calculateBtn = document.getElementById('calculateBtn');
const price = document.getElementById('price');
const amount = document.getElementById('amount');

calculate.addEventListener('click', function (event) {
    event.preventDefault();
}, false);

function calculate() {
    var total = price.value * amount.value;
    reusult.innerHTML = total;
}