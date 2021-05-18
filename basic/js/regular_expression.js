var value = "Yokohama";
var regex = /[a-zA-Z]/g;
var matches = value.match(regex)
console.log(matches);

function regist() {
    var user_name = document.getElementById('user_name').value;
    document.getElementById('error_user_name').innerHTML = checkZenkaku(user_name);

    var user_furigana = document.getElementById('user_furigana').value;
    document.getElementById('error_user_furigana').innerHTML = checkHiragana(user_furigana);

    var user_password = document.getElementById('user_password').value;
    document.getElementById('error_user_password').innerHTML = checkPassword(user_password);
}

function checkZenkaku(value) {
    var regex = /^[^\x01-\x7E　]+$/;
    var message = '';

    //正規表現チェック
    if (!value.match(regex)) {
        message = '全角で入力してください';
    }
    return message;
}

function checkHiragana(value)
{
    var regex = /^[\u3040-\u309F　]+$/;
    var message = '';

    //正規表現チェック
    if (!value.match(regex)) {
        message = 'ひらがなで入力してください';
    }
    return message;
}

function checkPassword(value)
{
    var regex = /^[a-zA-Z0-9@.?/-]{8,64}$/i
    var message = '';

    //正規表現チェック
    var matchs = value.match(regex);
    if (!matchs) {
        message = 'パスワードは8文字以上の半角英数にしてください';
    }
    return message;
}