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
			var str = $('#numbers').val();
			if(str <= 1){
				str = 1
				$('.hint h3 span').html(str*2699);
				
			}else{
				str--
			}
			$('#numbers').val(str); 
			$('.hint h3 span').html(str*2699)
			
		})
		$('.input .p2').click(function(){
			var str = $('#numbers').val();
			str++;
			$('#numbers').val(str); 
			$('.hint h3 span').html(str*2699)
		})
		
		$('.fyh,.xyh').click(function(){
			$(this).attr('id');
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