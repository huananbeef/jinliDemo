define(["jquery","jquery-cookie"],function($){
	
	var list = function(){
		
		$(function(){
			/* 导航条部分 */
			$.ajax({
				url:"data/data3.json",
				success:function(arr){
					
					for(var i = 0;i < arr.length;i++){
						alert("1")
						/* if(arr[i].price2){
							$(`<li class="mob_pro  ">
								<a href="javascript:;" class="ui_pimg" target="_blank">
								<img src="${arr[i].img}" alt="${arr[i].name}" width="300" height="300">
								</a>
								<p class="ui_pname">
								<a href="javascript:;" target="_blank">${arr[i].name}<span class="ui_pslogan">${arr[i].detail}</span></a>
								</p>
								<div class="mask" style="display: none;">
								<p class="charator">${arr[i].detail}</p>
								<a href="javascript:;" target="_blank" class="view">查看详情</a>
								</div>
								<p class="ui_price"><span class="ui_pprice"><em>¥</em><span>${arr[i].price1}</span></span><span class="ui_pprice_m"><em>¥</em><del>${arr[i].price2}</del></span></p>
								</li>`).appendTo($('#JmobileList'));
						}else{ */
							$(`<li class="mob_pro  ">
								<a href="javascript:;" class="ui_pimg" target="_blank">
								<img src="${arr[i].img}" alt="${arr[i].name}" width="300" height="300">
								</a>
								<p class="ui_pname">
								<a href="javascript:;" target="_blank">${arr[i].name}<span class="ui_pslogan">${arr[i].detail}</span></a>
								</p>
								<div class="mask" style="display: none;">
								<p class="charator">${arr[i].detail}</p>
								<a href="javascript:;" target="_blank" class="view">查看详情</a>
								</div>
								<p class="ui_price"><span class="ui_pprice"><em>¥</em><span>${arr[i].price1}</span></span></p>
								</li>`).appendTo($('#JmobileList'));
						/* } */
						
					
					}
				}
			})
	/* 结尾 */
		}
	)}
	
	
	return {
		list : list
	}
})			