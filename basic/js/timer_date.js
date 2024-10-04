// 日付と時刻を更新する関数
function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2); // 月は0から始まるので+1
    const date = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);

    // フォーマットされた日時を表示
    const formattedDateTime = `${year}年${month}月${date}日 ${hours}:${minutes}:${seconds}`;
    document.getElementById("currentDateTime").innerHTML = formattedDateTime;
}



// 1秒ごとに日時を更新
setInterval(updateDateTime, 1000);

// ページが読み込まれたらすぐに日時を表示
updateDateTime();