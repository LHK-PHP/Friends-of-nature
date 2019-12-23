<?php
//连接数据库
/**
 * @param {Object} $dbName 连接数据库的名字
 * return {PDOObject} 返回PDO对象
 */
function sql($dbName){
	//数据库连接成员属性
	 $name = 'root'; 
	 $password = 'root';
	//连接数据库
	return new PDO("mysql:host=localhost;dbname={$dbName}",$name,$password);
}
/**
 * [select 数据库查询方式封装] 
 * @param  [Object] $pdo [pdo链接对象]
 * @param  [string] $sql [需要之子那个的查询语句]
 * @return [Array]      返回数据库查询过来的数组
 */
function select($pdo,$sql){
	//进行查询
	$result =  $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
	// 返回数组数据
	return $result;
}


