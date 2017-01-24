'use strict';

//OTHER FILES
var db = require('../db/setup.js');
var userSchema = require('../db/userSchema');
var handler = require('./request-handler');

//EXPRESS
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/../');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/../'));

app.get('/', handler.renderIndex);
app.post('/', handler.sendInfoToDatabase);

app.get('/tourneys', handler.getTourneysFromDatabase);

app.listen(3000, function () {
  console.log('listening on port 3000');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiZGIiLCJyZXF1aXJlIiwidXNlclNjaGVtYSIsImhhbmRsZXIiLCJleHByZXNzIiwiYm9keVBhcnNlciIsImFwcCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXQiLCJfX2Rpcm5hbWUiLCJlbmdpbmUiLCJyZW5kZXJGaWxlIiwic3RhdGljIiwiZ2V0IiwicmVuZGVySW5kZXgiLCJwb3N0Iiwic2VuZEluZm9Ub0RhdGFiYXNlIiwiZ2V0VG91cm5leXNGcm9tRGF0YWJhc2UiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSUEsS0FBS0MsUUFBUSxnQkFBUixDQUFUO0FBQ0EsSUFBSUMsYUFBYUQsUUFBUSxrQkFBUixDQUFqQjtBQUNBLElBQUlFLFVBQVVGLFFBQVEsbUJBQVIsQ0FBZDs7QUFFQTtBQUNBLElBQUlHLFVBQVVILFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUksYUFBYUosUUFBUSxhQUFSLENBQWpCO0FBQ0EsSUFBSUssTUFBTUYsU0FBVjtBQUNBRSxJQUFJQyxHQUFKLENBQVNGLFdBQVdHLElBQVgsRUFBVDtBQUNBRixJQUFJQyxHQUFKLENBQVFGLFdBQVdJLFVBQVgsQ0FBc0IsRUFBRUMsVUFBVSxJQUFaLEVBQXRCLENBQVI7O0FBRUFKLElBQUlLLEdBQUosQ0FBUSxPQUFSLEVBQWlCQyxZQUFZLE1BQTdCO0FBQ0FOLElBQUlPLE1BQUosQ0FBVyxNQUFYLEVBQW1CWixRQUFRLEtBQVIsRUFBZWEsVUFBbEM7QUFDQVIsSUFBSUssR0FBSixDQUFRLGFBQVIsRUFBdUIsTUFBdkI7QUFDQUwsSUFBSUMsR0FBSixDQUFRSCxRQUFRVyxNQUFSLENBQWVILFlBQVksTUFBM0IsQ0FBUjs7QUFFQU4sSUFBSVUsR0FBSixDQUFRLEdBQVIsRUFBYWIsUUFBUWMsV0FBckI7QUFDQVgsSUFBSVksSUFBSixDQUFTLEdBQVQsRUFBY2YsUUFBUWdCLGtCQUF0Qjs7QUFFQWIsSUFBSVUsR0FBSixDQUFRLFdBQVIsRUFBcUJiLFFBQVFpQix1QkFBN0I7O0FBRUFkLElBQUllLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQVc7QUFDMUJDLFVBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELENBRkQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9PVEhFUiBGSUxFU1xudmFyIGRiID0gcmVxdWlyZSgnLi4vZGIvc2V0dXAuanMnKTtcbnZhciB1c2VyU2NoZW1hID0gcmVxdWlyZSgnLi4vZGIvdXNlclNjaGVtYScpO1xudmFyIGhhbmRsZXIgPSByZXF1aXJlKCcuL3JlcXVlc3QtaGFuZGxlcicpO1xuXG4vL0VYUFJFU1NcbnZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXG52YXIgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZSggYm9keVBhcnNlci5qc29uKCkgKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG5hcHAuc2V0KCd2aWV3cycsIF9fZGlybmFtZSArICcvLi4vJyk7XG5hcHAuZW5naW5lKCdodG1sJywgcmVxdWlyZSgnZWpzJykucmVuZGVyRmlsZSk7XG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJylcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy8uLi8nKSk7XG5cbmFwcC5nZXQoJy8nLCBoYW5kbGVyLnJlbmRlckluZGV4KTtcbmFwcC5wb3N0KCcvJywgaGFuZGxlci5zZW5kSW5mb1RvRGF0YWJhc2UpO1xuXG5hcHAuZ2V0KCcvdG91cm5leXMnLCBoYW5kbGVyLmdldFRvdXJuZXlzRnJvbURhdGFiYXNlKTtcblxuYXBwLmxpc3RlbigzMDAwLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ2xpc3RlbmluZyBvbiBwb3J0IDMwMDAnKTtcbn0pXG4iXX0=