(function(){
	var A1 = {};
		A1.x = 0;
		A1.y = 0;
	var A2 = {}
		A2.x = -2;
		A2.y = 1;
	var B1 = {};
		B1.x = 0;
		B1.y = 1;
	var B2 = {}
		B2.x = 1;
		B2.y = 0;
	
	console.log()
	console.log(((B2.y - B1.y) * (A2.x - A1.x)) - ((B2.x - B1.x) * (A2.y - A1.y)))
	
}());