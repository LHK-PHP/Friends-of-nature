<?php
	$dsn = "mysql:host=localhost; dbname=friends of nature; post=3306";
	//mysql账号
	$user = "root";
	$pwd = "root";
	$pdo = new PDO($dsn,$user,$pwd);
	
	$id = $_GET['id'];
	//请求数据
	$result =  $pdo->query('select com_id,pro_title,pro_time,pro_endtime,pro_content from `project` where id ='.$id)->fetchAll(PDO::FETCH_ASSOC);
	//根据数据获取用户名
	$com_id = $result[0]['com_id'];
	//请求数据
	$resultU =  $pdo->query('select user from `user` where id ='.$com_id)->fetchAll(PDO::FETCH_ASSOC);
	$result[0]['user'] = $resultU[0]['user'];
	//返回json格式字符串
	echo json_encode($result);