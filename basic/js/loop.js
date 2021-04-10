
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
var monsters = ['スライム', 'キメラ', 'ノーム', 'ドラゴン'];

for (var i = 0; i < monsters.length; i++) {
    console.log(monsters[i]);
}

/**
 * 配列の中身を表示 forEach
 */
monsters.forEach(function (monster) {
    console.log(monster);
})


/**
 * 配列の中身を表示 for
 */
for (var key in monsters) {
    console.log(monsters[key]);
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

/**
 * if
 */
items.forEach(function (item) {
    if (item.price < 300) {
        console.log(item.name);
    }
});

/**
 * 複利計算 while
 */
var amount = 10000;
var rate = 1.05;
var year = 0;
var target = 20000;
while (amount <= target) {
    year++;
    amount *= rate;
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

items.forEach(function (item) {
    var message = `${item.name} は ${item.price}G です`;
    console.log(message)
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