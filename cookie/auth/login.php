<?php
// テスト用ユーザ
require 'test_user.php';

// POST 以外は拒否
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

// 超重要
// セッションCookieを HttpOnly / SameSite=Lax で設定
session_name('sid');
session_set_cookie_params([
    'lifetime' => 3600,    // 1時間（適宜変更）
    'path'     => '/',     // サイト全体で有効
    'secure'   => false,   // 本番は true（HTTPS 必須）
    'httponly' => true,    // ← JS から読めない（XSS耐性アップ）
    'samesite' => 'Lax',   // クロスサイトPOSTを基本抑止（CSRF軽減）
]);
session_start();

header('Content-Type: application/json; charset=utf-8');

// 入力取得（JSON or x-www-form-urlencoded の両対応）
$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

// 認証チェック
if ($email === $user['email'] && password_verify($password, $user['hash_password'])) {
    // ハッシュはセッションに保存しない
    unset($user['hash_password']); 
    $_SESSION['user'] = $user;
    echo json_encode(['ok' => true, 'message' => 'logged in']);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid credentials']);
}