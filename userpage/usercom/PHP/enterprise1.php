<?php
$dns = "mysql:host=localhost;dbname=friends of nature;port=3306";
$u ="root";
$pwd = "root";
$pdo = new PDO($dns,$u,$pwd);
//定义储存变量
$result = [];

$u_id = $_GET['u_id'];

$sql = "select pro_id from application where u_id = '$u_id' and user_state=1";

$res = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

for($i = 0 ; $i < count($res); $i++){
	$id = $res[$i]['pro_id'];
	$sqlP = "select id,bri_title,bri_content from brief where id = '$id'";
	$resu = $pdo->query($sqlP)->fetchAll(PDO::FETCH_ASSOC);
	$result[$i]['id'] = $resu[0]['id'];
	$result[$i]['bri_title'] = $resu[0]['bri_title'];
	$result[$i]['bri_content'] = $resu[0]['bri_content'];
}

echo json_encode($result);