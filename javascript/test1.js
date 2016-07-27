/* var i = 10;
console.log(i);
var b = function(){
	var i = 12;
	console.log(i);
}
b();
console.log(i);
 */
 
/* (function(){
	var i = 10;
	if(true)
	{
		var i = 12;
		console.log(i);
	}
	console.log(i);
})()
 */
var i = 10;
console.log(i);
(function(){
	var i = 12;
	console.log(i);
})();
console.log(i);
