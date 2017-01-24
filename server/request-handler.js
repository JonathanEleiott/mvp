var allTourneys = [];

exports.renderIndex = function(req, res) {
  res.render('../index');
}

exports.sendInfoToDatabase = function(req, res) {
  allTourneys.push(req.body);
  allTourneysParsed = JSON.stringify(allTourneys);
  console.log(typeof allTourneys);
  res.send(allTourneys);
}

exports.getTourneysFromDatabase = function(req, res) {
  console.log('getTourneysFromDatabase');
}

exports.logger = function(req, res) {
  console.log('req', req.body);
  console.log('here');
}
