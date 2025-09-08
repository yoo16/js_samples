// Cookieのキー: ユーザー名
const KEY = "account_name";

// 初期表示
showCookies();

// UI切り替え
document.getElementById("mode").addEventListener("change", (e) => {
    const mode = e.target.value;
    document.getElementById("expiresField").classList.toggle("hidden", mode !== "expires");
    document.getElementById("maxAgeField").classList.toggle("hidden", mode !== "max-age");
});

// Cookie一覧表示
function showCookies() {
    document.getElementById("cookies").textContent = document.cookie || "(なし)";
    document.getElementById("account_name").value = getCookie(KEY);
}

// 保存ボタン
document.getElementById("saveBtn").addEventListener("click", () => {
    const mode = document.getElementById("mode").value;
    const expiresValue = document.getElementById("expires").value;
    const maxAgeValue = document.getElementById("maxAge").value;

    const value = document.getElementById("account_name").value || "tokyo";
    setCookie(KEY, value, mode, expiresValue, maxAgeValue);

    showCookies();
});

// 削除ボタン
document.getElementById("deleteBtn").addEventListener("click", () => {
    deleteCookie(KEY);
    showCookies();
});