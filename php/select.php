<?php
// ����sql�����ļ�
require_once('../mysql/sql.php');
//����ǰ������
$direction =  $_GET['direction'];
$direction();
//����sql��亯��
function selects(){
    $text = $_GET['text'];
    // �������ݿ�
    $pdo = sql('friends of nature');
    //��������
    $result =  select($pdo,"select bri_title from `brief`  where  bri_title  like '%{$text}%' ");
    //����json��ʽ�ַ���
    echo json_encode($result);
}