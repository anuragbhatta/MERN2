/*
	var object = [5, [22], [[14]], [[4]],[5,6]];
	var flated=[];
	var i;
	
	function flatten(object,flated){
	for (i = 0; i < object.length; i++){
	if(typeof object[i] == 'number'){
	flated.push(object[i]);
	}
	else{
	flatten(object[i],flated);
	}
	}
	}
	
	flatten(object,flated);
	
	console.log.apply(console, flated);
*/

var obj = [5, [22], [[14]], [[4]],[5,6]];
var arr=[];

function fetchObj(obj,arr){
	for (var i = 0; i < obj.length; i++){
		if(typeof obj[i] == 'number'){
			arr.push(obj[i]);
		}
		else{
			fetchObj(obj[i],arr);
		}
	}
}

fetchObj(obj,arr);

console.log.apply(console, arr);
