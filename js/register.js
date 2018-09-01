define(["jquery","jquery-cookie"],function($){
	
	var register = function(){
		
		$(function(){
			//生成随机验证码
			function testCode(n){
				var arr = [];
				var sum = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
				var len = sum.length;
				for(var i = 0; i < n ;i++){
					var num = parseInt(Math.random() * len);
					arr.push(sum[num])
				}
				return arr.join("")
			}
			//首页验证码
			$('#rd').html(testCode(4));
			$('#rd').click(function(){
				$(this).html(testCode(4))
			})
			
			
			//注册01验证
			$('#username').blur(function(){
				var phoneName = $(this).val();
				var reg = /^1(3|4|5|7|8)[0-9]\d{8}$/;
				if(!phoneName){
					$('.error_1').css('display','block');
					$('.error_1 .error-con').html('请输入手机号码');
					$('.error_1').attr('errorTrue','0');
				}else if(!reg.test(phoneName)){
					$('.error_1').css('display','block');
					$('.error_1 .error-con').html('请输入正确的号码');
					$('.error_1').attr('errorTrue','0');
				}else{
					$('.error_1').css('display','none');
					$('.error_1').attr('errorTrue','1');
				}
				
			})
			$('#validCode').blur(function(){
				var phoneName = $(this).val();
				var reg = $('#rd').html();
				if(phoneName != reg){
					$('.error_11').css('display','block');
					$('.error_11 .error-con').html('请输入正确验证码');
					$('.error_11').attr('errorTrue','0');
				}else{
					$('.error_11').css('display','none');
					$('.error_11').attr('errorTrue','1');
				}
				
			})
			
			//接收密码账号
			var PhoneName ="";
			var Password = "";
			$('#reg1').click(function(){
				var isTrue1 = Number($('.error_1').attr('errorTrue'));
				var isTrue2 = Number($('.error_11').attr('errorTrue'));
				var sum = isTrue1 + isTrue2;
				alert(sum);
				if(sum == 2){
						PhoneName =$('#username').val();
						$(this).parent().parent().css('display','none');
						$('#regForm2').stop().fadeIn();
						$('header ul li').eq(1).addClass('selected');
						$('header ul li').eq(2).addClass('selected');
						$('#numb').html(PhoneName);
				}else{
					alert("请填写正确信息");
				}
			})
			
			$('#password').blur(function(){
				var password = $(this).val();
				var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
				if(!password){
					$('.error_2').css('display','block');
					$('.error_2 .error-con').html('请输入密码');
					$('.error_2').attr('errorTrue','0');
				}else if(!reg.test(password)){
					$('.error_2').css('display','block');
					$('.error_2 .error-con').html('密码需满足数字字母下划线');
					$('.error_2').attr('errorTrue','0');
				}else{
					$('.error_2').css('display','none');
					$('.error_2').attr('errorTrue','1');
				}
				
			})
			$('#repassword').blur(function(){
				var repassword = $(this).val();
				var reg = $('#password').val();
				if(repassword != reg){
					$('.error_3').css('display','block');
					$('.error_3 .error-con').html('两次密码需相同');
					$('.error_3').attr('errorTrue','0');
				}else{
					$('.error_3').css('display','none');
					$('.error_3').attr('errorTrue','1');
				}
				
			})
			
			$('#reg2').click(function(){
				var isTrue1 = Number($('.error_2').attr('errorTrue'));
				var isTrue2 = Number($('.error_3').attr('errorTrue'));
				var sum = isTrue1 + isTrue2;
				if(sum == 2){
						Password =$('#password').val();
						
						$.ajax({
							type: "post",
							url: "http://localhost/jinlidemo/dist/php/register.php",
							data:{username:$('#username').val(),password:$('#password').val()},
							contentType: 'application/x-www-form-urlencoded;charset=utf-8',
							/* dataType:"json", */
							success:function(data){
								alert(data);
								location.href="login.html";
							},
							error:function(msg){
								
								alert('注册失败');
							}
						})
						
								
						
				}else{
					alert("请填写正确信息");
				}
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
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
					register : register
				}
			})			