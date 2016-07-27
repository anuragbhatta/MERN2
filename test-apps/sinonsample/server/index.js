var express = require('express');
var app = express();
var mongoose = require("mongoose");
var fdata = {};
var bodyParser = require("body-parser");
var User = require(".././models/studentschema");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/users')
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.open('open', function(){
  User.find({age:35}, function(err, data){
    fdata = data;
  });

});

app.get('/users', function (req, res) {
  res.send(fdata);
});

module.exports = app;
