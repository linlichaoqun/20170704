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
function effect(big){    //封装函数：鼠标移入时效果。
	big.style.background = "#555";  //选中状态样式。
	big.style.color = "#fff";
}
function unEffect(big){  //封装函数：鼠标离开时效果。
	big.style.background = "#000";  //未选中状态样式。
	big.style.color = "#999";
}
function showHidden(d1,d2,d3){  //封装函数：显示与隐藏。通过参数的顺序来确定谁隐藏谁显示。
	d1.style.display = "";      //显示
	d2.style.display = "none";  //隐藏
	d3.style.display = "none";
}
effect(big1);   			//默认选中big1元素。
//方法一用：
/*
div1.style.visibility = "visible";
div2.style.visibility = "hidden";
div3.style.visibility = "hidden";
*/
//方法二、三用：
div1.style.display = "";  	//默认显示div1内容。
div2.style.display = "none";//默认隐藏div2内容。
div3.style.display = "none";//默认隐藏div3内容。
//方法一：一旦鼠标从本元素移出去第二级内容就隐藏。不符合题意。题意是移出本元素并移入到别的元素时才隐藏，而不是移出本元素就立即隐藏。这个怎么实现就看条件怎么控制。
/*
big1.onmouseover = function(){
	div1.style.visibility = "visible";
}
big1.onmouseout = function(){
	div1.style.visibility = "hidden";
}
big2.onmouseover = function(){
	div2.style.visibility = "visible";
}
big2.onmouseout = function(){
	div2.style.visibility = "hidden";
}
big3.onmouseover = function(){
	div3.style.visibility = "visible";
}
big3.onmouseout = function(){
	div3.style.visibility = "hidden";
}
*/
//方法二：只有鼠标移入另一个元素时，第二级内容才隐藏，符合本题意。这是不占据空间的。不显示且不会产生空格。
big1.onmouseover = function(){
	showHidden(div1,div2,div3);
	//鼠标从移入big1开始到再移入其他元素一段时间的特效：
	effect(big1);
	unEffect(big2);
	unEffect(big3);
}
big2.onmouseover = function(){
	showHidden(div2,div1,div3);
	effect(big2);
	unEffect(big1);
	unEffect(big3);
}
big3.onmouseover = function(){
	showHidden(div3,div1,div2);
	effect(big3);
	unEffect(big1);
	unEffect(big2);
}
//方法三：只有鼠标移入另一个元素时，第二级内容才隐藏，符合本题意。但这是占据空间的。不显示但会产生空格。
/*
big1.onmouseover = function(){
	div1.style.visibility = "visible";
	div2.style.visibility = "hidden";
	div3.style.visibility = "hidden";
}
big2.onmouseover = function(){
	div1.style.visibility = "hidden";
	div2.style.visibility = "visible";
	div3.style.visibility = "hidden";
}
big3.onmouseover = function(){
	div1.style.visibility = "hidden";
	div2.style.visibility = "hidden";
	div3.style.visibility = "visible";
}
*/
//方法4：可以尝试用替换内容的做法来做。（HTML部分只写一个div，然后根据条件显示不同内容）
