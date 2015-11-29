var KleyMath = {}
	KleyMath.limitTop = function (numberToBeLimited, limiter) {
		KleyMath.validatenumber(numberToBeLimited,limiter);
		if (numberToBeLimited > limiter) {
			numberToBeLimited = limiter
		}
		return numberToBeLimited;
	}
	KleyMath.limitBottom = function (numberToBeLimited, limiter) {
		KleyMath.validatenumber(numberToBeLimited,limiter);
		if (numberToBeLimited < limiter) {
			numberToBeLimited = limiter
		}
		return numberToBeLimited;
	}
	KleyMath.limit = function (numberToBeLimited, bottomLimit, topLimit) {
		KleyMath.validatenumber(numberToBeLimited,bottomLimit,topLimit);
		
		if(bottomLimit>topLimit){
			var temp = topLimit;
			topLimit = bottomLimit;
			bottomLimit = temp;
		}
		
		if (numberToBeLimited > topLimit) {
			numberToBeLimited = topLimit;
		}
		if (numberToBeLimited < bottomLimit) {
			numberToBeLimited = bottomLimit;
		}
		return numberToBeLimited;
	}
	KleyMath.limitMod = function (numberToBeLimited, bottomLimit, topLimit) {
		KleyMath.validatenumber(numberToBeLimited,bottomLimit,topLimit);
		
		if(bottomLimit>topLimit){
			var temp = topLimit;
			topLimit = bottomLimit;
			bottomLimit = temp;
		}
		
		var interval = topLimit - bottomLimit;
		while (numberToBeLimited > topLimit) {
			numberToBeLimited -= interval;
		}
		while (numberToBeLimited < bottomLimit) {
			numberToBeLimited += interval;
		}
		return numberToBeLimited;
	}
	KleyMath.degtorad = function (deg) {
		KleyMath.validatenumber(deg);
		deg = KleyMath.limitMod(deg, -179, 180);
		return deg / 180 * Math.PI;
	}
	KleyMath.radtodeg = function (rad) {
		KleyMath.validatenumber(rad);
		rad = rad / Math.PI;
		deg = rad * 180;
		return KleyMath.limitMod(deg, -179, 180);
	}
	KleyMath.toZero = function (num, decrease) {
		KleyMath.validatenumber(num, decrease);
		if (num > 0) {
			if (num - decrease < 0) {
				num = 0;
			}
			else {
				num -= decrease;
			}
		}
		else if (num < 0) {
			if (num + decrease > 0) {
				num = 0;
			}
			else {
				num += decrease;
			}
		}
		return num;
	}
	KleyMath.distanceFromPointToPoint = function(pt1,pt2){
		var x = pt1.getX() - pt2.getX()
		var y = pt1.getY() - pt2.getY()
		return Math.sqrt(x*x+y*y)
	}
	KleyMath.validatenumber = function (arrayofnumber) {
		var numbers=Array.prototype.slice.call(arguments, 0);
		for(var i = 0; i<numbers.length ; i++){
			if(!(typeof numbers[i] == "number")){
				throw new Error("not number");
			}
		}
	}
	KleyMath.validateinteger = function (arrayofinteger) {
		var numbers=Array.prototype.slice.call(arguments, 0);
		for(var i = 0; i<numbers.length ; i++){
			if(!(numbers[i]%1==0 || numbers[i]%1==-0)){
				throw new Error("not integer");
			}
		}
	}
	KleyMath.between = function(no1,no2,no3){
		if((no1<no2 && no2<no3) || (no1>no2 && no2>no3)){
			return true
		}
		return false
	}
	KleyMath.average = function(arrayofinteger){
		var numbers=Array.prototype.slice.call(arguments, 0);
		var result = 0
		for(var i = 0; i<numbers.length ; i++){
			result += numbers[i]
		}
		result/=numbers.length;
		return result
	}
