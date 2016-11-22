var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var session      = require('express-session');

app.use(express.static(__dirname + '/public'));

// required for passport
app.use(session({
  secret: 'cs498finalProject',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session()); // persistent login sessions
 app.use(flash());
var port = process.env.PORT || 3000;
mongoose.connect("mongodb://fithub:cs498fa2016@ds161487.mlab.com:61487/fithub");
console.log("Express server running on " + port);
app.listen(port);
