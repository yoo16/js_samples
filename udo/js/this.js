// thisオブジェクト（グローバル）
console.log(this)
// 現在のURL
document.getElementById('window-href').innerText = this.location.href;
// ユーザエージェント
document.getElementById('window-userAgent').innerText = this.navigator.userAgent;
// ウィンドウサイズ
document.getElementById('window-size').innerText = `${this.screen.width} x ${this.screen.height}`;

function clickEvent(element) {
    document.getElementById('this-object').innerText = element.className;
}