
var hp = 10
var attack = 10;
var message = '';
hp -= attack;
if (hp > 0) {
    message = 'モンスターの攻撃';
} else {
    message = 'モンスターを倒した';
}
console.log(message);

var distance = 3;
var action = '';
if (distance < 1) {
    action = '徒歩';
} else if (distance >= 1 && distance < 5) {
    action = '自転車';
} else {
    action = '電車';
}
console.log(action);

var weekday = '水';
var type = '';
switch (weekday) {
    case '月':
        type = '燃えるゴミ';
        break;
    case '水':
        type = '燃えないゴミ';
        break;
    default:
        type = '回収なし';
        break;
}
console.log(weekday);
console.log(type);


var item_name = '鉄のかぶと';
var type = '';
switch (item_name) {
    case "銅のつるぎ":
    case "鉄のやり":
    case "こんぼう":
        type = "武器";
        break;
    case "皮のたて":
    case "鉄のかぶと":
    case "銀のよろい":
        type = "防具";
        break;
    case "やくそう":
    case "どくけしそう":
        type = "道具";
        break;
    default:
        type = "その他";
        break;
}
console.log(type)


var messageElement = document.getElementById('message');
var characterElement = document.getElementById('character_name');
var moneyElement = document.getElementById('character_moeny');

var itemElement = document.getElementById('item_name');
var priceElement = document.getElementById('item_price');
var amountElement = document.getElementById('amount');

var character_name = characterElement.value;
var character_money = 0;

function inputCharacterName() {
    character_name = characterElement.value;
    var message = character_name + 'さん、いらっしゃい';
    messageElement.innerHTML = message;
}

function inputCharacterMoeny() {
    character_money = moneyElement.value;
}

function inputAmount() {
    var amount = amountElement.value;
    if (amount < 0) amountElement.value = 0;
}

function buy() {
    var itemName = itemElement.textContent;
    var price = priceElement.textContent;
    var amount = amountElement.value;
    var totalPrice = price * amount;

    console.log(character_money);

    var message = '';
    if (amount <= 0) {
        message = character_name + 'さん、いくつ買うんだい？';
    } else if (totalPrice > character_money) {
        message = character_name + 'さん、お金がたりないようだね。';
    } else {
        message = itemName + 'を' + amount + '個でよいかい？' + totalPrice + 'G だよ';
    }
    messageElement.textContent = message;
}

inputCharacterName();