// Cookieを保存
function setCookie(name, value, mode, expiresValue, maxAgeValue) {
    // 基本情報の設定
    let cookieStr = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax`;

    // 有効期限の設定
    if (mode === "expires" && expiresValue) {
        const date = new Date(expiresValue);
        cookieStr += `; expires=${date.toUTCString()}`;
    }
    // max-ageの設定
    if (mode === "max-age" && maxAgeValue) {
        cookieStr += `; max-age=${maxAgeValue}`;
    }

    // Cookieの設定
    document.cookie = cookieStr;
}

// Cookieを取得
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null; // 見つからなければ null
}

// Cookieを削除
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// Cookieを削除
function deleteAllCookies() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const equalIndex = cookie.indexOf("=");
        const name = equalIndex > -1 ? cookie.substring(0, equalIndex) : cookie;
        // 各Cookieを削除（path=/ を必ず指定）
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
}