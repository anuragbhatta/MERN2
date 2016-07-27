var express=require('express');
var router=express.Router();
var data=[];
var mongoose=require('mongoose');
var requestify=require('requestify');
var schema = require("./schema");
mongoose.connect('localhost:27017/movie');
var db=mongoose.connection;

router.get("/insert/:name",function(req,res){
	var name=req.params.name;
	console.log(name);
	​
	requestify.get("http://www.omdbapi.com/?t="+name+"&y=&plot=full&r=json").then(function(res1){
		var moviedata=JSON.stringify(res1.getBody());
		//console.log(moviedata);
		var schema1=new schema1(moviedata);
		console.log(moviemodel);
		schema1.save(function(err,doc){//this part is not working
			if(err) throw err;
			res.send(moviedata);
			res.end("Insert sucessfully");
		});
		​
	});
});

router.get("/show",function(req,res){
	db.on("error",console.error.bind(console,"connection Error:"));
	db.open('open',function(){
		schema.find(function(error,docs){
			res.end(JSON.stringify(docs));
			​
		});
		​
	});
	​
});
​
router.put("/update/:name/:year",function(req,res){
	var name = req.params.name;
	var year = req.params.year;
	console.log(name);
	for (var i = 0; i < data.length; i++) {
		console.log("Title" + data[i].Title);
		if(name == data[i].Title){
			data[i].Year = year;
		}
	}
	res.end("Updated data");
});

router.delete('/delete/:name',function(req,res){
	var name = req.params.name;
	for (var i = 0; i < data.length; i++) {
		if(name == data[i].Title){
			data.splice(data.indexOf(name),1);
		}
		​
	}
	res.end("delete sucessfully");
});

module.exports = router;
