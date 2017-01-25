var allTourneys = [{tournamentName:'Monickers', players: ['jon', 'bill']}, {tournamentName:'Avalon', players: ['ken', 'barbie', 'tang']}];

exports.renderIndex = function(req, res) {
  res.render('../index');
}

exports.sendInfoToDatabase = function(req, res) {
  console.log('req.body', req.body);
  allTourneys.push(req.body);
  console.log('allTourneys from sendInfoToDatabase', allTourneys);
  res.send(allTourneys);
}

exports.getTourneysFromDatabase = function(req, res) {
  console.log('getTourneysFromDatabase');
  console.log('allTourneys from getTourneysFromDatabase', allTourneys);
  res.send(allTourneys);
}

exports.logger = function(req, res) {
  console.log('req', req.body);
  console.log('here');
}
