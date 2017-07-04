var center2_up_change = document.getElementById("center2_up_change");
var str1 = "苏州链家真实新房楼盘234个";
var str2 = "苏州链家真实在售二手房8068套";
//轮播效果：
setInterval(function(){
	center2_up_change.innerHTML = "";
	center2_up_change.innerHTML = str2;
	setTimeout(function(){
		center2_up_change.innerHTML = "";
		center2_up_change.innerHTML = str1;
	},2000);
},4000);


//foot2_seven:
var div1 = document.getElementById("foot2_seven_center_left_1");
var div2 = document.getElementById("foot2_seven_center_left_2");
var div3 = document.getElementById("foot2_seven_center_left_3");
var big1 = document.getElementById("foot2_big1");
var big2 = document.getElementById("foot2_big2");
var big3 = document.getElementById("foot2_big3");
function effect(b1,b2,b3){      //封装函数：鼠标移入移出时CSS效果。
	b1.style.background = "#555";  
	b1.style.color = "#fff";	//选中状态样式。
	b2.style.background = "#000";  
	b2.style.color = "#999";	//未选中状态样式。
	b3.style.background = "#000";  
	b3.style.color = "#999";	//未选中状态样式。
}
function showHidden(d1,d2,d3){  //封装函数：显示与隐藏。通过参数的顺序来确定谁隐藏谁显示。
	d1.style.display = "";      //显示
	d2.style.display = "none";  //隐藏
	d3.style.display = "none";  //隐藏
}
effect(big1,big2,big3);   		//默认选中big1元素。
showHidden(div1,div2,div3);     //默认显示div1的内容，隐藏div2,div3的内容。
big1.onmouseover = function(){
	showHidden(div1,div2,div3);
	//鼠标从移入big1开始到再移入其他元素一段时间的特效：
	effect(big1,big2,big3);
}
big2.onmouseover = function(){
	showHidden(div2,div1,div3);
	effect(big2,big1,big3);
}
big3.onmouseover = function(){
	showHidden(div3,div1,div2);
	effect(big3,big1,big2);
}
//方法2：可以尝试用替换内容的做法来做。（HTML部分只写一个div，然后根据条件显示不同内容）

