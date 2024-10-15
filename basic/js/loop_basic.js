

/**
 * 0 から1ずつ増やして10回表示
 */
for (var index = 0; index < 10; index++) {
    console.log(index + 1);
}

/**
 * 1 から 1000までの足し算
 */
var sum = 0;
for (let index = 1; index <= 1000; index++) {
    sum += index;
}
console.log(sum);

/**
 * while
 * 10までの偶数を表示
 */
var num = 0;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}