var top33 = document.getElementById("top33");
var top331 = document.getElementById("top331");
var top332 = document.getElementById("top332");
var top333 = document.getElementById("top333");
var top334 = document.getElementById("top334");
function getScrollTop3(){     //获取滚动条距浏览器顶部的绝对距离。见百度http://blog.csdn.net/lishaojun0115/article/details/50456660网页。
    var scrollPos;  
    if (window.pageYOffset) {  
    scrollPos = window.pageYOffset; }  
    else if (document.compatMode && document.compatMode != 'BackCompat')  
    { scrollPos = document.documentElement.scrollTop; }  
    else if (document.body) { scrollPos = document.body.scrollTop; }   
    return scrollPos;   
} 
function backg1(a){
	a.style.background = "#15A752";
	a.style.color = "white";
} 
function backg2(a){
	a.style.background = "white";
	a.style.color = "black";
}
//随着滚动条滚动top33显示与隐藏。
var sTop3;
setInterval(function(){   //这样就好了，用setInterval()函数来帮我们刷新页面。其实也不是刷新页面，就是不停的检测。
	sTop3 = getScrollTop3();
	if(sTop3 <= 700){
		top33.style.display = "none";//隐藏。	
	}
	if(sTop3>700){
		top33.style.display = "";	 //显示。
	}
	if(sTop3>700 && sTop3<1120){     //当滚动条处于700-1120px时，设置top331的样式突出。其他的样式不变。
		backg1(top331);backg2(top332);backg2(top333);backg2(top334);	
	}
	if(sTop3>1120 && sTop3<1630){
		backg1(top332);backg2(top331);backg2(top333);backg2(top334);
	}
	if(sTop3>1630 && sTop3<2620){
		backg1(top333);backg2(top331);backg2(top332);backg2(top334);
	}
	if(sTop3>2620){
		backg1(top334);backg2(top331);backg2(top332);backg2(top333);
	}
},100);

var content = document.getElementById("foot3_d2_left_content");
var down = document.getElementById("foot3_d2_left_down");
var arr = [
	["北京新房","天津新房","上海新房","青岛新房","大连新房","南京新房"],
	["吴中楼盘","吴江楼盘","高新楼盘","相城楼盘","姑苏楼盘","城南楼盘"],
	["湖畔樾山","中行樾园","正荣华府","枫丹壹錿","嘉乐城","海亮长桥府"],
	["松陵楼盘","木渎楼盘","元和楼盘","狮山楼盘","甪直楼盘","胥口楼盘"],
	["景瑞东环之歌","阳光城丽景湾","苏州鲁能公馆","苏胥湾","绿地江南华府","星榈湾"]
];
var b1 = document.getElementById("foot3_big1");
var b2 = document.getElementById("foot3_big2");
var b3 = document.getElementById("foot3_big3");
var b4 = document.getElementById("foot3_big4");
var b5 = document.getElementById("foot3_big5");
function effect(b1,b2,b3,b4,b5){//foot3_big系列效果封装函数。
	b1.style.background = "#555";b1.style.color = "#eee";
	b2.style.background = "#111";b2.style.color = "#777";
	b3.style.background = "#111";b3.style.color = "#777";
	b4.style.background = "#111";b4.style.color = "#777";
	b5.style.background = "#111";b5.style.color = "#777";
}
function element3(i){//显示content中的元素。
	content.innerHTML = "";   //预先清空原来的。做隐藏效果。
	var len = arr[i-1].length;
	for(var j=0;j<len;j++){
		var a = document.createElement("a");
		a.innerText = arr[i-1][j];
		a.style.color = "#777";
		a.style.fontSize = "12px";
		a.style.marginLeft = "10px";
		a.style.cursor = "pointer";
		content.appendChild(a); 
	}
}
//预先执行，出默认效果：
effect(b1,b2,b3,b4,b5);
element3(1);
b1.onmouseover = function(){
	effect(b1,b2,b3,b4,b5);
	element3(1);
}
b2.onmouseover = function(){
	effect(b2,b1,b3,b4,b5);
	element3(2);
}
b3.onmouseover = function(){
	effect(b3,b1,b2,b4,b5);
	element3(3);
}
b4.onmouseover = function(){
	effect(b4,b1,b2,b3,b5);
	element3(4);
}
b5.onmouseover = function(){
	effect(b5,b1,b2,b3,b4);
	element3(5);
}

var str = "免责声明：网站所有信息均由公开渠道获取，最终以开发商提供及政府部门登记备案为准。本站所有面积未经特殊说明均为建筑面积。";
var span = document.createElement("span");
span.innerText = str;
down.appendChild(span); 
down.style.color = "#777";
down.style.fontSize = "12px";
//或者直接:
//down.innerHTML = str;