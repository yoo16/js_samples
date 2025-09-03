function save() {
    setCookie("username", document.getElementById("name").value);

    showCookies();
}

// Cookie から名前を読み込み
function load() {
    const username = getCookie("username");
    if (username) {
        document.getElementById("name").value = decodeURIComponent(username);
    }

    showCookies();
}

function remove() {
    deleteCookie("username");
    document.getElementById("name").value = "";

    showCookies();
}

// Cookie 一覧を表示
function showCookies() {
    const el = document.getElementById("cookies");
    if (!el) return;
    el.textContent = document.cookie || "(なし)";
}

// 初期化
window.addEventListener("DOMContentLoaded", () => {
    // ページ読み込み時に Cookie を読み込み
    load();

    // ボタンにイベントリスナーを設定
    document.getElementById("saveBtn")?.addEventListener("click", save);
    document.getElementById("deleteBtn")?.addEventListener("click", remove);
    document.getElementById("name")?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") save();
    });
});