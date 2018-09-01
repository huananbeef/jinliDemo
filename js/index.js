define(["jquery","jquery-cookie"],function($){
	
	var main = function(){
		
		
		$(function(){
			
			
			/* 导航条部分 */
			$.ajax({
				url:"data/data1.json",
				success:function(arr){
					for(var i = 0;i < arr.length;i++){
						$(`<div class="menu-li">
											<div class="menu-ul" >
												<ul style="width:100%">
													<li>
														<span style="width:50px;">&nbsp;</span>
													</li>
													<li>
														<a href="#">
															<span style="font-weight:bold;">
																<font font="" size="3px" color="#777777">${arr[i][0].model} &gt;</font>
															</span>
														</a>
													</li>
													<table>
														<tbody>
															<tr>
																<td style="width:100%;height:10px;font-size:14px;border:0">
																</td>
															</tr>
														</tbody>
													</table>
												</ul>
											</div>`).appendTo($('.menu-box'));
						for(var j = 0;j<arr[i].length;j++){
							$(`<li><a class='${arr[i][j].class}' href="#">${arr[i][j].value}</a></li>`).appendTo($('.menu-box .menu-li:last-child .menu-ul ul'));
						}
					}
				}
			})
			/*轮播图部分*/
			
			function Slider(){
				let oBigBox = document.querySelector('#bannerslide');
				//获取上半部分
				//获取左按钮
				let oLeftBtn = document.querySelector('.arrowleft');
				//获取右按钮
				let oRightBtn = document.querySelector('.arrowright');
				//获取所有大图
				let oBigPics = document.querySelectorAll('.banner li');
				//获取底部按钮
				let oSmallLis = document.querySelectorAll('.menu-page ul li');
				//定义一个控制图片轮播的下标
				let indexA = 0;
				//定义一个改变z-index的变量
				let zIndex = 1;
				//记录计时器
				let timer = null;
				slider();
				autoPlay();
				//给左右按钮添加点击事件
				$('.arrowleft').click(function(){
					indexA-- ;
					if(indexA == -1){
						indexA = oBigPics.length -1;
					}
					slider();
				})
				$('.arrowright').click(function(){
					indexA ++;
					if(indexA == oBigPics.length){
						indexA = 0;
					}
					slider();
				})
				
				
				//给按钮添加事件
				for(let i =0,len = oSmallLis.length;i < len;i++){
					
					//点击时，轮播到当前点击的图片
					$('.menu-page ul li').click(function(){
						indexA = i;
						slider();
						//改变样式
						$('.menu-page ul li').attr('class','');
						$(this).attr('class','on');
					})
				}
				
				//设置轮播
				function slider(){
					//大图轮播
					/* oBigPics.css('display','none');
					oBigPics[indexA].css('display','list-item'); */
					$('.banner li').animate({
						opacity:0.5
					},function(){
						$(this).css(
							'display','none'
						)
					});
					$('.banner li'+':eq(' + indexA+')').animate({
						opacity:1
					},function(){
						$(this).css(
							'display','list-item'
						)
					});;
					//小图轮播
					$('.menu-page ul li').attr('class','');
					$('.menu-page ul li'+ ':eq(' + indexA+')').attr('class','on');
				}
				
				//自动轮播
				function autoPlay(){
					timer = setInterval(function(){
						indexA ++;
						if(indexA == oBigPics.length){
							indexA = 0;
						}
						slider();
						
					},2000)
				}
				//给大盒子添加移入移除事件
				$('#bannerslide').mouseenter(function(){
					clearInterval(timer);
				})
				$('#bannerslide').mouseleave(function(){
					autoPlay();
				})
				
			}
			Slider();
		
		/* 明星产品部分 */
		$.ajax({
			url:"data/data2.json",
			success:function(arr){
				for(var i = 0;i < arr[0].length;i++){
					$(`<li class="nopadding">
							<a href="javascript:;" target="_blank">
							<img src='${arr[0][i].img}' alt='${arr[0][i].tit0}'>
								<div class="hr-des">
									<p class="hr-title">&nbsp;</p>
									<p class="hr-detail"><span class="hr-circle">.</span>${arr[0][i].tit1}</p>
									<p class="hr-detail"><span class="hr-circle">.</span>${arr[0][i].tit2}</p>
									<p class="hr-detail"><span class="hr-circle">.</span>${arr[0][i].tit3}</p>
								</div>
							</a>
						</li>`).appendTo($('.sp-list'));
					
				}
			}
		})
		
		/*热卖产品*/
		$.ajax({
			url:"data/data2.json",
			success:function(arr){
				for(var i = 0;i < arr[1].length;i++){
					$(`<li>
					<a href="javascript:;" target="_blank">
						<div class="hr-phoneimg">
						<img class="after" src='${arr[1][i].img1}' alt="">
						<img class="before" src='${arr[1][i].img2}' alt="">
						</div>
						<div class="hr-des">
							<p class="hr-title">${arr[1][i].title}</p>
							<p class="hr-detail">${arr[1][i].detail}</p>
							<p class="hr-price">
							<span class="hr-money">¥</span>${arr[1][i].price}
							<span style="font-size: 18px;"></span>
							</p>
						</div>
					</a>
				</li>`).appendTo($('.hr-right'));
					
				}
			}
		})
		/*精美配件*/
		$.ajax({
			url:"data/data2.json",
			success:function(arr){
				for(var i = 0;i < arr[2].length;i++){
					$(`<li>
							<a href="javascript:;" target="_blank">
								<img src='${arr[2][i].img}' alt="金立 数据线">
								<div class="hr-des">
									<p class="hr-title">${arr[2][i].title}</p>
									<p class="hr-detail">${arr[2][i].detail}</p>
									<p class="hr-price">
									<span class="hr-money">¥</span>${arr[2][i].pirce}
									</p>
								</div>
							</a>
						</li>`).appendTo($('.eas'));
				}
			}
		})
		/*判断用户是否登录*/
		function userCookie(){
			if($.cookie('jinliusers')){
				/* alert('存在'); */
				$('#JloginReg').css('display','none');
				$('#JloginReg2').css('display','block');
				var str1 = $.cookie('jinliusers');
			
				var strN1 = str1.replace('&','=');
				var str = strN1.split('=');
				
				
				var str2 = `<span class="nick_username">Hi,amigo用户:` + str[1] + `</span>
							<a href="javascript:;" hidefocus="true" target="_self">
								<span class="fn_hl">我的账户</span>
							</a> 
							<span class="line">|</span> 
							<a href="javascript:;" hidefocus="true" target="_self" id="quit">退出</a>`
				$('#JloginReg2').append(str2);
				
				$('#quit').click(function(){
					$('#JloginReg').css('display','block');
					$('#JloginReg2').css('display','none');
					$.cookie('jinliusers', null);
				})
				
			}else{
				alert('不存在')
			}
			
			
		}
		userCookie();
		
		/*右上购物车*/
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		console.log(cartStr);
		if(!cartStr) {
			
			$(".cart_empty").css({
				display: "block"
			});
			}else {
				
				$('.mycart_empty').css('padding-top','0px');
				
				var cartObj = convertCartStrToObj(cartStr);
				console.log(cartObj)
				$('.cart_shopping').css('display','block');
				/*遍历所有的商品，获取其总价格和数量*/
				var goodsPriceAll = 0;
				var goodsListAll = 0;
				
				
				
				/*遍历所有的商品生成html添加到购物车列表中去*/
				$('#shoppinglist').css('display','block');
				
				
				
		
				for(var id in cartObj) {
					/*商品信息对象*/
					var good = cartObj[id];
					var totalprice = good.num * good.price
					var strSmall = `<ul class="cart-list" pic=" `+ id + `">
													<li>
														<div class="cart-item">
															<a href="" class="thumb">
																<img src="`+ good.src + `" alt="" style="width: 60px;height: 60px">
																<a href="" class="name">` + good.name +`<br>`+ good.type+`</a>
																<span class="price">
																	`+ good.price + ` × ` + good.num+`
																</span>
																<a class="btn-del J_delItem" href="javascript: void(0);" gid="2182300107_0_buy" data-isbigtap="false">
																<i class="iconfont">X</i>
																</a>
															</a>
														</div>
													</li>
												</ul>`;
					
					$(strSmall).prependTo("#JcartBd");
					
					/*悬浮导航栏购物车数量和总价*/
					goodsListAll += parseInt(good.num);
					goodsPriceAll += parseInt(good.num) * parseInt(good.price);
					
				}
				$('#JcartNum').text(goodsListAll);
				$('.total_num_1-normal').html(goodsListAll)
				$('.total_1-normal').text(goodsPriceAll);
				$('#JcartBd .total .spl').text(goodsListAll);
				$('#JcartBd .total .spp').text(goodsPriceAll);
		}
		function convertObjToCartStr(obj) {
				var cartStr = "";
				for(var id in obj) {
					if(cartStr) {
						cartStr += ":";
					}
					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src + ","+obj[id].type;
				}
				return cartStr;
			}
			
				
		function convertCartStrToObj(cartStr) {
			if(!cartStr) {
				return {}
			}
			var goods = cartStr.split(":");
			var obj ={};
			for(var i = 0;i < goods.length;i++){
				var data = goods[i].split(",");
				//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
				obj[data[0]] = {
					name: data[1],
					price: parseFloat(data[2]),
					num: parseInt(data[3]),
					src: data[4],
					type:data[5]
				}
			}
			console.log(obj);
			return obj;
			
		}
					/*右上小小购物车*/
					$('#Jcart').hover(function(){
						$('#Jcart').addClass('cart_hover');
						$('#JcartBd').finish().fadeIn();
					},function(){
						$('#Jcart').removeClass('cart_hover');
						$('#JcartBd').finish().fadeOut();
					})
					

		/*结尾部分*/
		
		$('#Jconpany').mouseover(function(){
			$(this).attr('class','link_item link_company link_company_hover')
		})
		$('#Jconpany').mouseout(function(){
			$(this).attr('class','link_item link_company')
		})
		
		
		$('#Jlang').mouseover(function(){
			$(this).attr('class','lang lang_hover');
			$('.ui_borderCir_c li:eq(0)').css('display','list-item')
		})
		$('#Jlang').mouseout(function(){
			$(this).attr('class','lang');
			$('.ui_borderCir_c li:eq(0)').css('display','none')
		})
		/* 结尾 */
		}
	)}
	
	
	return {
		main : main
	}
})