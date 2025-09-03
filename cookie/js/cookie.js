// Cookie の設定
function setCookie(name, value, days = 180) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    // 1行・改行なしでセット（path=/ は必須）
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

// Cookie から値を取得
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const c of cookies) {
        const [key, value] = c.split("=");
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}

// Cookie 削除
function deleteCookie() {
    // Cookie を過去の日付に設定して削除
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    showCookies();
}