<?php 
//设置编码格式
header("Content-Type: text/html;charset=utf-8");
//接收前端数据
$img = $_FILES['img'];

//获取上传的图片名
$imgName = $img['name'];
$up=strtolower(substr($imgName,strrpos($imgName,'.')+1));
if ($up == 'jpg' || $up == 'jpeg' || $up == 'gif' || $up == 'png' ) {
	$upname ='FONature_'. md5(microtime(true)+mt_rand(1,66666)).'.'.$up;
	//	文件上传
	move_uploaded_file($img['tmp_name'],'../updata/'. $upname);
	echo $upname;
}else{
	echo 1;
}

 ?>