/**
 * 変数
 */
var drink1 = "コーヒー";
var drink2 = "紅茶";
var drink3 = "ほうじ茶";

/**
 * new Array()
 */
var drinks = new Array();
console.log(drinks);

/**
 * []
 */
var drinks = [];
console.log(drinks);

/**
 * create array
 */
var drinks = ['コーヒー', '紅茶', 'ほうじ茶'];
console.log(drinks);

/**
 * show value by index
 */
var drink = drinks[1];
console.log("select drink:", drink);

drinks[1] = 'ウーロン茶';
console.log(drinks);

/**
 * Array.length
 */
var length = drinks.length;
console.log("length:", length);


/**
 * not spread syntax
 */
var drinks = ['コーヒー', '紅茶'];
// 展開しないで文字列追加
drinks = [drinks, 'ほうじ茶'];
console.log(drinks);


/**
 * spread syntax
 */
var drinks = ['コーヒー', '紅茶'];
// 展開して文字列追加
drinks = [...drinks, 'ほうじ茶'];
console.log(drinks);


/**
 * array push
 */
drinks.push('炭酸水');
console.log(drinks);

/**
 * array pop
 */
drinks.pop();
console.log(drinks);

/**
 * array shift
 */
drinks.shift();
console.log(drinks)

/**
 * array unshift
 */
drinks.unshift('アイスコーヒー');
console.log(drinks);

/**
 * array splice add
 */
drinks.splice(1, 0, "オレンジジュース");
console.log(drinks);

/**
 * array splice
 */
drinks.splice(2, 1);
console.log(drinks);

/**
 * array indexOf
 */
var index = drinks.indexOf('ほうじ茶');
console.log(index);


monsters = ['']