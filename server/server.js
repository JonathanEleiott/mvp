//OTHER FILES
var db = require('../db/setup.js');
var userSchema = require('../db/userSchema');
var handler = require('./request-handler');

//EXPRESS
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/../');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.use(express.static(__dirname + '/../'));

app.get('/', handler.renderIndex);
app.post('/', handler.sendInfoToDatabase);

app.get('/tourneys', handler.getTourneysFromDatabase);

app.listen(3000, function() {
  console.log('listening on port 3000');
})
