var express = require('express');
var router = express.Router();
var cal = require("./calculate");

router.get('/', function(req, res, next){
  res.send('This is addition /');
});

router.get('/add', function(req, res, next){
  res.send('This is addition /add');
});

router.get('/add/:a/:b', function(req, res, next){
	//console.log(parseInt(req.params.a)+parseInt(req.params.b));
	var temp = {"a" : parseInt(req.params.a), "b" : parseInt(req.params.b)};
	temp.result = cal.add(temp.a, temp.b);
	//console.log(temp.a + temp.b);
	//parseInt(req.params.a), parseInt(req.params.b) ,req.param("b")
	res.json({add : temp.result});
	//res.send(200);
	//res.status(200).end();
	//res.status(200).send(temp.result);
});

router.get('/sub/:a/:b', function(req, res, next){
	var temp = {"a" : parseInt(req.params.a), "b" : parseInt(req.params.b)};
	temp.result = cal.sub(temp.a, temp.b);
	res.json({sub : temp.result});
});

router.get('/mul/:a/:b', function(req, res, next){
	var temp = {"a" : parseInt(req.params.a), "b" : parseInt(req.params.b)};
	temp.result = cal.mul(temp.a, temp.b);
	res.json({mul : temp.result});
});

router.get('/div/:a/:b', function(req, res, next){
	var temp = {"a" : parseInt(req.params.a), "b" : parseInt(req.params.b)};
	temp.result = cal.div(temp.a, temp.b);
	res.json({div : temp.result});
});

module.exports = router;


/* ​
console.log("addition = "+cal.add(1,2));
console.log("substraction = "+cal.sub(6,2));
console.log("Muliply ="+cal.multi(6,2));
console.log("Devide = "+cal.devide(6,2)); */


//

//

/* var fun=require('./cal')
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})
app.get('/data', function (req, res) {
 var obj={"name":"abc","age":56};
  res.json(obj);
})
app.get('/add/:param1/:param2', function (req, res) {
 res.send("addition:"+fun.add(parseInt(req.param("param1")),parseInt(req.param("param2"))));

})
app.get('/sub/:param1/:param2', function (req, res) {
 res.send("substraction:"+fun.sub(parseInt(req.param("param1")),parseInt(req.param("param2"))));

})

app.get('/mul/:param1/:param2', function (req, res) {
 res.send("Multiplication:"+fun.multipliioncat(parseInt(req.param("param1")),parseInt(req.param("param2"))));

})
app.get('/div/:param1/:param2', function (req, res) {
 res.send("Division:"+fun.division(parseInt(req.param("param1")),parseInt(req.param("param2"))));

})
var server = app.listen(8080, function () {

 var host = server.address().address
 var port = server.address().port

 console.log("Example app listening at http://%s:%s", host, port)

}) */