'use strict';

//MONGOOSE
var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/mvp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('db connection open');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RiL3NldHVwLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImJsdWViaXJkIiwiUHJvbWlzZSIsImNvbm5lY3QiLCJkYiIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJvbmNlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsV0FBV0MsUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFJQyxXQUFXRCxRQUFRLFVBQVIsQ0FBZjtBQUNBRCxTQUFTRyxPQUFULEdBQW1CRCxRQUFuQjs7QUFFQUYsU0FBU0ksT0FBVCxDQUFpQix5QkFBakI7QUFDQSxJQUFJQyxLQUFLTCxTQUFTTSxVQUFsQjtBQUNBRCxHQUFHRSxFQUFILENBQU0sT0FBTixFQUFlQyxRQUFRQyxLQUFSLENBQWNDLElBQWQsQ0FBbUJGLE9BQW5CLEVBQTRCLGtCQUE1QixDQUFmO0FBQ0FILEdBQUdNLElBQUgsQ0FBUSxNQUFSLEVBQWdCLFlBQVc7QUFDekJILFVBQVFJLEdBQVIsQ0FBWSxvQkFBWjtBQUNELENBRkQiLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL01PTkdPT1NFXG52YXIgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xudmFyIGJsdWViaXJkID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbm1vbmdvb3NlLlByb21pc2UgPSBibHVlYmlyZDtcblxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9tdnAnKTtcbnZhciBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG5kYi5vbignZXJyb3InLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ2Nvbm5lY3Rpb24gZXJyb3InKSk7XG5kYi5vbmNlKCdvcGVuJywgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdkYiBjb25uZWN0aW9uIG9wZW4nKTtcbn0pO1xuIl19