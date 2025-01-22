// JSONデータ読み込み
var jsonString = document.getElementById('data').textContent;

// JSON -> オブジェクト
var user = JSON.parse(jsonString);
displayUser(user);

/**
 * ユーザ情報表示
 * @param {*} user 
 */
function displayUser(user) {
    document.getElementById('user-name').value = user.name || '';
    document.getElementById('user-email').value = user.email || '';
    document.getElementById('user-city').value = user.city || '';
}

function update() {
    user.name = document.getElementById('user-name').value;
    user.email = document.getElementById('user-email').value;
    user.city = document.getElementById('user-city').value;

    // オブジェクト -> JSON
    document.getElementById('json-user').textContent = JSON.stringify(user);
}