
fetchData = (callback) => {
    setTimeout(() => {
        var message = "2秒後に処理されました"
        callback(message);
    }, 2000);
}

showMessage = (data) => {
    document.getElementById('result').innerHTML = data;
}

showMessage("Start!")
fetchData(showMessage);