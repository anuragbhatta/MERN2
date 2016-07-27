var schema = require('./schema');
var express = require('express');
//var download = require('node-movie');
var router = express.Router();
var movieList = [];

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
router.post('/', function(req, res, next){
		var movielist = new schema(req.body);
		//var newMovie = new schema(data);
		movielist.save(function (err2){
			//schema.create(newMovie, function (err2, results){
			if(err2){
				res.send(err2);
			}
			else{
				res.send("movie inserted");
			}
		});
	//var name = req.params.name;
	//res.json({[name] : "Data successfully entered"});
});


//		deleting a movie
router.delete('/', function(req, res) {
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
router.put('/', function(req, res) {
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
