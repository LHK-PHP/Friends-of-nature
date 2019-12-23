<?php
$dns = "mysql:host=localhost;dbname=friends of nature;port=3306";
$u ="root";
$pwd = "root";
$pdo = new PDO($dns,$u,$pwd);
$user = $_POST['user'];
$passwd = $_POST['passwd'];

$sql = "select id,com from user where user='$user' and password='$passwd'";

$res = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($res);
