<?php
$dsn = "mysql:host=localhost; dbname=friends of nature; post=3306";
//mysql用户名
$user = "root";
$pwd = "root";
//创建pdo连接数据库 三个参数 地址 用户名 密码
$pdo = new PDO($dsn,$user,$pwd);
$select = "select * from brief where bri_sort = '1'";
//将获取的内容转化为对象的形式
$arr=  $pdo->query($select)->fetchAll(PDO::FETCH_ASSOC);
//echo $arr;
//传给js对像
echo json_encode($arr);
