<?php
session_name('sid');
session_set_cookie_params([
    'lifetime' => 3600,    // 有効期限は1時間（実際はこの値は無視される）
    'path'     => '/',
    'secure'   => false,   // 本番は true（HTTPSのみ送信）
    'httponly' => true,    // JSからアクセス不可
    'samesite' => 'Lax',
]);

session_start();

header('Content-Type: application/json; charset=utf-8');

// セッション変数を空に
unset($_SESSION['user']);

// セッションCookieの削除（有効期限を過去に設定）
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(), // name
        '',             // value
        time() - 42000, // expire
        '/',            // path
        '',             // domain
        false,          // secure
        true            // httponly
    );
}

// レスポンス返却
echo json_encode([
    'ok' => true,
    'message' => 'Logged out successfully'
]);
