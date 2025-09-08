const THEME_KEY = "theme";
const label = document.getElementById("themeLabel");
const icon = document.getElementById("themeIcon");

function applyTheme(theme) {
    // html要素
    const root = document.documentElement;
    // html要素にクラスを付与/削除
    root.classList.toggle("dark", theme === "dark");
    if (label) label.textContent = theme === "dark" ? "ダーク" : "ライト";
    if (icon) icon.textContent = theme === "dark" ? "🌙" : "🌞";

    // ボタンを更新
    document.getElementById("themeBtn")?.setAttribute("aria-pressed", String(theme === "dark"));
    // Cookie一覧表示
    document.getElementById("cookies").textContent = document.cookie || "(なし)";
}

function resolveInitialTheme() {
    const saved = getCookie(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    // OSの設定に合わせる
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function toggleTheme() {
    // 現在の状態を反転
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    // Cookieに保存
    setCookie(THEME_KEY, next);
    // Themeを適用
    applyTheme(next);
}

window.addEventListener("DOMContentLoaded", () => {
    const initial = resolveInitialTheme();
    if (!getCookie(THEME_KEY)) setCookie(THEME_KEY, initial);
    applyTheme(initial);

    document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);

    if (window.matchMedia) {
        matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            if (!getCookie(THEME_KEY)) applyTheme(resolveInitialTheme());
        });
    }
});