define(["jquery","jquery-cookie"],function($){
	
	var main = function(){
		
		
		$(function(){
			/*nav导航条浮动*/
			
			$(document).scroll(function(){
				if($(document).scrollTop() > 100){
					
						$('.top_nav').addClass('fixed')
					}else{
						$('.top_nav').removeClass('fixed')
					} 
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
					/* alert('未登录') */
				}
				
				
			}
			userCookie();
			
			
			
			
			/* 隐藏内容展示01 */
			$(document).on('click','.show-icon1',function(){
				var _this = $(this);
				
				$(this).prev().fadeOut()
				$(this).css('display','none');
				$(this).next().css('display','block').click(function(){
					_this.css('display','block');
					_this.prev().fadeIn();
					$(this).css('display','none');
					/* $('#list1').css('display','none'); */
					$('#list1').slideUp('slow');
					$('html,body').animate({scrollTop:$('.section5').offset().top - 2500},800)
				});
				/* $('#list1').css('display','block'); */
				$('#list1').slideDown('slow');
				/*隐藏按钮01浮动*/
				$(document).scroll(function(){
					/* console.log($(document).scrollTop()); */
					
					if($(document).scrollTop() > 3640 && $(document).scrollTop() < 5540){
							 _this.next().css({"position": 'fixed','top': '100px'})
						}else{
							 _this.next().css({'position': 'absolute','top':'950px'})
						}
					})
			})
		/*轮播图新方法1*/
		
		
		function Slider1(){
			let timer = null;
			var indexA = 0;
			for(var i = 0; i < $('#list1 li .swiper-slide').length;i++){
				 $('#list1 li .swiper-slide').eq(i).attr('data-swiper-slide-index',i);
			}
			
			
			//左右键实现跳转动画
			$('#list1').on('click','.swiper-button-next',function(){
				
				/* $('#list1 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
				$('#list1 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list1 li .swiper-slide').css('display','none');
				indexA ++;
				if(indexA >= $('#list1 li .swiper-slide').length){
					indexA = 0;
				}
				
				/* $('#list1 li .swiper-slide').eq(indexA).finish().fadeIn('slow').addClass('swiper-slide-duplicate-active');
				$('#list1 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				 */
				$('#list1 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list1 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
			})
			$('#list1').on('click','.swiper-button-prev',function(){
				
				/* $('#list1 li .swiper-slide').removeClass('swiper-slide-duplicate-active'); */
				$('#list1 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list1 li .swiper-slide').css('display','none');
				indexA --;
				if(indexA < 0){
					indexA = $('#list1 li .swiper-slide').length - 1;
				}
				
				$('#list1 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list1 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				
			})
			
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
					/* $('#list1 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
					$('#list1 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
					$('#list1 li .swiper-slide').css('display','none');
					indexA ++;
					if(indexA >= $('#list1 li .swiper-slide').length){
						indexA = 0;
					}
					$('#list1 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
					
					$('#list1 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).addClass('swiper-pagination-bullet-active');
					
				},2000)
			}
			//给大盒子添加移入移除事件
			$('#list1').mouseenter(function(){
				clearInterval(timer);
			})
			$('#list1').mouseleave(function(){
				autoPlay();
			})
		}
		Slider1()
		
		/*隐藏内容02*/
		$(document).on('click','.show-icon2',function(){
			var _this = $(this);
			
			$(this).prev().fadeOut()
			$(this).css('display','none');
			$(this).next().css('display','block').click(function(){
				_this.css('display','block');
				_this.prev().fadeIn();
				$(this).css('display','none');
				
				$('#list2').slideUp('slow');
				/* $('html,body').animate({scrollTop:$('.section5').offset().top - 2500},800) */
			});
		
			$('#list2').slideDown('slow');
			/*隐藏按钮02浮动*/
			$(document).scroll(function(){
				
				if($(document).scrollTop() > 4475 && $(document).scrollTop() < 5540){
						_this.next().css({"position": 'fixed','top': '100px'})
					}else{
						_this.next().css({'position': 'absolute','top':'1050px'})
					}
				})
		})
		/*隐藏轮播02*/
		function Slider2(){
			let timer = null;
			var indexA = 0;
			for(var i = 0; i < $('#list2 li .swiper-slide').length;i++){
				$('#list2 li .swiper-slide').eq(i).attr('data-swiper-slide-index',i);
			}
			
			
			//左右键实现跳转动画
			$('#list2').on('click','.swiper-button-next',function(){
				
				/* $('#list1 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
				$('#list2 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list2 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
				indexA ++;
				if(indexA >= $('#list2 li .swiper-slide').length){
					indexA = 0;
				}
				
				/* $('#list1 li .swiper-slide').eq(indexA).finish().fadeIn('slow').addClass('swiper-slide-duplicate-active');
				$('#list1 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				*/
				$('#list2 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list2 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
			})
			$('#list2').on('click','.swiper-button-prev',function(){
				
				/* $('#list1 li .swiper-slide').removeClass('swiper-slide-duplicate-active'); */
				$('#list2 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list2 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
				indexA --;
				if(indexA < 0){
					indexA = $('#list2 li .swiper-slide').length - 1;
				}
				
				$('#list2 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list2 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				
			})
			
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
					/* $('#list1 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
					$('#list2 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
					$('#list2 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
					indexA ++;
					if(indexA >= $('#list1 li .swiper-slide').length){
						indexA = 0;
					}
					$('#list2 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
					
					$('#list2 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).addClass('swiper-pagination-bullet-active');
					
				},2000)
			}
			//给大盒子添加移入移除事件
			$('#list2').mouseenter(function(){
				clearInterval(timer);
			})
			$('#list2').mouseleave(function(){
				autoPlay();
			})
		}
		Slider2()
		
		/*隐藏3*/
		
		$(document).on('click','.show-icon3',function(){
			var _this = $(this);
			$(this).prev().fadeOut()
			$(this).css('display','none');
			$(this).next().css('display','block').click(function(){
				_this.css('display','block');
				_this.prev().fadeIn();
				$(this).css('display','none');
				
				$('#list3').slideUp('slow');
				 $('html,body').animate({scrollTop:$('.section5').offset().top + 2000},1500) 
			});
		
			$('#list3').slideDown('slow');
			/*隐藏按钮03浮动*/
			$(document).scroll(function(){
				/* console.log($(document).scrollTop()); */
				if($(document).scrollTop() > 5486 && $(document).scrollTop() < 7334){
						_this.next().css({"position": 'fixed','top': '100px'})
					}else{
						_this.next().css({'position': 'absolute','top':'1000px'})
					}
				})
		})
		/*隐藏轮播03*/
		function Slider3(){
			let timer = null;
			var indexA = 0;
			for(var i = 0; i < $('#list3 li .swiper-slide').length;i++){
				$('#list3 li .swiper-slide').eq(i).attr('data-swiper-slide-index',i);
			}
			
			
			//左右键实现跳转动画
			$('#list3').on('click','.swiper-button-next',function(){
				
				/* $('#list1 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
				$('#list3 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list3 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
				indexA ++;
				if(indexA >= $('#list3 li .swiper-slide').length){
					indexA = 0;
				}
				
				/* $('#list3 li .swiper-slide').eq(indexA).finish().fadeIn('slow').addClass('swiper-slide-duplicate-active');
				$('#list3 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				*/
				$('#list3 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list3 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
			})
			$('#list3').on('click','.swiper-button-prev',function(){
				
				/* $('#list3 li .swiper-slide').removeClass('swiper-slide-duplicate-active'); */
				$('#list3 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list3 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
				indexA --;
				if(indexA < 0){
					indexA = $('#list3 li .swiper-slide').length - 1;
				}
				
				$('#list3 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list3 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				
			})
			
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
					/* $('#list3 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
					$('#list3 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
					$('#list3 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
					indexA ++;
					if(indexA >= $('#list3 li .swiper-slide').length){
						indexA = 0;
					}
					$('#list3 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
					
					$('#list3 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).addClass('swiper-pagination-bullet-active');
					
				},2000)
			}
			//给大盒子添加移入移除事件
			$('#list3').mouseenter(function(){
				clearInterval(timer);
			})
			$('#list3').mouseleave(function(){
				autoPlay();
			})
		}
		Slider3()
		
		
		/*隐藏04*/
		
		$(document).on('click','.show-icon4',function(){
			var _this = $(this);
			$(this).prev().fadeOut()
			$(this).css('display','none');
			$(this).next().css('display','block').click(function(){
				_this.css('display','block');
				_this.prev().fadeIn();
				$(this).css('display','none');
				
				$('#list4').slideUp('slow');
				$('html,body').animate({scrollTop:$('.section5').offset().top + 6000},1500) 
			});
		
			$('#list4').slideDown('slow');
			/*隐藏按钮04浮动*/
			$(document).scroll(function(){
				 console.log($(document).scrollTop()); 
				if($(document).scrollTop() > 9255 && $(document).scrollTop() < 10971){
						_this.next().css({"position": 'fixed','top': '100px'})
					}else{
						_this.next().css({'position': 'absolute','top':'950px'})
					}
				})
		})
		/*隐藏轮播04*/
		function Slider4(){
			let timer = null;
			var indexA = 0;
			for(var i = 0; i < $('#list4 li .swiper-slide').length;i++){
				$('#list4 li .swiper-slide').eq(i).attr('data-swiper-slide-index',i);
			}
			
			
			//左右键实现跳转动画
			$('#list4').on('click','.swiper-button-next',function(){
				
				/* $('#list4 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
				$('#list4 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list4 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
				indexA ++;
				if(indexA >= $('#list4 li .swiper-slide').length){
					indexA = 0;
				}
				
				/* $('#list3 li .swiper-slide').eq(indexA).finish().fadeIn('slow').addClass('swiper-slide-duplicate-active');
				$('#list3 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				*/
				$('#list4 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list4 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
			})
			$('#list4').on('click','.swiper-button-prev',function(){
				
				/* $('#list4 li .swiper-slide').removeClass('swiper-slide-duplicate-active'); */
				$('#list4 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list4 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
				indexA --;
				if(indexA < 0){
					indexA = $('#list4 li .swiper-slide').length - 1;
				}
				
				$('#list4 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list4 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				
			})
			
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
					/* $('#list4 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
					$('#list4 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
					$('#list4 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
					indexA ++;
					if(indexA >= $('#list4 li .swiper-slide').length){
						indexA = 0;
					}
					$('#list4 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
					
					$('#list4 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).addClass('swiper-pagination-bullet-active');
					
				},2000)
			}
			//给大盒子添加移入移除事件
			$('#list4').mouseenter(function(){
				clearInterval(timer);
			})
			$('#list4').mouseleave(function(){
				autoPlay();
			})
		}
		Slider4()
		
		
		
		/*隐藏内容05*/
		$(document).on('click','.show-icon5',function(){
			var _this = $(this);
			$(this).prev().fadeOut()
			$(this).css('display','none');
			$(this).next().css('display','block').click(function(){
				_this.css('display','block');
				_this.prev().fadeIn();
				$(this).css('display','none');
				
				$('#list5').slideUp('slow');
				$('html,body').animate({scrollTop:$('.section5').offset().top + 8000},1500) 
			});
		
			$('#list5').slideDown('slow');
			/*隐藏按钮04浮动*/
			$(document).scroll(function(){
				console.log($(document).scrollTop()); 
				if($(document).scrollTop() > 10164 && $(document).scrollTop() < 11168){
						_this.next().css({"position": 'fixed','top': '100px'})
					}else{
						_this.next().css({'position': 'absolute','top':'1000px'})
					}
				})
		})
		/*隐藏轮播05*/
		function Slider5(){
			let timer = null;
			var indexA = 0;
			for(var i = 0; i < $('#list5 li .swiper-slide').length;i++){
				$('#list5 li .swiper-slide').eq(i).attr('data-swiper-slide-index',i);
			}
			
			
			//左右键实现跳转动画
			$('#list5').on('click','.swiper-button-next',function(){
				
				/* $('#list5 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
				$('#list5 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list5 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
				indexA ++;
				if(indexA >= $('#list5 li .swiper-slide').length){
					indexA = 0;
				}
				
				/* $('#list5 li .swiper-slide').eq(indexA).finish().fadeIn('slow').addClass('swiper-slide-duplicate-active');
				$('#list5 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				*/
				$('#list5 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list5 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
			})
			$('#list5').on('click','.swiper-button-prev',function(){
				
				/* $('#list5 li .swiper-slide').removeClass('swiper-slide-duplicate-active'); */
				$('#list5 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('#list5 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
				indexA --;
				if(indexA < 0){
					indexA = $('#list5 li .swiper-slide').length - 1;
				}
				
				$('#list5 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
				$('#list5 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).finish().fadeIn('slow').addClass('swiper-pagination-bullet-active');
				
			})
			
			//自动轮播
			function autoPlay(){
				timer = setInterval(function(){
					/* $('#list5 li .swiper-slide').removeClass('swiper-slide-duplicate-active');*/
					$('#list5 div .swiper-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
					$('#list5 li .swiper-slide').css('display','none').removeClass('swiper-slide-active');
					indexA ++;
					if(indexA >= $('#list5 li .swiper-slide').length){
						indexA = 0;
					}
					$('#list5 li .swiper-slide').eq(indexA).finish().fadeIn('slow').css('display','block');
					
					$('#list5 div .swiper-pagination .swiper-pagination-bullet').eq(indexA).addClass('swiper-pagination-bullet-active');
					
				},2000)
			}
			//给大盒子添加移入移除事件
			$('#list5').mouseenter(function(){
				clearInterval(timer);
			})
			$('#list5').mouseleave(function(){
				autoPlay();
			})
		}
		Slider5()
		
		/*最后的轮播*/
		function slideLast(){
			let timer = null;
			var indexA = 0;
			for(var i = 0; i < $('.swiper-container0 .swiper-wrapper .swiper-slide').length;i++){
				$('.swiper-container0 .swiper-wrapper .swiper-slide').eq(i).attr('data-swiper-slide-index',i)
			}
			
			for(var i = 0; i < $('.swiper-container0  .swiper-pagination-bullets .swiper-pagination-bullet').length;i++){
				$('.swiper-container0  .swiper-pagination-bullets .swiper-pagination-bullet').eq(i).attr('data-swiper-pagination-index',i)
				
			} 
			
			$('.swiper-container0  .swiper-pagination-bullets').on('click','.swiper-pagination-bullet',function(){
				var _this = $(this);
				var _indexA = $(this).attr('data-swiper-pagination-index');

				$('.swiper-container0  .swiper-pagination-bullets .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
				$('.swiper-container0 .swiper-wrapper .swiper-slide').css('display','none').removeClass('swiper-slide-duplicate-active'); 

				
				
				/* $('.swiper-container0  .swiper-pagination-bullets .swiper-pagination-bullet').eq(_indexA).addClass('swiper-pagination-bullet-active');
				$('.swiper-container0 .swiper-wrapper .swiper-slide').eq(_indexA).addClass('swiper-slide-duplicate-active'); */
				$('.swiper-container0  .swiper-pagination-bullets .swiper-pagination-bullet').eq(_indexA).finish().fadeIn().addClass('swiper-pagination-bullet-active');
				$('.swiper-container0 .swiper-wrapper .swiper-slide').eq(_indexA).finish().fadeIn().css('display','block');addClass('swiper-slide-duplicate-active');
				
			})
		}
		
		slideLast()
		
		
		
		
		/*导航栏01*/
		$('.top_nav ul').on('click','li',function(){
			
			for(var i = 0; i < $('.top_nav ul li').length;i++){
				$('.top_nav ul li').eq(i).attr('data-list-nav',i);
			}
			
			$('.top_nav ul li').removeClass('cen active');
			$(this).addClass('cen active');
			
			$('.navlist').css('display','none')
			
			var navIndex = $(this).attr('data-list-nav');
			
			$('#navlist' + navIndex).css('display','block');
			
			
		})
		
		/*购买窗口*/
		$('#buy').click(function(){
			$('.pop').css('display','block');
		})
		$('.closeBuy').click(function(){
			$('.pop').css('display','none');
		})
		
		$('.input .p1').click(function(){
			var price = Number($('.selectedPhone').attr('price'));
			var str = $('#numbers').val();
			if(str <= 1){
				str = 1
				$('.hint h3 span').html(str*price);
				
			}else{
				str--
			}
			$('#numbers').val(str); 
			$('.hint h3 span').html(str*price)
			
		})
		$('.input .p2').click(function(){
			var price = Number($('.selectedPhone').attr('price'));
			var str = $('#numbers').val();
			str++;
			$('#numbers').val(str); 
			$('.hint h3 span').html(str*price)
		})
		
		$('.fyh,.xyh').click(function(){
			$('.selectColorDiv p').removeClass('selectedPhone');
			$(this).addClass('selectedPhone');
			$('.hint h3 span').html($(this).attr('price'));
			var imgSrc = 'images/goods/' + $(this).attr('pic')+'.jpg';
			$('#selectedImg').attr('src',imgSrc);
			$('.selectedImg').attr('src',imgSrc);
		})
		

		//给购物车按钮添加点击事件
		/******放大镜图片切换*******/
			function det(){
				$('.gallery_nav li').click(function(){
					var index = $(this).index();
					$('.gallery_nav li a').removeClass();
					$('.gallery_nav li a').eq(index).addClass('gall_ashow');
					$('.gallery_nav li a s').removeClass();
					$('.gallery_nav li a s').eq(index).addClass('gall_sshow');
					$('.gallery_cont').removeClass('gall_dshow');
					$('.gallery_cont').eq(index).addClass('gall_dshow')
				})
			}
			
			det()
			
			$('.gallery_cont').hover(function(){
				var index = $(this).index()
				console.log(index)
				$('.zoomPad .float_layer').eq(index).css('display','block');
				$('.zoomWindow').eq(index).css('display','block')
			},function(){
				var index = $(this).index()
				$('.zoomPad .float_layer').eq(index).css('display','none');
				$('.zoomWindow').eq(index).css('display','none')
			}).mousemove(function(e){
				var index = $(this).index()
					// 获取鼠标当前位置
							var pageX = e.pageX;
							var pageY = e.pageY;
							// 获取“缩略图”窗口在整个文档中的偏移位置
							var offsetX = $('.zoomPad .mark').eq(index).offset().left;
							var offsetY = $('.zoomPad .mark').eq(index).offset().top;
							// 计算鼠标在缩略图中的相对位置
							var relativeX = pageX - offsetX;
							var relativeY = pageY - offsetY;
							// 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
							var magOffsetX = $('.float_layer').eq(index).width() / 2;
							var magOffsetY = $('.float_layer').eq(index).height() / 2;
							$('.float_layer').eq(index).css({ left: relativeX - magOffsetX + 'px',
									top: relativeY - magOffsetY + 'px' });
							// 获取“放大镜”框的新位置，后面会用到
							var magX = $('.float_layer').eq(index).position().left;
							var magY = $('.float_layer').eq(index).position().top;
		
							// 二、处理越界情况
		
							// 确定边界
							var maxMagX = $('.zoomPad .mark').eq(index).width() - $('.float_layer').eq(index).width()
							var maxMagY = $('.zoomPad .mark').eq(index).height() - $('.float_layer').eq(index).height()
							// 左边界
							if (magX <= 0) { $('.float_layer').eq(index).css('left', '0px'); }
							// 右边界
							if (magX >= maxMagX) { $('.float_layer').eq(index).css('left', maxMagX + 'px'); }
							// 上边界
							if (magY <= 0) { $('.float_layer').eq(index).css('top', '0px'); }
							// 下边界
							if (magY >= maxMagY) { $('.float_layer').eq(index).css('top', maxMagY + 'px'); }
		
							// 三、其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动
		
							// 按照之前确定的缩放比例移动“原图”窗口中的图片
							// 注意：图片的移动方向与鼠标的移动方向是相反的！
							var originX = magX * 0.8;
							var originY = magY * 0.8;
							$('.zoomWimg img').eq(index).css({ left: -originX + 'px', top: -originY + 'px' });
			})
		
		
		
		
		
		
		
		
		
		

		/*导航栏图库部分*/
		$('.products_pcslist_con').on('mouseover','.products_pcsitem',function(){
			$('.products_pcsitem').removeClass('products_pcsitem_cur');
			$(this).addClass('products_pcsitem_cur').css('color','#ef4222');
			var ind  = Number($(this).attr('tag')) + 1
			var indexPic ='images/goods/' + ind + '.jpg';
			
			$('#albumBigImg').attr('src',indexPic);
		})

		function slideNav(){
			//大图左右按钮
			
			$('#btnBigImgLeft,#albumLeft').click(function(){
				
				$('.products_pcsitem').removeClass('products_pcsitem_cur');
				var str1 = $('#albumBigImg').attr('src');
				var str2 = Number(str1.slice(13,15))
				str2--;
				var ind  = str2
				var indexPic ='images/goods/' + ind + '.jpg';
				$('#btnBigImgRight').finish().fadeIn();
				$('#albumRight').finish().fadeIn();
				
				if(str2 == 1){
					$('#btnBigImgLeft').css('opacity','0');
					$('#albumLeft').css('opacity','0');
					
					$('#albumBigImg').attr('src',indexPic);
					$('.products_pcsitem').eq(str2-1).addClass('products_pcsitem_cur');
				}else if(str2 > 1){
					$('#btnBigImgLeft').finish().fadeIn();
					$('#albumLeft').finish().fadeIn();
					$('#albumBigImg').attr('src',indexPic)
					$('.products_pcsitem').eq(str2 -1).addClass('products_pcsitem_cur')
					
				}
				
			})
			
			$('#btnBigImgRight,#albumRight').click(function(){
				$('.products_pcsitem').removeClass('products_pcsitem_cur');
				var str1 = $('#albumBigImg').attr('src');
				var str2 = Number(str1.slice(13,15))
				str2++;
				var ind  = str2
				var indexPic ='images/goods/' + ind + '.jpg';
				$('#btnBigImgLeft').css('opacity','1');
				$('#albumLeft').css('opacity','1');
				
				if(str2 == $('.products_pcsitem').length){
					
					$('#btnBigImgRight').finish().fadeOut();
					$('#albumRight').finish().fadeOut();
					str2 = $('.products_pcsitem').length;
					$('#albumBigImg').attr('src',indexPic);
					$('.products_pcsitem').eq(str2-1).addClass('products_pcsitem_cur');
				}else if(str2 < $('.products_pcsitem').length){
					$('#btnBigImgRight').finish().fadeIn();
					$('#albumRight').finish().fadeIn();
					$('#albumBigImg').attr('src',indexPic);
					$('.products_pcsitem').eq(str2-1).addClass('products_pcsitem_cur')
					
				}
				
			})

		}
		slideNav()
		
		/*放大镜部分*/
		$('.orig').mouseover(function(e){
						$('.fd').css('display','block');
						$('.blocks').css('display','block');
		
				})
				//绑定鼠标在原图窗口移动的事件
				
		$('.orig').mousemove(function(e){
		
						// 获取鼠标当前的位置
						var x=e.pageX;
						var y=e.pageY;
						// 获取原图窗口距离文档的偏移位置
						var sX=$('.orig').offset().left;
						var sY=$('.orig').offset().top;
		
						// 计算鼠标的相对位置（相对于原图窗口的偏移距离）
						var mx=x-sX;
						var my=y-sY;
		
						// 获取小框框的宽高
						var mw=$('.blocks').width()/2;
						var mh=$('.blocks').height()/2;
		
						// 鼠标移动后小框框的移动距离
						$('.blocks').css({left:mx-mw+'px',top:my-mh+'px'});
		
						// 获取小框框的偏移位置
							var lw=$('.blocks').position().left;
							var lh=$('.blocks').position().top;
		
		
						// 判断边界（小框框只能在原图窗口范围内移动）
							var maxW=$('.orig').width()-$('.blocks').width()
							var maxH=$('.orig').height()-$('.blocks').height()
							// 左边界
							if(lw<=0){$('.blocks').css('left','0px');}
							// 右边界
							if(lw>=maxW){
								$('.blocks').css('left',maxW+'px');
							}
							// 上边界
							if(lh<=0){$('.blocks').css('top','0px');}
							// 下边界
							if(lh>=maxH){
								$('.blocks').css('top',maxH+'px');
							}
		
							// 获取小框框的偏移位置
							var lw=$('.blocks').position().left;
							var lh=$('.blocks').position().top;
						// 计算鼠标在小图里的位置  *2.5计算大图移动的比例
							var newX=lw*0.8;
							var newY=lh*0.8;
		
		
		
						$('.fd img').css({left:-newX+'px',top:-newY+'px'});
				})
				//绑定鼠标离开原图窗口事件
				$('.orig').mouseout(function(){
						$('.fd').css('display','none');
						$('.blocks').css('display','none');
				})


		/*购买*/
		$('#buyBtn').click(function(e){
			var goodId = $('.selectedPhone').attr('pic');
			var goodType = $('.selectedPhone').text();
			var goodPrice = parseFloat($('.selectedPhone').attr('price'));
			var goodSrc = $('#selectedImg').attr('src');
			var goodNumber = parseFloat($('#numbers').val());
			var goodName = $('.selectedPhone').attr('data-name');
			
			//获取cookie
			var cartStr = $.cookie("cart") ? $.cookie("cart"): "";
			//将字符串转成对象
			var cartObj = convertCartStrToObj(cartStr);
			
			if(goodId in cartObj){
				//goodNumber
				cartObj[goodId].num = parseInt(cartObj[goodId].num) + parseInt(goodNumber);

				/* console.log(cart); */
			}else{
				cartObj[goodId] = {
					"name" : goodName,
					"price" : goodPrice,
					"num" : goodNumber,
					"src" : goodSrc,
					"type" : goodType
				};
				
			}
			//将新的购物车信息存回cookie
			//将对象转为字符串
			cartStr = convertObjToCartStr(cartObj);
			/* cartStr = JSON.stringify(cartObj); */
			
			//存放cookie
			$.cookie("cart",cartStr,{expires : 7,path:"/"});
			//飞入购物车效果
			console.log(cartStr);
			/* location.href = "shopping.html"; */
			/* location.href = "shopping.html"; */
		})
		
		function convertCartStrToObj(cartStr){
			if(!cartStr){
				return {};
			}
			var goods = cartStr.split(":");
			var obj = {};
			for(var i = 0; i < goods.length; i ++){
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
			return obj;
			/* console.log(cartStr);
			return JSON.parse(cartStr); */
		}
		function convertObjToCartStr(obj){
					var cartStr = "";
					//遍历对象
					for(var id in obj){
						if(cartStr){
							cartStr += ":";
						}
						
						cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src + "," +obj[id].type;
					}
					return cartStr;
			}
		
		
		//加载购物车中的信息
		function loadCart(){
			var cartStr = $.cookie("cart") ? $.cookie("cart"):"";
			var cartObj = convertCartStrToObj(cartStr);
			//获取到购物车中所有商品的数量
			var total = 0;
			for(var id in cartObj){
				total += cartObj[id].num;
			}
			$('#buy').val("购物车("+ total + ")");
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
		/* 结尾 */
		}
	)}
	
	
	return {
		main : main
	}
	
})