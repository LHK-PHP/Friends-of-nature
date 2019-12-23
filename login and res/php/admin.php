<?php
$dns = "mysql:host=localhost;dbname=friends of nature;port=3306";
$u ="root";
$pwd = "root";
$pdo = new PDO($dns,$u,$pwd);

$user = $_POST['user'];
$passwd = $_POST['passwd'];

$sql = "select id from admin where admin='$user' and ad_password='$passwd'";

$res = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($res);
