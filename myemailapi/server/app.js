var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var msg = require('./routes/messages');

/* var calc = require('./routes/calserver3.js');
var movie = require('./routes/movie.js');
var movies = require('./routes/movie3.js');
var movie4 = require('./routes/movie4.js'); */

var app = express();

// var passport = require('passport');
// var Strategy = require('passport-local').Strategy;
// var connectflash = require('connect-flash');

//database
/* var mongoose = require('mongoose');
var dburl = 'localhost:27017/moviesdb';
mongoose.connect(dburl);
var db = mongoose.connection; */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/msg', msg);

//app.use('/', routes);
//app.use('/', calc);
//app.use('/users', users);

/* app.use('/movie', movie);
app.use('/movies', movies);
app.use('/omdb/insert', movie4);
app.use('/omdb/update', movie4);
app.use('/omdb/delete', movie4);
app.use('/omdb/readAll', movie4);
app.use('/omdb/read', movie4); */

/* app.use('/add', calc);
app.use('/sub', calc);
app.use('/mul', calc);
app.use('/div', calc); */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
