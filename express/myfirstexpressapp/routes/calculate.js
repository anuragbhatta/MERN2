var cal = {};
//var temp =  0;
cal.add = function(a, b){
	var temp;
	temp = a + b;
	return temp;
}

cal.sub = function(a, b){
	var temp;
	temp = a - b;
	return temp;
}

cal.mul = function(a, b){
	var temp;
	temp = a * b;
	return temp;
}

cal.div = function(a, b){
	var temp;
	temp = a / b;
	return temp;
}

module.exports = cal;
