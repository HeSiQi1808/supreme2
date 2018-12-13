//功能：添加cookie
//参数：键，值，有效期（单位天）
//返回值：无
//addCookie("username","jzm",7);
function addCookie(key,value,daycount,path){
	var d = new Date();             //创建一个新日期
	d.setDate(d.getDate()+daycount);  //设置有效期
	var str = key+"="+escape(value)+";expires="+d.toGMTString();
	//判断是否有可访问的url
	if(path!=undefined){
		str+=";path="+path;
	}
	document.cookie = str;
}


//功能：获取cookie
//参数：键
//返回值：值
function getCookie(key){
//	var str = unescape(document.cookie); //"userpass=123;username=jzm;city=xian"
//	//1.把字符串转化为数组
//	var arr = str.split("; ");
//	//2.遍历数组，查找键
//	for(var i in arr){
//		if(arr[i].indexOf(key+"=")==0){
//			return arr[i].substring((key+"=").length);
//		}
//	}
//	return null;
//}

	var str=unescape(document.cookie);// "userpass=123; username=jzm; city=xian"
	//1、字符串分割成数组
	var arr = str.split("; ");
	
	//2、遍历数组，查找键
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	
	return null;	
}




//功能：删除cookie
//参数：键
//返回值：无
function removeCookie(key){
	addCookie(key,"hi",-1);    //cookie无法直接删除，所以只能设置时间为过去比如负值。
}
