<?php
$dsn = "mysql:host=localhost; dbname=friends of nature; post=3306";
//mysql�û���
$user = "root";
$pwd = "root";
//����pdo�������ݿ� �������� ��ַ �û��� ����
$pdo = new PDO($dsn,$user,$pwd);
$select = 'select * from pub_money';
//����ȡ������ת��Ϊ�������ʽ
$arr=  $pdo->query($select)->fetchAll(PDO::FETCH_ASSOC);
//echo $arr;
//����js����
echo json_encode($arr);
