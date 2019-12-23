     function gettime(){
		 var timeNow = new Date();
		 var hours = timeNow.getHours();
		  var sj='';
		 if (hours >= 0 && hours <= 10) {
        sj = '早上好,';
    } else if (hours > 10 && hours <= 14) {
        sj = '中午好,';
    } else if (hours > 14 && hours <= 18) {
        sj = '下午好,';
    } else if (hours > 18 && hours <= 24) {
        sj = '晚上好,';
    }
		 document.getElementById("user").innerHTML = sj;  
	 }
     gettime();
