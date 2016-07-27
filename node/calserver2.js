var http = require('http');
var url = require("url");
const PORT = 8080;

var server = http.createServer(function (req, res) {
	
	res.writeHead(200, { 'Content-Type': 'text/html' });
	var cal = require('./calculate');
	var query = url.parse(req.url, true).query;
	var data = query["data"];
	var i = query["i"];
	var j = query["j"];
	
	res.write('<!DOCTYPE "html">');
	res.write('<html>');
	res.write('<head>');
	res.write('<title>Calcualtor</title>');
	res.write('</head>');
	res.write('<body>');
	res.write("<h1>This is a calculator</h1>");
	
	if (data == "add")
	{
		var temp = cal.add(i, j);
		res.write(temp.toString());
	}
	else if (data == "sub")
	{
		var temp = cal.sub(i, j);
		res.write(temp.toString());
	}
	else if (data == "mul")
	{
		var temp = cal.mul(i, j);
		res.write(temp.toString());
	}
	else if (data == "div") 
	{
		var temp = cal.div(i, j);
		res.write(temp.toString());
	}
	else
	{
		res.write("Please enter valid data only");
	}
	res.write('</body>');
	res.write('</html>');
	res.end();
});
server.listen(PORT);
console.log("server listening on http://localhost:" + PORT);