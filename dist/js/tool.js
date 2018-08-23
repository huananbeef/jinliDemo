function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//回调函数 ： 将一个函数作为另一个函数的参数时。
function sport(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var stop = true;
		for(var attr in json){
			var cur = attr == 'opacity' ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
			var speed = (json[attr] - cur) / 8; //基数
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(cur != json[attr]){
				stop = false;
			}
			if(attr == 'opacity'){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
			}else{
				obj.style[attr] = cur + speed + 'px';
			}
		}
		if(stop){
			clearInterval(obj.timer);
			if(typeof fn === 'function'){
				fn();
			}
		}
	},30)
}
function Slider(){
	let oBigBox = document.querySelector('#box');
	//				//获取上半部
					//获取左遮罩
					let oLeftMark = document.querySelector('#left');
					//获取右遮罩
					let oRightMark = document.querySelector('#right');
					//获取左按钮
					let oLeftBtn = document.querySelector('#btn_l');
					//获取右按钮
					let oRightBtn = document.querySelector('#btn_r');
					//获取所有的大图
					let oBigPics = document.querySelectorAll('#top li');
	//				//获取底部
	//				let oBottom = document.querySelector('#bottom');
					//获取小图ul
					let oSmallUl = document.querySelector('#small_ul');
					//获取所有的小图
					let oSmallPic = document.querySelectorAll('#bottom li');
					//2.设置小图UL的总宽度
					oSmallUl.style.width = oSmallPic[0].offsetWidth * oSmallPic.length + 'px';
					//3.给左遮罩和左按钮同时添加移入事件，使左按钮显示			
					oLeftMark.onmouseover = oLeftBtn.onmouseover = function(){
						sport(oLeftBtn,{opacity : 100});
					}
					//4.给左遮罩和左按钮同时添加移出事件，使左按钮隐藏
					oLeftMark.onmouseout = oLeftBtn.onmouseout =  function(){
						sport(oLeftBtn,{opacity:0});
					}
					//5.给右遮罩和右按钮同时添加移入事件，使右按钮显示	
					oRightMark.onmouseenter = oRightBtn.onmouseenter = function(){
						sport(oRightBtn,{opacity : 100});
					}
					//6.给右遮罩和右按钮同时添加移出事件，使右按钮隐藏
					oRightMark.onmouseleave = oRightBtn.onmouseleave = function(){
						sport(oRightBtn,{opacity : 0});
					}
					//定义一个控制图片轮播的下标
					let indexA = 0;
					//定义一个改变z-index的变量
					let zIndex = 1;
					//记录计时器
					let timer = null;
					slider();
					autoPlay();
					//7.给左右按钮添加点击事件
					oLeftBtn.onclick = function(){
						indexA --;
						if(indexA == -1){
							indexA = oBigPics.length - 1;
						}
						slider();
					}
					oRightBtn.onclick = function(){
						indexA ++;
						if(indexA == oBigPics.length){
							indexA = 0;
						}
						slider();
					}
					//8.给小图添加事件
					for(let i = 0,len = oSmallPic.length;i < len;i ++){
						//移入时，透明度100%
						oSmallPic[i].onmouseenter = function(){
							sport(this,{opacity : 100});
						}
						//移出时，透明度50%
						oSmallPic[i].onmouseleave = function(){
							if(indexA != i){
								sport(this,{opacity:50});
							}
						}
						//点击时，轮播到当前点击的图片
						oSmallPic[i].onclick = function(){
							indexA = i;
							slider();
						}
					}
					//9.设置轮播
					function slider(){
						//大图轮播
						oBigPics[indexA].style.zIndex = ++ zIndex;
						//小图轮播
						if(indexA == 0){
							sport(oSmallUl,{left : 0});
						}else if(indexA == oSmallPic.length - 1){
							sport(oSmallUl,{left : -(oSmallPic.length - 3) * oSmallPic[0].offsetWidth});
						}else{
							sport(oSmallUl,{left : -(indexA - 1) * oSmallPic[0].offsetWidth});
						}
						//初始化所有小图的透明度
						for(let i = 0,len = oSmallPic.length;i < len;i ++){
							sport(oSmallPic[i],{opacity:50});
						}
						sport(oSmallPic[indexA],{opacity:100});
					}
					//自动轮播
					function autoPlay(){
						timer = setInterval(function(){
							indexA ++;
							if(indexA == oBigPics.length){
								indexA = 0;
							}
							slider();
						},3000)
					}
					//给大盒子添加移入移出事件
					oBigBox.onmouseenter = function(){
						clearInterval(timer);
					}
					oBigBox.onmouseleave = function(){
						autoPlay();
					}
}

