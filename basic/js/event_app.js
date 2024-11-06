var user = {
    name: "",
}

function updateUserName() {
    user.name = document.getElementById('user-name').value;

    showMessage()
}

function showMessage() {
    var message = `こんにちは！${user.name}さん！`;
    document.getElementById('message').innerHTML = message;
}