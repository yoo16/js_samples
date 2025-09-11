<?php
session_name('sid');
session_set_cookie_params([
    'lifetime' => 3600,  // 1時間
    'path'     => '/',   // 全パスで有効
    'secure'   => false, // 本番は true
    'httponly' => true,  // HTTP Only: true の場合 JSから参照不可
    'samesite' => 'Lax', // CSRF対策: Lax or Strict
]);
session_start();