
function auth() {
    var emailElement = document.getElementsByName('email');
    var passwordElement = document.getElementsByName('password');

    console.log(emailElement[0].value)
    console.log(passwordElement[0].value)

    if (emailElement[0].value == "" || passwordElement[0].value == "") {
        document.getElementById('error-message').innerHTML = "Email、パスワードを入力してください"
        return false
    } else {
        return true
    }
}