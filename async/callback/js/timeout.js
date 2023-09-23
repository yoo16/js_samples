//引数にコールバック関数
fetchData = (callback) => {
    setTimeout(() => {
        var message = "2秒後に処理されました";
        //引数の関数を実行
        callback(message);
    }, 2000);
}

// メッセージ表示
showMessage = (data) => {
    document.getElementById('result').innerHTML = data;
}

//メイン処理
showMessage("Start!");
fetchData(showMessage);