var db = require('../db/userSchema');
var handler = require('./request-handler');
var express = require('express');
var bluebird = require('bluebird');
var app = express();
// var mongoose = require('mongoose');
// mongoose.Promise = bluebird;

app.set('views', __dirname + '/../');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.use(express.static(__dirname + '/../'));

app.get('/', handler.renderIndex);

app.listen(3000, function() {
  console.log('listening on port 3000');
})
