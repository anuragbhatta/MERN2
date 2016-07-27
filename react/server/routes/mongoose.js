var express = require('express');
var app = express();
var mongoose = require("mongoose");
var fdata = {};
var bodyParser = require("body-parser");
var User = require(".././models/students");
​
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/users')
var db = mongoose.connection;
​
​
app.get('/', function (req, res) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
    User.find({age:35}, function(err, data){
      fdata = data;
    });
​
  });
  res.send(fdata);
});
​
module.exports = app;
