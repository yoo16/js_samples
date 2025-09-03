<?php
// セッション開始
session_start();

$item = $_POST['item'] ?? '';
// セッション保存
$_SESSION['item'] = $item;

// TODO: PDOなどでDB保存

// basic.html にリダイレクト
header('Location: basic.html');