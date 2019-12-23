<?php
$dns = "mysql:host=localhost;dbname=friends of nature;port=3306";
$u ="root";
$pwd = "root";
$pdo = new PDO($dns,$u,$pwd);

$user   = $_POST['user'];
$passwd = $_POST['passwd'];
$phone  = $_POST['phone'];
$email  = $_POST['email'];

$sql = "insert into user (user,password,phone,email) values('$user','$passwd','$phone','$email')";

$res = $pdo->exec($sql);

echo $res;


