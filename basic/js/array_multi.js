/**
 * array object
 */
var character = {
    id: 1,
    name: 'ヒーロー',
    job: 'brave',
    level: 1,
    hp: 15,
    hp: 0,
    exp: 0,
}
console.log(character);

console.log('id', character.id);
console.log('name', character.level);
console.log('exp', character.exp);

/**
 * update exp
 */
character.exp = 5;
console.log(character.exp);

/**
 * add weapon
 */
character.weapon = '銅のつるぎ';
console.log(character.weapon);

/**
 * array - array
 */
var matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
];
console.log(matrix);

/**
 * 3 x 3
 */
var rows = [
    [90, 78, 82,],
    [62, 70, 68,],
    [68, 88, 72,],
]
console.log(rows);

/**
 * cols from rows
 */
var cols = rows[0];
console.log(cols);

/**
 * data from cols
 */
var data = cols[1]
console.log(data);


/**
 * data from rows
 */
data = rows[1][2]
console.log(data);

/**
 * characters
 */
var characters = [
    { id: 1, name: 'character1', email: 'character1@example.com', tel: '03-1111-2222' },
    { id: 2, name: 'character2', email: 'character2@example.com', tel: '090-3333-5555' },
    { id: 3, name: 'character3', email: 'character3@example.com', tel: '050-1234-5678' },
];
console.log(characters);


/**
 * 5 x 5
 */
 var drinks = [
    ['アイスコーヒー', 'ミネラルウォーター', 'ほうじ茶',],
    ['紅茶', '牛乳', 'アイスコーヒー',],
    ['烏龍茶', 'コーラ', 'オレンジジュース',],
    ['ミネラルウォーター', 'コーラ', 'ほうじ茶',],
]
console.log(drinks[0][0]);
console.log(drinks[1][2]);

var items = [
    { id: 1, name: 'ミネラルウォーター', price: 80, is_sale: true },
    { id: 2, name: 'ほうじ茶', price: 120, is_sale: false },
    { id: 3, name: 'コーヒー', price: 150, is_sale: true },
    { id: 4, name: '紅茶', price: 130, is_sale: false },
    { id: 5, name: '炭酸水', price: 90, is_sale: true },
]
console.log(items);


var new_item = { id: 6, name: 'オレンジジュース', price: 120, is_sale: false};
items.push(new_item);
console.log(items);
