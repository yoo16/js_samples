
/**
 * 0 から1ずつ増やして10回表示
 */
for (var i = 0; i < 10; i++) {
    console.log(i + 1);
}

/**
 * 0 から1ずつ増やして10回表示
 */
var sum = 0;
for (var i = 1; i <= 1000; i++) {
    sum += i;
}
console.log(sum);

/**
 * 配列の中身を表示 for
 */
var drinks = ['コーヒー', 'ミネラルウォーター', 'コーラ', 'ほうじ茶'];
for (var i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}

/**
 * 配列の中身を表示 for
 */
for (var key in drinks) {
    console.log(drinks[key]);
}

/**
 * while
 */
var number = 100;
var i = 0;
while (number > 0) {
    number -= 17;
    i++;
}
console.log(i);
console.log(number);


var scores = [
    [40, 55, 80],
    [51, 61, 78],
    [67, 81, 50],
]

console.log(scores);
console.log(scores[2][1]);

/**
 * if
 */
var items = [
    { id: 1, name: "ミネラルウォーター", price: 80, is_sale: true },
    { id: 2, name: "ほうじ茶", price: 120, is_sale: false },
    { id: 3, name: "コーヒー", price: 150, is_sale: true },
    { id: 4, name: "紅茶", price: 130, is_sale: false },
    { id: 5, name: "炭酸水", price: 90, is_sale: true },
]

/**
 * 複利計算 while
 */
var money = 1000000;
var rate = 1.01;
var year = 0;
var target = 2000000;
while (money <= target) {
    year++;
    money *= rate;
}
var message = `${target}円になるには ${year}年かかります`;
console.log(message);

/**
 * 連想配列の中身を表示 forEach
 */
var items = [
    { id: 1, name: '銅のつるぎ', price: 150 },
    { id: 2, name: '鉄のやり', price: 550 },
    { id: 3, name: '皮のたて', price: 90 },
    { id: 4, name: '鉄のかぶと', price: 850 },
    { id: 5, name: '皮のぼうし', price: 50 },
];

var items = [
    { id: 1, name: 'ミネラルウォーター', price: 80, is_sale: true },
    { id: 2, name: 'ほうじ茶', price: 120, is_sale: false },
    { id: 3, name: 'コーヒー', price: 150, is_sale: true },
    { id: 4, name: '紅茶', price: 130, is_sale: false },
    { id: 5, name: '炭酸水', price: 90, is_sale: true },
];

/**
 * table list
 */
var item_list = document.getElementById('item_list');
var table = document.createElement('table');

//data
for (var index in items) {
    var tr = document.createElement('tr');
    var item = items[index];

    for (var key in item) {
        var td = document.createElement('td');
        var data = item[key];
        if (key == 'is_sale') {
            data = (data) ? 'セール' : '';
        }
        td.innerHTML = data;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
item_list.appendChild(table);



