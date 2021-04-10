/**
 * array object
 */
var user = {
    id: 1,
    name: 'User1',
    email: 'user1@example.com',
    tel: '03-1111-2222',
}
console.log(user);

console.log('id', user.id);
console.log('name', user.name);
console.log('email', user.email);
console.log('tel', user.tel);

/**
 * update email
 */
user.email = 'user1@yokohama.com';
console.log(user.email);

/**
 * add birthday
 */
user.birthday = '1991/11/20';
console.log(user.birthday);

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
data = rows[0][1]
console.log(data);

/**
 * users
 */
var users = [
    { id: 1, name: 'User1', email: 'user1@example.com', tel: '03-1111-2222' },
    { id: 2, name: 'User2', email: 'user2@example.com', tel: '090-3333-5555' },
    { id: 3, name: 'User3', email: 'user3@example.com', tel: '050-1234-5678' },
];
console.log(users);