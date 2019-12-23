<?php
//获取数据
$imgdata = urlencode($_POST['base']);
if ($_POST['city'] == null) {
    $city = '';
} else {
    $city = "city=" . urlencode($_POST['city']);
}
//api接口
$host    = "https://recover.market.alicloudapi.com";
$path    = "/recover";
$method  = "POST";
$appcode = "3dbc7625a8f0455bb578758c1ce4f216";
$headers = array();
array_push($headers, "Authorization:APPCODE " . $appcode);
//根据API的要求，定义相对应的Content-Type
array_push($headers, "Content-Type" . ":" . "application/x-www-form-urlencoded; charset=UTF-8");
$querys = $city;
$bodys  = "img=" . $imgdata;
$url    = $host . $path . "?" . $querys;

$curl = curl_init();
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
// curl_setopt($curl, CURLOPT_FAILONERROR, false);
// curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($curl, CURLOPT_HEADER, true);
if (1 == strpos("$" . $host, "https://")) {
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
}
curl_setopt($curl, CURLOPT_POSTFIELDS, $bodys);
echo substr(curl_exec($curl), 0, -1);
