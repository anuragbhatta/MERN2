var http = require("http");

const PORT = 8080

var server = http.createServer(function(req, res){
	if(req.url == '/')
	{
		res.writeHead(200, "{Content-type:text/html}");
		res.write("<h1>This is a calculator</h1>");
		res.end();
	}
	
	if(req.url == '/data') 
	{
		var result = "Not found", tmp = [];
		var items = location.search.substr(1).split("/");
		/* for(var i = 0; i < items.length; i++)
		{
			tmp = items[i].split("=");
			if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
		} */
		
		var cal = require("./calculate");
		var i = 40;
		var j = 10;
		
		var obj = {"i + j" : cal.add(i, j)};
		//obj["i + j"] = [cal.add(i, j)];
		obj["i - j"] = [cal.sub(i, j)];
		obj["i * j"] = [cal.mul(i, j)];
		obj["i / j"] = [cal.div(i, j)];
		
		res.writeHead(200, "{Content-type:text/json}");
		res.write(JSON.stringify(obj));
		res.end();
	}
	console.log(req);
});
server.listen(PORT, function() {
	console.log("server listening on http://localhost:" + PORT);
}
);
