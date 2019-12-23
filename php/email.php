<?php 
namespace PHPMailer\PHPMailer;
//设置命名空间
header('content-type:text/html;charset=utf-8');
// 引入PHPMailer的核心文件
require_once("PHPMailer/src/PHPMailer.php");
require_once("PHPMailer/src/SMTP.php");
require_once('../mysql/sql.php');
//获取前端数据调用方法
$direction = $_POST['direction'];
 if ($direction == 'admin') {
 	admin();
 }elseif ($direction == 'compy') {
 	compy();
 }
/**
 * 管理员调用的邮件发送方式
 * @return [type] [description]
 */
function admin(){
	//获取前端数据
	$id = $_POST['id'];
	$title = $_POST['title'];
	$bri_state = $_POST['bri_state'];
	//连接数据库查询邮箱信息
	//连接数据库
	$pdo = sql('friends of nature');
	//设置sql语句
	$query = "select com_id from brief where id = '$id'";
	//请求数据
	$result = select($pdo,$query);
	//获取用户信息
	$u_id = $result[0]['com_id'];
	//设置sql语句
	$query1 = "select user,email from user where id = '$u_id'";
	//请求数据
	$resultU = select($pdo,$query1);
	//返回邮箱数据并保存
	$user = $resultU[0]['user'];
	$email = $resultU[0]['email'];
	//判断情况
	if ($bri_state == 1) {
		$state = "<span style = 'color:rgb(0,180,0)'>已经通过审批,请及时查阅。</span>";
	}else{
		$state = "<span style = 'color:rgb(180,0,0)'>很抱歉未通过审批。</span>";
	}
	//设置主题样式
	$html = <<<EOF
	<h1 style = "text-align:center;color:rgba(0,180,0,0.5)">自然之友协会</h1>
	<p>尊敬的&nbsp;<span style = 'color:orange;'>{$user}</span>&nbsp;您好:</p>
	<p style="margin-left:2%;">你发布的项目&nbsp;&nbsp;<i>{$title}</i>&nbsp;&nbsp;,{$state}</p>
	<p style = 'text-align:center;'>感谢您做出的帮助,和对平台的信任。</p>
EOF;
	return emailUp($email,'自然之友通告信',$html);
}
/**
 * 企业调用的邮件发送申请状概况
 * @return [type] [description]
 */
function compy(){
	//获取前端数据
	$u_id = $_POST['u_id'];
	$title = $_POST['title'];
	$user_state = $_POST['user_state'];
	//连接数据库查询邮箱信息
	//连接数据库
	$pdo = sql('friends of nature');
	//设置sql语句
	$query = "select user,email,phone from user where id = '$u_id'";
	//请求数据
	$result = select($pdo,$query);
	//返回邮箱数据并保存
	$user = $result[0]['user'];
	$email = $result[0]['email'];
	$phone = $result[0]['phone'];
	//设置主题样式
	if ($user_state == 1) {
		$state = "<span style = 'color:rgb(0,180,0)'>已经通过审批,请及时查阅。</span><span>具体详情请联系企业电话<i>{$phone}</i></span>";
	}else{
		$state = "<span style = 'color:rgb(180,0,0)'>很抱歉未通过审批。</span>";
	}
	$html = <<<EOF
	<h1 style = "text-align:center;color:rgba(0,180,0,0.5)">自然之友协会</h1>
	<p>尊敬的&nbsp;<span style = 'color:orange;'>{$user}</span>&nbsp;您好:</p>
	<p style="margin-left:2%;">您申请的项目&nbsp;&nbsp;<i>{$title}</i>&nbsp;&nbsp;,{$state}</p>
	<p style = 'text-align:center;'>感谢您的参与和支持,和对平台的信任。</p>
EOF;
	return emailUp($email,'自然之友通告信',$html);
}
/**
 * 发送邮箱功能
 * @param  [String] $uEmail  [用户地址]
 * @param  [String] $subject [邮件主题]
 * @param  [String] $html    [邮件内容]
 * @return [Boolean]          [成功或失败]
 */
function emailUp($uEmail,$subject,$html){
	// 实例化PHPMailer核心类
	$mail = new PHPMailer();
	// 是否启用smtp的debug进行调试 开发环境建议开启 生产环境注释掉即可 默认关闭debug调试模式
	$mail->SMTPDebug = 1;
	// 使用smtp鉴权方式发送邮件
	$mail->isSMTP();
	// smtp需要鉴权 这个必须是true
	$mail->SMTPAuth = true;
	// 链接qq域名邮箱的服务器地址
	$mail->Host = 'smtp.qq.com';
	// 设置使用ssl加密方式登录鉴权
	$mail->SMTPSecure = 'ssl';
	// 设置ssl连接smtp服务器的远程服务器端口号
	$mail->Port = 465;
	// 设置发送的邮件的编码
	$mail->CharSet = 'UTF-8';
	// 设置发件人昵称 显示在收件人邮件的发件人邮箱地址前的发件人姓名
	$mail->FromName = '自然之友协会';
	// smtp登录的账号 QQ邮箱即可
	$mail->Username = '1649681210@qq.com';
	// smtp登录的密码 使用生成的授权码
	$mail->Password = 'jlglaefpownzhajj';
	// 设置发件人邮箱地址 同登录账号
	$mail->From = '1649681210@qq.com';
	// 邮件正文是否为html编码 注意此处是一个方法
	$mail->isHTML(true);
	// 设置收件人邮箱地址
	$mail->addAddress($uEmail);
	// 添加多个收件人 则多次调用方法即可
	// 添加该邮件的主题
	$mail->Subject = $subject;
	// 添加邮件正文
	$mail->Body = $html;
	// 为该邮件添加附件
	// $mail->addAttachment('3.png');
	// 发送邮件 返回状态
	return $mail->send();
}

