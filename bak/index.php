<?php

$returnArray = array( // 返回字段
            "memberid" =>'{}', // 商户ID
            "orderid" =>  '{}', // 订单号
            "amount" => '{}', // 交易金额
            "datetime" => '{}', // 交易时间
            "transaction_id" =>  '{}', // 支付流水号
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



