// Cookieのキー: ユーザー名
const KEY = "account_name";

// 初期表示
showCookies();

// UI切り替え
document.getElementById("mode").addEventListener("change", (e) => {
    const mode = e.target.value;
    // 有効期限
    document.getElementById("expiresField").classList.toggle("hidden", mode !== "expires");
    // 最大有効期間
    document.getElementById("maxAgeField").classList.toggle("hidden", mode !== "max-age");
});

// Cookie一覧表示
function showCookies() {
    // Cookie全体表示
    document.getElementById("cookies").textContent = document.cookie || "(なし)";
    // account_name表示
    document.getElementById("account_name").value = getCookie(KEY);
}

// 保存ボタン
document.getElementById("saveBtn").addEventListener("click", () => {
    const mode = document.getElementById("mode").value;
    const expiresValue = document.getElementById("expires").value;
    const maxAgeValue = document.getElementById("maxAge").value;

    const value = document.getElementById("account_name").value;
    if (!value) {
        alert("名前を入力してください");
        return;
    }
    // Cookie保存
    setCookie(KEY, value, mode, expiresValue, maxAgeValue);
    // 表示更新
    showCookies();
});

// 削除ボタン
document.getElementById("deleteBtn").addEventListener("click", () => {
    // Cookie削除
    deleteCookie(KEY);
    // 表示更新
    showCookies();
});