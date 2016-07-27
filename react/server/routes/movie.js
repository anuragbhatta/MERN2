var express = require('express');
var movie = require('node-movie');
var router = express.Router();

var list = [];

movie('fury', function (err, data) {
    list.push({'fury' : data});
});
movie('batman', function (err, data) {
	list.push({'batman' : data});
});
/* movie('superman', function (err, data) {
    list.push({'superman' : data});
	});
	movie('jaws', function (err, data) {
    list.push({'jaws' : data});
	});
	movie('the dark night', function (err, data) {
    list.push({'fury' : data});
	});
	movie('titanic', function (err, data) {
    list.push({'fury' : data});
}); */


router.get('/insert/:name', function(req, res, next){
	movie(req.params.name, function (err, data){
		var name = req.params.name;
		//var temp = {};
		list.push({[name] : data});
	});
	var name = req.params.name;
res.json({[name] : "Data successfully entered"});
});

router.get('/update/:name', function(req, res, next){
	var name = req.params.name;
    list[name] = list[0].
	res.json({[name] : "Data successfully updated"});
});

router.get('/read/:name', function(req, res, next){
	var name = req.params.name;
	res.json({[name] : list[name]});
});

router.get('/read', function(req, res, next){
	res.json({"Movie list" : list});
});

router.get('/delete/:name', function(req, res, next){
	var name = req.params.name;
	console.log(list);
	var i = list.indexOf();
	console.log(i);
	console.log(name.toString());
	if(i != -1) {
		list.splice(i, 1);
	}
	res.json({[name] : "Data successfully deleted"});
});

module.exports = router;
