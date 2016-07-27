/*
	Fibbonacci
	
*/
	
var i;
var limit = 10;
var fib = [];
fib[0] = 0;
fib[1] = 1;
for(i = 2; i <= limit; i++){
    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);
	console.log(", ")
}
