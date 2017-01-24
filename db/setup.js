//MONGOOSE
var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/mvp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('db connection open');
});
