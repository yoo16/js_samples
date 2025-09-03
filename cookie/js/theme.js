const KEY = "theme"; // 'light' | 'dark'

function applyTheme(theme) {
    const root = document.documentElement; // <html>
    root.classList.toggle("dark", theme === "dark");
    // UI（任意）
    const label = document.getElementById("themeLabel");
    const icon = document.getElementById("themeIcon");
    if (label) label.textContent = theme === "dark" ? "ダーク" : "ライト";
    if (icon) icon.textContent = theme === "dark" ? "🌙" : "🌞";
    document.getElementById("themeBtn")?.setAttribute("aria-pressed", String(theme === "dark"));
}

function resolveInitialTheme() {
    const saved = getCookie(KEY);
    if (saved === "light" || saved === "dark") return saved;
    // Cookieが無ければOS設定を優先
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function toggleTheme() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    setCookie(KEY, next);
    applyTheme(next);
}

window.addEventListener("DOMContentLoaded", () => {
    // 初期反映
    const initial = resolveInitialTheme();
    // 初回アクセスならCookie作成（任意）
    if (!getCookie(KEY)) setCookie(KEY, initial);
    applyTheme(initial);

    // クリックで切替
    document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);

    // OSテーマが変わったとき：ユーザー選択（Cookie）が無ければ追従
    if (window.matchMedia) {
        matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            if (!getCookie(KEY)) applyTheme(resolveInitialTheme());
        });
    }
});
