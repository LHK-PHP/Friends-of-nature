<?php 
//设置命名空间
// 引入sql连接文件
require_once('../mysql/sql.php');
//接收前段数据
$direction =  $_POST['direction'];
$direction();
/**
 * 项目内容上传
 * @return [Boolean] 是否上传成功
 */
function upcontent(){
	//获取前端数据
	$content = $_POST['content'];
	$com_id = (int)$content['com_id'];
	$bri_sort = (int)$content['bri_sort'];
	$title = $content['title'];
	$bri_img = $content['bri_img'];
	$bri_content = $content['bri_content'];
	$pro_time = date("Y-m-d");
	$pro_endtime =$content['pro_endtime'];
	$pro_content = $content['pro_content'];
	//链接数据库
	$pdo = sql('friends of nature');

	try{
		//创建一个事务
		$pdo->beginTransaction();
		//执行的sql语句
		$sql = "INSERT INTO brief (com_id,bri_sort,bri_title,bri_img,bri_content) VALUES ('$com_id','$bri_sort','$title','$bri_img','$bri_content');";
		$result = $pdo->exec($sql);
		if ($result == 0) {
			throw new PDOException('false');
		}
		$sql1 = "INSERT INTO project (com_id,pro_time,pro_title,pro_endtime,pro_content) VALUES ('$com_id','$pro_time','$title','$pro_endtime','$pro_content');";
		$result1 =  $pdo->exec($sql1);
		if ($result1 == 0) {
			throw new PDOException('false');
		}
		//提交事务
		$pdo->commit();
		echo 'true';
	}catch( PDOException $e ){
		// 事务回滚
		$pdo->rollBack();
		echo $e->getMessage();
	}
}
/**
 * 管理员对项目进行的操作
 * @return [type] [description]
 */
function adminOper(){
	//获取前端数据
	$id = $_POST['id'];
	$bri_state = $_POST['bri_state'];
	//连接数据库
	$pdo = sql('friends of nature');
	//设置SQL语句
	$query = "UPDATE brief SET bri_state='$bri_state' WHERE id = '$id' ;";
	// 执行sql语句
	$result = $pdo->exec($query);
	//输出给前端数据
	echo $result;
}
/**
 * 企业对用户进行的申请处理
 * @return [type] [description]
 */
function comUser(){
	//获取数据
	$u_id = $_POST['u_id'];
	$pro_id = $_POST['pro_id'];
	$user_state = $_POST['user_state'];
	//连接数据库
	$pdo = sql('friends of nature');
	//设置sql语句
	$query = "UPDATE application SET user_state = '$user_state' WHERE u_id = '$u_id' and pro_id = '$pro_id';";
	// 执行sql语句
	$result = $pdo->exec($query);
	//输出给前端数据
	echo $result;
}

function userButn(){
	//获取前端数据
	$u_id = $_POST['u_id'];
	$pro_id = $_POST['pro_id'];
	$app_time = date("Y-m-d");
	//连接数据库
	$pdo = sql('friends of nature');
	//设置SQL语句
	$query = "INSERT INTO application (pro_id,u_id,app_time) VALUES ('$pro_id','$u_id','$app_time');";
	//执行SQL语句
	$result = $pdo->exec($query);
	//给前段传递数据
	echo $result;
}