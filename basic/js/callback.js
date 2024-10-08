// callback
// 第2引数が関数（function型）
function processArray(values, callback) {
    for (var value of values) {
        // コールバック関数を実行
        callback(value);
    }
}

var numbers = [1, 2, 3, 4, 5];
function calculate(value) {
    // 計算
    const answer = value * 2;
    console.log(answer);
}

// processArray() に関数を渡して実行
console.log("--- function --")
processArray(numbers, calculate);

// processArray() に無名関数を渡して実行
console.log("--- anonymous function --")
processArray(numbers, function(value) {
    // 計算
    const answer = value * 3;
    console.log(answer);
})

// processArray() にアロー関数を渡して実行
console.log("--- arrow function --")
processArray(numbers,(value) => {
    // 計算
    const answer = (value - 3) * 2;
    console.log(answer);
})

//forEach
var drinks = ['コーヒー', '紅茶', 'ほうじ茶'];
drinks.forEach(function(drink) {
    console.log(drink);
})

/**
 * 連想配列の中身を表示 forEach
 */
var items = [
    { id: 1, name: 'コーヒー', price: 300 },
    { id: 2, name: '紅茶', price: 350 },
    { id: 3, name: 'ほうじ茶', price: 300 },
];

items.forEach(function (item) {
    var message = `${item.name}は ${item.price}円です`;
    console.log(message)
});


/**
 * map
 */
var newItems = items.map(function (item) {
    return {
        id: item.id,
        price: item.price,
        withoutTaxPrice: Math.floor(item.price / 1.1)
    }
})
console.log(newItems);

/**
 * filter
 */
var newItems = items.filter(item => item.price > 300);
console.log(newItems);

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

// 演習1
items.forEach(function (item) {
    if (item.price <= 300) {
        console.log(item.name);
    }
});

var new_items = items.filter(item => item.price <= 300)
console.log(new_items)

// 演習2
var discountedItems = items.map(function(item) {
    return {
        id: item.id,
        name: item.name,
        price: item.price * 0.9
    };
});
console.log(discountedItems)