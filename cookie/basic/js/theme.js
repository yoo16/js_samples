// Cookieのキー
const THEME_KEY = "theme";
// テーマ状態
let theme = null;
// html要素
const root = document.documentElement;
// ラベル要素
const label = document.getElementById("themeLabel");
const icon = document.getElementById("themeIcon");

function applyTheme(value) {
    // theme 設定
    theme = value;
    // html要素にクラスを付与/削除
    root.classList.toggle("dark", theme === "dark");
    if (label) label.textContent = theme === "dark" ? "ダーク" : "ライト";
    if (icon) icon.textContent = theme === "dark" ? "🌙" : "🌞";

    // Cookieに保存
    setCookie(THEME_KEY, theme);

    // ボタンを更新
    document.getElementById("themeBtn")?.setAttribute("aria-pressed", String(theme === "dark"));
    // Cookie一覧表示
    document.getElementById("cookies").textContent = document.cookie || "(なし)";
}

function toggleTheme() {
    // 現在の状態を反転
    const next = theme === "dark" ? "light" : "dark";
    // Cookieに保存
    setCookie(THEME_KEY, next);
    // Themeを適用
    applyTheme(next);
}

function loadTheme() {
    // Cookieの値を取得
    const saved = getCookie(THEME_KEY);
    // light/dark ならそのまま返す
    if (saved === "light" || saved === "dark") return saved;
    // OSの設定に合わせる
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

window.addEventListener("DOMContentLoaded", () => {
    // テーマ読み込み
    const init = loadTheme();
    console.log("初期テーマ:", init);
    // テーマ適用
    applyTheme(init);
    // テーマ切り替えイベント
    document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);
    // OSのテーマ変更を監視
    if (window.matchMedia) {
        matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
            if (!getCookie(THEME_KEY)) applyTheme(init);
        });
    }
});