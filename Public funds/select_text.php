<?php
$dsn = "mysql:host=localhost; dbname=friends of nature; post=3306";
//mysql�û���
$user = "root";
$pwd = "root";
//����pdo�������ݿ� �������� ��ַ �û��� ����
$pdo = new PDO($dsn,$user,$pwd);
$select = "select * from brief where bri_sort = '1'";
//����ȡ������ת��Ϊ�������ʽ
$arr=  $pdo->query($select)->fetchAll(PDO::FETCH_ASSOC);
//echo $arr;
//����js����
echo json_encode($arr);
