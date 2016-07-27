/* var mongoose = require("mongoose");
	​
	var StudentDetailsSchema = mongoose.Schema({
	name: String,
	age: Number,
	location: { city: String, country: String }
	});
	​
module.exports = mongoose.model("studentdetails", StudentDetailsSchema); */

var mongoose = require('mongoose');
var movieSchema = mongoose.Schema({"Title":String,
	"Year":String,
	"Rated":String,
	"Released":String,
	"Runtime":String,
	"Genre":String,
	"Director":String,
	"Writer":String,
	"Actors":String,
	"Plot":String,
	"Language":String,
	"Country":String,
	"Awards":String,
	"Poster":String,
	"Metascore":String,
	"imdbRating":String,
	"imdbVotes":String,
	"imdbID":String,
	"Type":String,
	"Response":String});

module.exports = mongoose.model('moviesdb',movieSchema);

/* var demo = {"Title":"Fury","Year":"2014","Rated":"R","Released":"17 Oct 2014","Runtime":"134 min","Genre":"Action, Drama, War","Director":"David Ayer","Writer":"David Ayer","Actors":"Brad Pitt, Shia LaBeouf, Logan Lerman, Michael Peña","Plot":"1945, in the World War II Germany, the tough Sergeant Don 'Wardaddy' Collier commands a tank and survives a German attack with his veteran crew composed of Boyd 'Bible' Swan, Trini 'Gordo' ...","Language":"English, German","Country":"USA, China, UK","Awards":"5 wins & 19 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg","Metascore":"64","imdbRating":"7.6","imdbVotes":"298,577","imdbID":"tt2713180","Type":"movie","Response":"True"}; */