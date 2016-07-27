/*
	Pyramid
	
	
	var i;
var j;
var x = 10;
var y = 10;
var output = [];
output.push(" ");
console.log(" ");

for (i = 0; i < x; i ++){
    for (j = 0; j < y; j++){
		if(i >= j)
			output.push("*");
		else
			output.push(" ");
	}
	output.push("\n");
}
console.log.apply(console, output);
*/
	
var i;
var j;
var k;
var x = 10;
var y = 10;
var output = [];
var output2 = [];
var output3 = [];
output.push(" ");
console.log(" ");

for (i = 0; i < x; i ++){
    for (j = 0; j < y; j++){
		if(i j)
			output2.push("*");
		else
			output2.push(" ");
	}
	output2.push("\n");
}
console.log.apply(console, output2);

for (i = 0; i < x; i++){
    for (j = 0; j < y-i; j++){
			output.push(" ");
		}
	for(k = 0; k <= i; k++){
			output.push("*");
		}
	output.push("\n");
}
console.log.apply(console, output);
