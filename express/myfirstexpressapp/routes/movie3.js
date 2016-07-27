var schema = require('./schema');
var express = require('express');
//var mongoose = require('mongoose');
var download = require('node-movie');
var router = express.Router();
/* var dburl = 'localhost:27017/moviesdb';
	mongoose.connect(dburl);
var db = mongoose.connection; */
var movieList = [];


/* router.get("/show",function(req,res){
	db.on("error",console.error.bind(console,"connection Error:"));
	db.open('open',function(){
	schema.find(function(error,docs){
	res.json(docs)//res.end(JSON.stringify(docs));​
	});​
	});
}); */

//		Getting All movies
router.get('/read', function(req, res) {
	schema.find({})
	.exec(function (err, results){
		if(err){
			res.json("Error");
		}
		else{
			res.json(results);
		}
	});
});
//		Getting one movie
router.get('/read/:name', function(req, res) {
	// very slow method, because index is not used
	var name = req.params.name;
	var regex = new RegExp(["^", name, "$"].join(""), "i");
	// Creates a regex of: /^name$/i
	schema.findOne({Title : regex })
	.exec(function (err, results){
		if(err){
			res.json("Error");
		}
		else{
			res.json(results);
		}
	});
});

//		Adding a new movie
router.post('/insert/:name', function(req, res, next){
	download(req.params.name, function (err, data){
		var name = req.params.name;
		var newMovie = new schema(data);
		
		//var temp = Object.assign({}, data);
		//console.log(temp);
		
		//console.log(data);
		//console.log(newMovie);
		//list.push({[name] : data});
		newMovie.save(function (err2){
			//schema.create(newMovie, function (err2, results){
			if(err2){
				res.send(err2);
			}
			else{
				res.send("movie inserted");
			}
		});
	});
	//var name = req.params.name;
	//res.json({[name] : "Data successfully entered"});
});


//		deleting a movie
router.delete('/delete/:name', function(req, res) {
	var name = req.params.name;
	var regex = new RegExp(["^", name, "$"].join(""), "i");
	// Creates a regex of: /^name$/i
	console.log(name);
	//schema.remove({_id: req.params.id}, function(err, movie) {
	schema.remove({ Title: regex},
		function(err, newMovie) {
			if(err) {
				res.json("Movie does not exist");
			}
			else{
				res.json({newMovie : "Movie deleted"});
			}
		}
	);
});

//		Updating movie
router.put('/update/:name', function(req, res) {
	var name = req.params.name;
	var regex = new RegExp(["^", name, "$"].join(""), "i");
	// Creates a regex of: /^name$/i
	console.log(name);
	var temp = req.body.Year;
	console.log(req.body.Year);
	console.log(temp);
	schema.findOneAndUpdate({ Title: regex},
	{$set :	{Year : temp}},
		{upsert : false},
		function(err, newMovie) {
			if(err) {
				res.json("Movie does not exist");
			}
			else{
				res.json({newMovie : "Movie updated"});
			}
			/* for(prop in req.body){
				movie[prop] = req.body[prop];
			} */
		}
	);
});


module.exports = router;