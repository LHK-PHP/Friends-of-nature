<?php
$dsn = "mysql:host=localhost; dbname=friends of nature; post=3306";
//mysql�û���
$user = "root";
$pwd = "root";
//����pdo�������ݿ� �������� ��ַ �û��� ����
$pdo = new PDO($dsn,$user,$pwd);
$name = $_POST['name'];
$phone = $_POST['phone'];
$paraddr = $_POST['paraddr'];
$time = $_POST['time'];
$clothing = $_POST['clothing'];
$sql = "insert into clothing values(null ,'$name','$phone','$paraddr','$time','$clothing')";
$pdo->exec($sql);
echo $time;
//if ($pdo->exec($sql)){
//    echo $pdo->exec($sql);
//}else{
//    echo "���ʧ��";
//}
