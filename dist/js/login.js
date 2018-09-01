define(["jquery","jquery-cookie"],function($){
	
	var login = function(){
		
		$(function(){	
			$("#btnLogin").click(function(){
				$.ajax({
					type: "post",
					url: "http://localhost/jinlidemo/dist/php/login.php",
					data:{username:$('#lusername').val(),password:$('#lpassword').val()},
					contentType: 'application/x-www-form-urlencoded;charset=utf-8',
					/* dataType:"json", */
					success:function(data){
						var arr = JSON.parse(data);
						if(arr[0] == $('#lpassword').val()){
							value='username=' + $('#lusername').val() +"&"+'password=' + $('#lpassword').val();
							$.cookie('jinliusers',value,{expires:7,path:'/'});
							alert('登录成功');
							window.event.returnValue=false; 
							$.cookie('name',value,{expires:7,path:'/'});
							location.href="http://localhost/jinlidemo/dist/goods.html";
							//isYes = false;					
						}else{
							alert('登录失败');
						}
						
						/* location.href="login.html"; */
					},
					error:function(msg){
						alert(msg)
						alert('登录失败');
					}
				})
				value='username=' + $('#lusername').val() +"&"+'password=' + $('#lpassword').val();
				$.cookie('jinliusers',value,{expires:7,path:'/'});
			})
			
			
			/*创建cookie*/
			
				
			
			
			
			
			/* 结尾 */
					}
				)}
				
				
				return {
					login : login
				}
			})			