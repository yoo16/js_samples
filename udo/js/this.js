// thisオブジェクト（グローバル）
console.log(this)
// 現在のURL
document.getElementById('window-href').innerText = this.location.href;
// ユーザエージェント
document.getElementById('window-userAgent').innerText = this.navigator.userAgent;
// ウィンドウサイズ
document.getElementById('window-size').innerText = `${this.screen.width} x ${this.screen.height}`;

function clickEvent(element, event) {
    // Element取得
    console.log(element);
    // Elementからクラス名表示
    document.getElementById('this-object').innerText = element.className;

    // イベント取得
    console.log(event);
    // イベントのタイプを表示
    document.getElementById('event-object').innerText = event.type;
}