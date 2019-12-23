//$(function(){
//	//定义正则表达式来验证密码
//	var pattern = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
//	//手机号正则格式
//	var phoneReg = /^1[345789]\d{9}$/;
//	$('#a1').click(function(){
//		var user = document.getElementById('user').value;
//		var email = document.getElementById('email').value;
//		var pass = document.getElementById('password').value;
//		var phone = document.getElementById('phone').value;
//		//判断input框里的值是否满足要求
//		if(user==""){
//			$('.warning').empty();
//			$('.warning').append("用户名不能为空");
//		}else {
//			$('.warning').empty();
//		}
//		
//		if(email==""){
//			$('.warning-two').empty();
//			$('.warning-two').append("验证码不能为空");
//		}else {
//			$('.warning-two').empty();
//		}
//		
//		if(pass==""){
//			$('.warning-three').empty();
//			$('.warning-three').append("密码不能为空");
//		}else {
//			$('.warning-three').empty();
//		}
//		
//		if(phone==""){
//			$('.warning-four').empty();
//			$('.warning-four').append("手机号不能为空");
//		}else{
//			$('.warning-four').empty();
//		}
//		
//		
//		
//		 if(!pattern.test(pass)){
//			$('.warning-three').empty();
//			$('.warning-three').append("请输入正确的密码格式");
//		}else{
//			$('.warning-three').empty();
//		}
//		
//		if(!phoneReg.test(phone)){
//			$('.warning-four').empty();
//			$('.warning-four').append("请输入正确的手机号");
//		}else{
//			$('.warning-four').empty();
//		}
//		
//		
//		var user = $('#user').val();
//					var passwd = $('#password').val();
////					console.log(user);
////					console.log(passwd);
//					
//						$.ajax({
//							type:"post",
//							url:"../PHP/register1.php",
//							data:$('form').serialize(),
//							success:function(res){
//								console.log(res);
//								if(res ==1){
//									window.location.assign("log.html");
//								}
//								
//							}
//						});
//	})
//	
//})
