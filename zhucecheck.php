<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$userphone = $_GET['userphone'];
	//二、处理
	//1、连接数据库服务器
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
//		die("连接失败".mysql_error());
	}else{
		//2、选择数据库
		mysql_select_db("supreme",$conn);
	
		//3、执行SQL
		$sqlstr = "select * from zhuce where phone = '$userphone'";
		$result = mysql_query($sqlstr,$conn);
		//4、关闭数据库
		mysql_close($conn);

	//三、响应
		if(mysql_num_rows($result)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>