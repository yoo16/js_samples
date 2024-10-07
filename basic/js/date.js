// 現在の年月日と時刻を表示する
function updateTime() {
    const now = new Date();
    console.log(now)

    // 年月日を取得
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1
    const day = String(now.getDate()).padStart(2, '0'); // 日付を文字列にしてゼロ埋め

    // 時刻を取得
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // YYYY/MM/DD HH:MM:SS に連結
    const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

    // 日時表示
    const datetimeElement = document.getElementById("datetime");
    datetimeElement.innerHTML = formattedDateTime;
}

// 初回表示を即時実行
updateTime();

// 1秒ごとに現在の時刻を更新
setInterval(updateTime, 1000);

