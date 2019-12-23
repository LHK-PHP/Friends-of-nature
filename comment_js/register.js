
$(function(){
	
	//定义正则表达式来验证用户名登录
	var  regExp= /^[1-9][0-9]{4,10}$/;
	var pattern =  /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
	$('.button').click(function(){
		//	获取文本框里的内容
	var user = document.getElementById('user').value;
	
	var pass = document.getElementById('password').value;
		if(user==""||pass==""){
			alert("账号或密码不能为空");
		};
		
		if(!regExp.test(user)){
			$('.warning').empty();
			$('.warning').append("请输入正确的账户");
		}else{
			$('.warning').empty();
		};
		
		 if(!pattern.test(pass)){
			$('.warning-two').empty();
			$('.warning-two').append("请输入正确的密码"); 
		}else{
			$('.warning-two').empty();
		};
		
		
		$.ajax({
			
			type:"post",
			url:"../PHP/register.php",
			data:{'user':user,"passwd":pass},
			success:function(res){
			console.log(res);
								
			var arr=$.parseJSON(res);
			if(arr.length>0){
			
			window.location.replace("enterprise.html")
			}else{
				alert("账号或者密码错误")
			}
//								
								
		}
	});
		
})
	

		


})



