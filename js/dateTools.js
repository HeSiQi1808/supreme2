
//求两个日期的天数差

//参数:
//起始日期
//结束日期
//返回值：差的天数(多少个24小时)

function differentDate1(d1,d2){
	
	var diff = d1.getTime()-d2.getTime();
	return Math.floor(diff/(24*3600*1000));
	//return Math.ceil(diff/(24*3600*1000));
}

//求两个日期的天数差（按照自然天）

function differentDate2(d1,d2){
	d1.setHours(0);
	d1.setMinutes(0);
	d1.setSeconds(0);
	d2.setHours(0);
	d2.setMinutes(0);
	d2.setSeconds(0);	
	var diff = d1.getTime()-d2.getTime();
	return Math.floor(diff/(24*3600*1000));
}


//计算月份差

//参数:
//起始日期
//结束日期
//返回值：差的月份数；（按照自然月计算）
/*
2018 11  1
2018 12  5

2018 11  1
2019 12  5

2018 12  31
2019  1   1

2018 2  31
2017 10   1

2018 12  31
2017 2   1
*/

//年份差*12+月份差
function diffMonth(d1,d2){
	
	return (d1.getFullYear()-d2.getFullYear())*12+(d1.getMonth()-d2.getMonth());
	
}

//输出自己的日期格式（把日期转成字符串）：
//如：2018-11-1  2018/11/1   2018年11月1日
//参数：
// 日期对象 d1:必需的参数
// 分隔符 sep：可选，如果没有传该参数，那么就是以汉字分割，如果传入，则年月日之间用sep进行分割
//返回值：指定格式的日期字符串


function toDateString(d1,sep){
	if(sep==undefined){
		return d1.getFullYear()+"年"+(d1.getMonth()+1)+"月"+d1.getDate()+"日";
	}
	return d1.getFullYear()+sep+(d1.getMonth()+1)+sep+d1.getDate();	
}

//输出自己的日期时间格式（把日期转成字符串）：
//如：2018-11-1 14:15:12   2018/11/1 14:15:12   2018年11月1日 下午 2:45:12
//参数：
// 日期对象 d1:必需的参数
// 分隔符 sep：可选，如果没有传该参数，那么就是以汉字分割，如果传入，则年月日之间用sep进行分割
//返回值：指定格式的日期字符串

function toDateTimeString(d1,sep){
	
	var str=toDateString(d1,sep);//得到年月日的字符串格式
	
//	if(sep!=undefined){
		if(d1.getHours()<=12){
			str=str+" am";
		}else{		
			str=str+" pm";
		}
		if(d1.getMinutes()<10){
			str +=" "+d1.getHours()<=12?d1.getHours():d1.getHours()-12;
			str +=":"+"0"+d1.getMinutes();
		}else{
			str +=" "+d1.getHours()+":"+d1.getMinutes();
		}
	return str;
	//return toDateString(d1,sep)+" "+d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds();	
}
