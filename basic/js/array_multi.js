/**
 * array object
 */
var character = {
    id: 1,
    name: 'アリス',
    job: 'wizard',
    level: 1,
    hp: 15,
    mp: 10,
    exp: 0,
}
console.log(character);

console.log('id', character.id);
console.log('name', character.level);
console.log('exp', character.exp);

/**
 * update exp
 */
// character.exp = 5;
console.log(character.exp);

/**
 * add weapon
 */
character.weapon = '銅のつるぎ';
console.log(character.weapon);

/**
 * characters
 */

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


var new_item = { id: 6, name: 'オレンジジュース', price: 120, is_sale: false };
items.push(new_item);
console.log(items);

function loadStatus() {
    document.getElementById('character_name').innerHTML = character.name
    document.getElementById('job').innerHTML = character.job
    document.getElementById('level').innerHTML = character.level
    document.getElementById('hp').innerHTML = character.hp
    document.getElementById('mp').innerHTML = character.mp
    document.getElementById('exp').innerHTML = character.exp
    console.log(user)
}
loadStatus()

var user = { name: "", email: "", password: "" }
function regist() {
    user.name = document.getElementById('user_name').value
    user.email = document.getElementById('email').value
    user.password = document.getElementById('password').value

    console.log(user)
}


var levels = [
    { value: 5, exp: 100 },
    { value: 4, exp: 50 },
    { value: 3, exp: 20 },
    { value: 2, exp: 10 },
    { value: 1, exp: 0 },
];

randomNumber = (min, max) => {
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

function attack() {
    var exp = randomNumber(1, 5)
    character.exp += exp
    checkLevelUp()
    loadStatus()
}

function checkLevelUp() {
    for (const level of levels) {
        if (character.exp >= level.exp) {
            character.level = level.value
            return
        }
    }
}
