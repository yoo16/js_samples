
var drinks = ['コーヒー', 'ミネラルウォーター', 'コーラ', 'ほうじ茶'];
drinks.forEach(function(drink) {
    console.log(drink);
})

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

items.forEach(function (item) {
    var message = `${item.name} は ${item.price}G です`;
    console.log(message)
});

items.forEach(function (item) {
    if (item.price < 100) {
        console.log(item.name);
    }
});


/**
 * map
 */
var new_items = items.map(function (item) {
    item.price -= 10;
    return item
})
console.log(new_items);


/**
 * reduce
 */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = numbers.reduce(function (acc, value) {
    return acc + value;
});
console.log(sum);

numbers = [34, 39, 93, 87, 52, 3, 10, 97, 5];
var max = numbers.reduce(function (acc, value) {
    return (acc > value) ? acc : value
});
console.log(max);

//レアリティ
var rarities = [
    { type: 'n', name: 'ノーマル', probability: 60, },
    { type: 'np', name: 'ノーマル+', probability: 20, },
    { type: 'R', name: 'スーパーレア', probability: 15, },
    { type: 'SR', name: 'スーパーレア', probability: 4, },
    { type: 'SSR', name: 'スーパースペシャルレア', probability: 1, },
]

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max + 1 - min))
    return number;
}

var min = 0;
var max = 100;
var number = randomNumber(min, max);
var rarity;
for (var index in rarities) {
    rarity = rarities[index];
    max = min + rarity.probability;
    // console.log(min, max, number);
    if (number >= min && number <= max) {
        break;
    }
    min = max;
}
console.log(rarity);


/**
 * 9 x 9
 */
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {

    }
}
