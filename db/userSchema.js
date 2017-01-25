//MONGOOSE SCHEMA
var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;

var tournamentSchema = mongoose.Schema({
  tournamentName: String,
  username: Array
})

var Tournament = mongoose.model('Tournament', tournamentSchema);
