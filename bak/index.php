<?php

$returnArray = array( // �����ֶ�
            "memberid" =>'{}', // �̻�ID
            "orderid" =>  '{}', // ������
            "amount" => '{}', // ���׽��
            "datetime" => '{}', // ����ʱ��
            "transaction_id" =>  '{}', // ֧����ˮ��
            "returncode" => '{}',
        );

print_r($returnArray);
ksort($returnArray);

 $md5key = "bxg61l56cztdmlz0ilrstofxdi2ud1in";
$md5str = "";
        foreach ($returnArray as $key => $val) {
            $md5str = $md5str . $key . "=" . $val . "&";
        }

		$md5str .="key=" . $md5key;
echo "<br/>";
echo $md5str;


