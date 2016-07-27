var cal = require("./calculate");
var http = require('http');
var url = require('url');
const PORT = 8080;
var server = http.createServer(function(req,res){
	var data = url.parse(req.url,true);
	res.writeHead(200,{"content-type":"text/html"});
	var data1=data.pathname;
	var data2=data1.split("/");

	if(data2[1]=="add")
	{
		res.write(" i + j = "+cal.add(parseInt(data2[2]),parseInt(data2[3])));
	}
	else if(data2[1]=="sub")
	{
		res.write(" i - j = "+cal.sub(parseInt(data2[2]),parseInt(data2[3])));
	}
	else if(data2[1]=="mul")
	{
		res.write(" i * j = "+cal.mul(parseInt(data2[2]),parseInt(data2[3])));
	}
	else if(data2[1]=="div")
	{
		res.write(" i / j = "+cal.div(parseInt(data2[2]),parseInt(data2[3])));
	}
	else
	{
		res.write("Caluculator.");
		res.write("Please enter valid data only");
	}​
});
server.listen(PORT);
console.log("server listening on http://localhost:" + PORT);
/* ​
console.log("addition = "+cal.add(1,2));
console.log("substraction = "+cal.sub(6,2));
console.log("Muliply ="+cal.multi(6,2));
console.log("Devide = "+cal.devide(6,2)); */