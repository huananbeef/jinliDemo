	/*分页*/
			$().ready(function(){
	
	var curPage =$(".ui_page_curr").val();
	var last =$("#totalPage").val();
	var page =Math.ceil(curPage/10);
	//调用绘制分页样式函数
	draw(page,curPage);
	
	//绑定点击页码事件
	$(document).on("click",".pagination li a",function(){
		var str =$(this).html();
		if(!isNaN(str)){
			//移除之前的active
			$(".pagination li a").removeClass("active");
			$(this).attr("class","active");
			$("#currentPage").val(str);
		}
	});
	
	//绑定下一页点击事件
	$(document).on("click","#nextPage",function(){
		var num =$(".active").html();
		var curPage =$("#currentPage").val();
		var last =$("#totalPage").val();
		var page =Math.ceil((parseInt(num))/10);
		if(num < page*10 && num != last){
			//移除之前的active
			$(".pagination li a").removeClass("active");
			$("#"+(parseInt(num)+1)+"").attr("class","active");
			//$(".pagination li a[text="+(parseInt(num)+1)+"]").attr("class","active");//jQ1.6支持
			$("#currentPage").val(parseInt(num)+1);
		}else if(num == page*10 && num != last){
			//清空之前的数据
			$(".pagination").html("");
			draw(page+1,(parseInt(num)+1));
		}
	})
	
	//绑定上一页点击事件
	$(document).on("click","#previousPage",function(){
		var num =$(".active").html();
		var curPage =$("#currentPage").val();
		var last =$("#totalPage").val();
		var page =Math.ceil((parseInt(num))/10);
		if(num <= page*10 && num != (page-1)*10+1){
			//移除之前的active
			$(".pagination li a").removeClass("active");
			$("#"+(parseInt(num)-1)+"").attr("class","active");
			//$(".pagination li a[text="+(parseInt(num)+1)+"]").attr("class","active");//jQ1.6支持
			$("#currentPage").val(parseInt(num)-1);
		}else if(num == (page-1)*10+1 && num != 1){
			//清空之前的数据
			$(".pagination").html("");
			draw(page-1,(parseInt(num)-1));
		}
	})
	
	//绘制页面分页样式
	function draw(page,curPage){
		//页面中的当前页
		var page =page;
		//后台传过来的页数
		var curPage = curPage;
		//后台传过来的总页数
		var datas =$("#totalPage").val();
		//每页显示多少条数据
		var pageSize =10;
		//在网页中一共要分多少页
		var totalPage = Math.floor((datas-1)/pageSize+1);
		
		var liStr ="<li><a id='previousPage' href='#'>«</a></li>";
		$("#currentPage").val(curPage);
		if(page <= totalPage){
			if(datas <= 10){
				for(i=1; i<=datas; i++){
					//为当前页增加样式
					var active ="";
					if(i==curPage){
						active=" class='active' ";
					}
					liStr +=" <li><a id="+i+" "+active+" href='#'>"+i+"</a></li>"
				}
			}else{
				var start =pageSize*(page-1)+1;
				var end =page*pageSize;
				if(page == totalPage){
					for(i=start; i<=datas; i++){
						//为当前页增加样式
						var active ="";
						if(i==curPage){
							active=" class='active' ";
						}
						liStr +=" <li><a id="+i+" "+active+" href='#'>"+i+"</a></li>"
					}
				}else{
					for(i=start; i<=end; i++){
						//为当前页增加样式
						var active ="";
						if(i==curPage){
							active=" class='active' ";
						}
						liStr +=" <li><a id="+i+" "+active+" href='#'>"+i+"</a></li>"
					}
				}
			}
		}
		liStr +="<li><a id='nextPage' href='#'>»</a></li>";
		$(".pagination").append(liStr);
	}
})

	/*分页部分*/
					var totalPage = Math.ceil(arr.length / 12);
					var curPage =$(".ui_page_curr").html();
					
					
					//调用绘制分页样式函数
					draw(page,curPage);
					//绑定点击页码
					$(document).on('click','#pager a',function(){
						var str = $(this).html();
						if(!isNaN(str)){
							var content1 = $('.ui_page_curr').html();
							var new1 = $("<a href=''>" + content1 + '</a>');
							new1.after$('.ui_page_curr');
							$('.ui_page_curr').remove();
							
							
							var content2 = $(this).html();
							var new2 = $("<span class='ui_page_curr'>" + content2 + '</span>');
							new2.after($(this));
							$(this).remove();
						}
					})
					//绑定下一页点击事件
					$(document).on("click",".ui_page_next",function(){
						var num = $('.ui_page_curr').html();
						var page = Math.ceil((parseInt(num)) / 12);
						if(num < page * 12 && num !='末页'){
							//移除之前的.ui_page_curr
							var content1 = $('.ui_page_curr').html();
							var new1 = $("<a href=''>" + content + '</a>');
							new1.after$('.ui_page_curr');
							$('.ui_page_curr').remove();
							
							var content2 = num + 1;
							var new2 = $("<span class=''>" + content2 + '</span>');
							new2.after($(this));
							$(this).remove();
							
						}
						
					})
					//绘制页面分页样式
					function draw(page,curPage){
						//页面中的当前页
						 var page = page;
						 //后台传过来的页数
						 var curPage = curPage
						 //后台传过来的总页数
						 var datas = Math.ceil(arr.length);
						 //每页显示多少数据
						 var pageSize = 12;
						 //网页中一共要分多少页
						 var totalPage = Math.ceil(arr.length / 12);
						 var listr = "<a class='ui_page_first' href="">首页</a><a 'class=ui_page_prev' href="">上一页</a>";
						 if(page <= totalPage)
						 
					}
					