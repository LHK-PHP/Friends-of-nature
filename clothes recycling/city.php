<?php
$dsn = "mysql:host=localhost; dbname=friends of nature; post=3306";
//mysql????
$user = "root";
$pwd = "root";
//????pdo??????ݿ??????? ??? ???? ??
$pdo = new PDO($dsn,$user,$pwd);
$paid = $_GET['paid'];
$type = $_GET['type'];
$sql = "select * from coding_region where parentid={$paid} and type={$type} order by firstletter";
//print_r($sql);
//var_dump($sql);
$arr = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
//print_r($arr);
//var_dump($arr);
echo (json_encode($arr));