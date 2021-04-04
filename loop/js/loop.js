
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
var fruits = ['apple', 'orange', 'peach', 'banana'];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/**
 * 配列の中身を表示 forEach
 */
fruits.forEach(function (fruit) {
    console.log(fruit);
})

/**
 * 配列の中身を表示 for
 */
var fruits = ['apple', 'orange', 'peach', 'banana'];

for (var key in fruits) {
    console.log(fruits[key]);
}

/**
 * 配列の中身を表示 forEach
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
 * while
 */
var number = 100;
var i = 0;
while (number > 0) {
    number-=17; 
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
