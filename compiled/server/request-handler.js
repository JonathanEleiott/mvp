'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var allTourneys = [];

exports.renderIndex = function (req, res) {
  res.render('../index');
};

exports.sendInfoToDatabase = function (req, res) {
  allTourneys.push(req.body);
  allTourneysParsed = JSON.stringify(allTourneys);
  console.log(typeof allTourneys === 'undefined' ? 'undefined' : _typeof(allTourneys));
  res.send(allTourneys);
};

exports.getTourneysFromDatabase = function (req, res) {
  console.log('getTourneysFromDatabase');
};

exports.logger = function (req, res) {
  console.log('req', req.body);
  console.log('here');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9yZXF1ZXN0LWhhbmRsZXIuanMiXSwibmFtZXMiOlsiYWxsVG91cm5leXMiLCJleHBvcnRzIiwicmVuZGVySW5kZXgiLCJyZXEiLCJyZXMiLCJyZW5kZXIiLCJzZW5kSW5mb1RvRGF0YWJhc2UiLCJwdXNoIiwiYm9keSIsImFsbFRvdXJuZXlzUGFyc2VkIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwiZ2V0VG91cm5leXNGcm9tRGF0YWJhc2UiLCJsb2dnZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxjQUFjLEVBQWxCOztBQUVBQyxRQUFRQyxXQUFSLEdBQXNCLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUN2Q0EsTUFBSUMsTUFBSixDQUFXLFVBQVg7QUFDRCxDQUZEOztBQUlBSixRQUFRSyxrQkFBUixHQUE2QixVQUFTSCxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDOUNKLGNBQVlPLElBQVosQ0FBaUJKLElBQUlLLElBQXJCO0FBQ0FDLHNCQUFvQkMsS0FBS0MsU0FBTCxDQUFlWCxXQUFmLENBQXBCO0FBQ0FZLFVBQVFDLEdBQVIsUUFBbUJiLFdBQW5CLHlDQUFtQkEsV0FBbkI7QUFDQUksTUFBSVUsSUFBSixDQUFTZCxXQUFUO0FBQ0QsQ0FMRDs7QUFPQUMsUUFBUWMsdUJBQVIsR0FBa0MsVUFBU1osR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ25EUSxVQUFRQyxHQUFSLENBQVkseUJBQVo7QUFDRCxDQUZEOztBQUlBWixRQUFRZSxNQUFSLEdBQWlCLFVBQVNiLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNsQ1EsVUFBUUMsR0FBUixDQUFZLEtBQVosRUFBbUJWLElBQUlLLElBQXZCO0FBQ0FJLFVBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsQ0FIRCIsImZpbGUiOiJyZXF1ZXN0LWhhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYWxsVG91cm5leXMgPSBbXTtcblxuZXhwb3J0cy5yZW5kZXJJbmRleCA9IGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIHJlcy5yZW5kZXIoJy4uL2luZGV4Jyk7XG59XG5cbmV4cG9ydHMuc2VuZEluZm9Ub0RhdGFiYXNlID0gZnVuY3Rpb24ocmVxLCByZXMpIHtcbiAgYWxsVG91cm5leXMucHVzaChyZXEuYm9keSk7XG4gIGFsbFRvdXJuZXlzUGFyc2VkID0gSlNPTi5zdHJpbmdpZnkoYWxsVG91cm5leXMpO1xuICBjb25zb2xlLmxvZyh0eXBlb2YgYWxsVG91cm5leXMpO1xuICByZXMuc2VuZChhbGxUb3VybmV5cyk7XG59XG5cbmV4cG9ydHMuZ2V0VG91cm5leXNGcm9tRGF0YWJhc2UgPSBmdW5jdGlvbihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZygnZ2V0VG91cm5leXNGcm9tRGF0YWJhc2UnKTtcbn1cblxuZXhwb3J0cy5sb2dnZXIgPSBmdW5jdGlvbihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZygncmVxJywgcmVxLmJvZHkpO1xuICBjb25zb2xlLmxvZygnaGVyZScpO1xufVxuIl19