var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
mongoose.connect("mongodb://fithub:cs498fa2016@ds161487.mlab.com:61487/fithub");
console.log("Express server running on " + port);
app.listen(port);
