<?php
// 引入sql连接文件
require_once('../mysql/sql.php');
//接收前段数据
$direction =  $_GET['direction'];
$direction();
//创建sql语句函数
function selects(){
    $text = $_GET['text'];
    // 连接数据库
    $pdo = sql('friends of nature');
    //请求数据
    $result =  select($pdo,"select bri_title from `brief`  where  bri_title  like '%{$text}%' ");
    //返回json格式字符串
    echo json_encode($result);
}