define(["jquery","jquery-cookie"],function($){
	
	var list = function(){
		
		$(function(){
			/* 导航条部分 */
			var kk = 1;
			$(".page_num").on("click", "a", function(){
				kk = $(this).index();
				//alert(kk);
				$('#JmobileList').html('');
				$('.page_bg').removeClass('cur_page_bg');
				$(this).addClass('cur_page_bg');
				//列表数据
				list(kk);
			})
			
			list(0);
			//加载list请求
			function list(node){
				$.ajax({
					url:"data/data3.json",
					success:function(arr){
						var atr = arr[node];
						
						
						
						for(var i = 0;i < atr.length;i++){
							
							if(atr[i].price2){
								$(`<li class="mob_pro  ">
									<a href="goods.html" class="ui_pimg" target="_blank">
									<img src="${atr[i].img}" alt="${atr[i].name}" width="300" height="300">
									</a>
									<p class="ui_pname">
									<a href="goods.html" target="_blank">${atr[i].name}<span class="ui_pslogan">${atr[i].detail}</span></a>
									</p>
									<div class="mask" >
									<p class="charator">${atr[i].detail}</p>
									<a href="goods.html" target="_blank" class="view">查看详情</a>
									</div>
									<p class="ui_price"><span class="ui_pprice"><em>¥</em><span>${atr[i].price1}</span></span><span class="ui_pprice_m"><em>¥</em><del>${atr[i].price2}</del></span></p>
									</li>`).appendTo($('#JmobileList'));
							}else{ 
								$(`<li class="mob_pro">
									<a href="goods.html" class="ui_pimg" target="_blank">
									<img src="${atr[i].img}" alt="${atr[i].name}" width="300" height="300">
									</a>
									<p class="ui_pname">
									<a href="goods.html" target="_blank">${atr[i].name}<span class="ui_pslogan">${atr[i].detail}</span></a>
									</p>
									<div class="mask" >
									<p class="charator">${atr[i].detail}</p>
									<a href="goods.html" target="_blank" class="view">查看详情</a>
									</div>
									<p class="ui_price"><span class="ui_pprice"><em>¥</em><span>${atr[i].price1}</span></span></p>
									</li>`).appendTo($('#JmobileList'));
							} 
							
						
						}
					}
				})
			}
			
			
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
			
			
			/*读取是否存在用户信息的cookie*/
			
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
			
			
			
			
			$('#JmobileList').on('mouseover','li',function(){
				$(this).find('div').stop().slideDown(500);
				
			})
			
			$('#JmobileList').on('mouseout','li',function(event){
				$(this).find('div').stop().slideUp(500);
				
			})
			
		
		
			
	/* 结尾 */
		}
	)}
	
	
	return {
		list : list
	}
})			