<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$userphone = $_POST["phone"];
	$userpw = $_POST["pw"];
	
	//二、处理
	//1、连接数据库服务器
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
//		die("连接失败".mysql_error());
	}else{
		//2、选择数据库
		mysql_select_db("supreme",$conn);
		
		//3、执行SQL语句
		$sqlstr = "select * from zhuce 
					where phone='$userphone' and pw='$userpw'";
		$result = mysql_query($sqlstr,$conn);
		//4、关闭数据库
		mysql_close($conn);
		
		if(mysql_num_rows($result)==0){
		//三、响应
			echo "0";
		}else{
			echo "1";
		}
	}
?>