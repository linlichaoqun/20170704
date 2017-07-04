var content = document.getElementById("foot2_d2_left_content");
var down = document.getElementById("foot2_d2_left_down");
var arr = [
	new Array("北京新房","天津新房","上海新房","青岛新房","大连新房","南京新房"),
	new Array("北京新房网","杭州地铁房","天津房屋出租","成都房屋出租","大连新房网","手机房产网"),
	new Array("吴中楼盘","吴江楼盘","高新楼盘","相城楼盘","姑苏楼盘","城南楼盘"),
	new Array("湖畔樾山","中行樾园","正荣华府","枫丹壹錿","嘉乐城","海亮长桥府"),
	new Array("松陵楼盘","木渎楼盘","元和楼盘","狮山楼盘","甪直楼盘","胥口楼盘"),
	new Array("景瑞东环之歌","阳光城丽景湾","苏州鲁能公馆","苏胥湾","绿地江南华府","星榈湾")
];

var b1 = document.getElementById("foot2_big1");
var b2 = document.getElementById("foot2_big2");
var b3 = document.getElementById("foot2_big3");
var b4 = document.getElementById("foot2_big4");
var b5 = document.getElementById("foot2_big5");
var b6 = document.getElementById("foot2_big6");

function effect(b1,b2,b3,b4,b5,b6){//foot2_big系列效果封装函数。
	b1.style.background = "#555";b1.style.color = "#eee";
	b2.style.background = "#111";b2.style.color = "#777";
	b3.style.background = "#111";b3.style.color = "#777";
	b4.style.background = "#111";b4.style.color = "#777";
	b5.style.background = "#111";b5.style.color = "#777";
	b6.style.background = "#111";b6.style.color = "#777";
}
function element2(i){//显示content中的元素。
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
effect(b1,b2,b3,b4,b5,b6);
element2(1);

b1.onmouseover = function(){
	effect(b1,b2,b3,b4,b5,b6);
	element2(1);
}
b2.onmouseover = function(){
	effect(b2,b1,b3,b4,b5,b6);
	element2(2);
}
b3.onmouseover = function(){
	effect(b3,b1,b2,b4,b5,b6);
	element2(3);
}
b4.onmouseover = function(){
	effect(b4,b1,b2,b3,b5,b6);
	element2(4);
}
b5.onmouseover = function(){
	effect(b5,b1,b2,b3,b4,b6);
	element2(5);
}
b6.onmouseover = function(){
	effect(b6,b1,b2,b3,b4,b5);
	element2(6);
}

var str = "免责声明：网站所有信息均由公开渠道获取，最终以开发商提供及政府部门登记备案为准。本站所有面积未经特殊说明均为建筑面积。";
var span = document.createElement("span");
span.innerText = str;
down.appendChild(span); 
down.style.color = "#777";
down.style.fontSize = "12px";
//或者直接:
//down.innerHTML = str;