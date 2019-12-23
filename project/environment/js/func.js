/**
 * 查询网页栏
 * 以数组形式返回
 * multi 获取多个值时写true使用
 */
function search(multi =false) {
	//设置返回数组
	var result = [];
	// 判断是多数据还是单数据
	if (multi) {
		var delo = location.search.substr(1).split('&');
		//循环遍历
		for (var i = 0; i < delo.length; i++) {
			var demo = delo[i].split('=');
			for (var c = 0; c < demo.length; c += 2) {
				var index = demo[c];
				var val = demo[c += 1];
				result[index] = val;
			}
		}
	} else {
		var delo = location.search.substr(1);
		var res = delo.split('=');
		//循环遍历
		for (var i = 0; i < res.length; i += 2) {
			var index = res[i];
			var val = res[i += 1];
			result[index] = val;
		}
	}
	return result;
}
