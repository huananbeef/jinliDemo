define(["jquery","jquery-cookie"],function($){
	
	var main = function(){
		$(function(){
			
			
			
			/*购物车信息*/
						var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
						console.log(cartStr);
						if(!cartStr) {
							
							$(".blank").css({
								display: "block"
							});
							
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
									var str = '<div class="marginTop cartGoodsList cartGoodsList_1-normal" name="goodsList_carttype" pic=" '+ id + '">' +
												'<table width="100%" border="0" cellspacing="0" cellpadding="0" class="inTable" id="tbHover" data-carttype="1-normal">' +
													'<tbody>'+
														'<tr class="border">'+
															'<td width="8%" class="btn_fx">'+
																'<input type="checkbox" name="goodsSelect" value="" class="goodsSelect">'+
															'</td>'+
															'<td width="8%" class="left">'+
																'<a href="" target="_blank" class="prod-img">'+
																'<img src=" ' + good.src + ' "></a>'+
															'</td>'+
															'<td class="left">'+
																'<a href="" target="_blank" class="title">' + good.name + '</a>'+
																'<br>'+
																 good.type + 
																'<br>'+
																'<span class="red"></span>'+
																'<br>'+
																'<ins id="error_5152044"></ins>'+
															'</td>'+
															'<td width="13%" class="dj_price">'+
																'¥<b>' + good.price +'</b><br>'+
															'</td>'+
															'<td width="13%">'+
																'<span class="jj_box">'+
																	'<a title="减少" class="left   subAmount cartSubAmount">-</a>'+
																	'<input name="input" class="editAmount cartEditAmount" type="text" value="'+ good.num+' " maxlength="3" minvalue="1" maxvalue="500" }" >'+
																	'<a title="增加" class="right  addAmount cartAddAmount">+</a>'	+		 
																'</span>'+
															'</td>'+							
															'<td class="xj_price" width="13%">'+
																'¥<b>' + totalprice + '</b>'+
															'</td>'+
															'<td width="13%" class="btn_edit">'+
																'<div class="tip_fram col-blue addFavoriteSuccess" style="display:none">'+
																	'<div class="tip_content">'+
																		'<p>'+
																			'<i class="suc-icon"></i>'+
																			'加入收藏夹成功!'+
																		'</p>'+
																	'</div>'+
																	'<b class="tip_icon"></b>'+
																'</div>'+
																'<div class="tip_fram col-red addFavoriteFail" style="display:none">'+
																
																'<b class="tip_icon"></b>'+
																'</div> '+
																	'<br>'+
																'<a class="btn-remove removeGoods" data-goodsnum="2">删除</a>'+
															'</td>'+
														'</tr>'+
													'</tbody>'+
												'</table>'+
												'</div>'
									//将上面的结构添加到cartList中去
									$(str).insertAfter(".trTitle");
									
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
						
						//给每个商品添加从购物车删除的事件
						$('.removeGoods').click(function() {
							//在页面上将商品信息删除，顺便获取一个该商品的id
								var id = parseInt($(this).parent().parent().parent().parent().parent().attr("pic"));
								$(this).parent().parent().parent().parent().parent().remove();
								
								
								if(!$('.cartGoodsList_1-normal').attr('pic')){
									$('#shoppinglist').css('display','none');
									$(".blank").css({
										display: "block"
									});
									
									$(".cart_empty").css({
										display: "block"
									});
									$.cookie('cart',null)
								}
								
								
								/* $('.cart_shopping').remove(); */
							//从cookie中将该商品删除
								var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
								
								var cartObj = convertCartStrToObj(cartStr);
								
								delete cartObj[id];
								console.log(cartObj);
								
							$.cookie('cart', convertObjToCartStr(cartObj), {
								expires: 7,
								path: "/"
							});
							
						})
					
					
					
					
					
					
					
			
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
			
			
			
			/* 购物车增减*/
			$('.cartAddAmount').click(function(){
				
				var id = parseFloat($(this).parent().parent().parent().parent().parent().parent().attr("pic"))
				
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				var cartObj = convertCartStrToObj(cartStr);
				cartObj[id].num = Number(cartObj[id].num) + 1;
				//将页面上显示的数量加1
				$(this).siblings("input").val("" + cartObj[id].num);
				//更新页面上的小计
				//该商品总价
				$(this).parent().parent().next().children().html(cartObj[id].num * cartObj[id].price + "");
				$('.total_num_1-normal').html(goodsListAll)
				$('.total_1-normal').text(goodsPriceAll + parseInt(cartObj[id].price));
				
				
				var goodsPriceAll = 0;
				var goodsListAll = 0;
				for(var id in cartObj) {
					var good = cartObj[id];
					goodsListAll += parseInt(good.num);
					goodsPriceAll += parseInt(good.num) * parseInt(good.price);
				}
				$('.total_num_1-normal').html(goodsListAll)
				$('.total_1-normal').text(goodsPriceAll);
				/*右上购物车*/
				$('#JcartNum').text(goodsListAll);
				$('#JcartBd .total .spl').text(goodsListAll);
				$('#JcartBd .total .spp').text(goodsPriceAll);
				
				//将信息放回cookie
				
				$.cookie('cart', convertObjToCartStr(cartObj), {
					expires: 7,
					path: "/"
				});
				console.log(cartObj);
			})
			
			$('.cartSubAmount').click(function(){
				
				var id = parseFloat($(this).parent().parent().parent().parent().parent().parent().attr("pic"))
				
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				var cartObj = convertCartStrToObj(cartStr);
				cartObj[id].num = Number(cartObj[id].num) - 1;
				//将页面上显示的数量加1
				$(this).siblings("input").val("" + cartObj[id].num);
				//更新页面上的小计
				$(this).parent().parent().next().children().html(cartObj[id].num * cartObj[id].price + "");
				$('.total_num_1-normal').html(goodsListAll)
				$('.total_1-normal').text(goodsPriceAll + parseInt(cartObj[id].price));
				var goodsPriceAll = 0;
				var goodsListAll = 0;
				for(var id in cartObj) {
					var good = cartObj[id];
					goodsListAll += parseInt(good.num);
					goodsPriceAll += parseInt(good.num) * parseInt(good.price);
				}
				$('.total_num_1-normal').html(goodsListAll)
				$('.total_1-normal').text(goodsPriceAll);
				/*右上购物车*/
				$('#JcartNum').text(goodsListAll);
				$('#JcartBd .total .spl').text(goodsListAll);
				$('#JcartBd .total .spp').text(goodsPriceAll);
				
				//将信息放回cookie
				$.cookie('cart', convertObjToCartStr(cartObj), {
					expires: 7,
					path: "/"
				});
			})
			
				
		/*右上小小购物车*/
		$('#Jcart').hover(function(){
			$('#Jcart').addClass('cart_hover');
			$('#JcartBd').finish().fadeIn();
		},function(){
			$('#Jcart').removeClass('cart_hover');
			$('#JcartBd').finish().fadeOut();
		})
			
		//给每个商品添加从购物车删除的事件
		$('.removeGoods').click(function() {
			//在页面上将商品信息删除，顺便获取一个该商品的id
				var id = parseInt($(this).parent().parent().parent().parent().parent().attr("pic"));
				$(this).parent().parent().parent().parent().parent().remove();
				
				
				if(!$('.cartGoodsList_1-normal').attr('pic')){
					$('#shoppinglist').css('display','none');
					$(".blank").css({
						display: "block"
					});
					
					$(".cart_empty").css({
						display: "block"
					});
					$.cookie('cart',null)
				}
				
				
				/* $('.cart_shopping').remove(); */
			//从cookie中将该商品删除
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				
				var cartObj = convertCartStrToObj(cartStr);
				
				delete cartObj[id];
				console.log(cartObj);
				
			$.cookie('cart', convertObjToCartStr(cartObj), {
				expires: 7,
				path: "/"
			});
			
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
					/* alert('未登录'); */
				}
				
				
			}
			userCookie();
			


			



			/*最近购买商品*/
			$('.recentgoods li').hover(function(){
				$('.recentgoods li').removeClass('user_hov')
				$(this).addClass('user_hov');
			})
			
			
			
			
			/*公共结尾部分*/
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
		})
		
		
		
		
		
		}
			
			return {
				main : main
			}
			
})