define(["jquery","jquery-cookie"],function($){
	
	var main = function(){
		$(function(){
			
			
			
			
			
			
			
			
			
			
			
			
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