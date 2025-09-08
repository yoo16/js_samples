<?php
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => '',
    'secure' => false,     // HTTPS
    'httponly' => false,   // JSからアクセス不可
    'samesite' => 'Lax',  // CSRF対策
]);

// セッション開始
session_start();

echo $_SESSION['count'];