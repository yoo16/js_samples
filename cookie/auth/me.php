<?php
// セッションCookieの基本設定
session_name('sid');
session_set_cookie_params([
    'lifetime' => 3600,    // 有効期限: 1時間
    'path'     => '/',     // サイト全体で有効
    'secure'   => false,   // 本番環境では true（HTTPSのみ送信）
    'httponly' => true,    // JSからアクセス不可
    'samesite' => 'Lax',   // CSRF軽減
]);
session_start();

header('Content-Type: application/json; charset=utf-8');

// 認証チェック
if (!isset($_SESSION['user'])) {
    http_response_code(401); // 未ログイン
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// ログイン中ユーザー情報を返す
echo json_encode([
    'user' => $_SESSION['user']
]);
