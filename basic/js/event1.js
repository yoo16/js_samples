var welcomElement = document.getElementById('welcome_button');
document.getElementById('welcome_button').addEventListener('click', function () {
    alert('ようこそ！');
})

function sayHello(name) {
    var message = name + 'さん、こんにちは';
    alert(message);
}
