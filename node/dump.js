var dumb = function (){
	var i = 0;

	while(i < 1000)
	{
		console.log(i);
		i++;
	}
}

//dumb();

setImmediate(dumb);
console.log('Finished');
