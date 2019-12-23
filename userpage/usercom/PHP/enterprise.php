<?php
$dns = "mysql:host=localhost;dbname=friends of nature;port=3306";
$u ="root";
$pwd = "root";
$pdo = new PDO($dns,$u,$pwd);

$u_id = $_GET['u_id'];

$sql = "select user,email,phone,love from user where id = '$u_id' and com = 0";

$res = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($res);