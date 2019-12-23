<?php
// 引入sql连接文件
require_once('../mysql/sql.php');
//接收前段数据
$direction =  $_GET['direction'];
$direction();
/**
 * 请求支教数据
 * return 返回前段json格式
 */
function support(){
	// 连接数据库
	$pdo = sql('friends of nature');
	//请求数据
	$result =  select($pdo,'select id,bri_title,bri_img,bri_content from `brief` where bri_sort = 2 and bri_state = 1');
	//返回json格式字符串
	echo json_encode($result);	
}
/**
 * 请求助学数据
 * 返回前段json格式;
 */
function study(){
	//连接数据库
	// 连接数据库
	$pdo = sql('friends of nature');
	//请求数据
	$result =  select($pdo,'select id,bri_title,bri_img,bri_content from `brief` where bri_sort = 4');
	//返回json格式字符串
	echo json_encode($result);	
}
/**
 * 环境保护项目获取
 *
 */
function envirContent(){
	// 连接数据库
	$pdo = sql('friends of nature');
	//请求数据
	$result =  select($pdo,'select id,bri_title,bri_img,bri_content from `brief` where bri_sort = 3 and bri_state = 1');
	//返回json格式字符串
	echo json_encode($result);
}

/**
 * 获取数据库文本内容
 */
function content(){
	$id = $_GET['id'];
	// 连接数据库
	$pdo = sql('friends of nature');
	//请求数据
	$result =  select($pdo,'select com_id,pro_title,pro_time,pro_endtime,pro_content from `project` where id ='.$id);
	//根据数据获取用户名
	$com_id = $result[0]['com_id'];
	//请求数据
	$resultU =  select($pdo,'select user from `user` where id ='.$com_id);
	$result[0]['user'] = $resultU[0]['user'];
	//返回json格式字符串
	echo json_encode($result);
}
/**
 * 管理员获取内容审批
 * @return [type] [description]
 */
function adminSele(){
	//获取前端数据
	$bri_sort = $_GET['bri_sort'];
	$bri_state = $_GET['bri_state'];
	//连接数据库
	$pdo = sql('friends of nature');
	//设置sql语句
	$query = "select id,bri_title,bri_content,bri_img,bri_state from brief where bri_sort = '$bri_sort' and bri_state = '$bri_state'";
	//请求数据
	$result =  select($pdo,$query);
	// 返回json格式字符串
	echo json_encode($result);
}
/**
 * 项目内容按钮操作
 * @return [type] [description]
 */
function butn(){
	//获取前端数据
	$u_id = $_GET['u_id'];
	$pro_id = $_GET['pro_id'];
	//连接数据库
	$pdo = sql('friends of nature');
	//设置SQL语句
	$query = "select user_state from application where pro_id = '$pro_id' and u_id = '$u_id'";
	//请求数据
	$result = select($pdo,$query);
	//返回json格式字符串
	echo json_encode($result);
}
/**
 * 获取企业基本信息
 */
function comContent(){
	//获取前段数据
	$id = $_GET['id'];
	//连接数据库
	$pdo = sql('friends of nature');
	//设置sql语句
	$query = "select user,email,phone,love from `user` where id = '$id' and com=1";
	//请求数据
	$result = select($pdo,$query);
	//返回json格式字符串
	echo json_encode($result);
}
/**
 * 企业中心项目内容获取
 * @return [type] [description]
 */
function comPro(){
	//获取前端数据
	$com_id = $_GET['com_id'];
	$bri_state = $_GET['bri_state'];
	//连接数据库
	$pdo = sql('friends of nature');
	//设置sql语句
	$query = "select id,bri_title,bri_img,bri_content from brief where com_id = '$com_id' and bri_state = '$bri_state'";
	//请求数据
	$result = select($pdo,$query);
	//返回数据
	echo json_encode($result);
}
/**
 * 企业中心获取项目申请情况
 * @return [type] [description]
 */
function userState(){
	//获取前端数据
	$pro_id = $_GET['pro_id'];
	$user_state = $_GET['user_state'];
	//定义一个保存数据的变量
	$end = [];
	//连接数据库 
	$pdo = sql('friends of nature');
	//设置sql语句
	$query = "select u_id from application where pro_id = '$pro_id' and user_state = '$user_state'";
	//请求数据
	$result = select($pdo,$query);
	//循环操作数据
	$length = count($result);
	for ($i=0; $i < $length; $i++) {
		$id = $result[$i]['u_id'];
		//设置sql语句
		$query1 = "select user from `user` where id = '$id'";
		//请求数据
		$res = select($pdo,$query1);
		$end[$i]['id'] = $result[$i]['u_id'];
		$end[$i]['user'] = $res[0]['user'];
	}
	//返回前端数据
	echo json_encode($end);
}