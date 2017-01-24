exports.renderIndex = function(req, res) {
  res.render('../index');
}

exports.sendInfoToDatabase = function(req, res) {
  console.log('req', req.body)
}

exports.getTourneysFromDatabase = function(req, res) {
  console.log('getTourneysFromDatabase');
}

exports.logger = function(req, res) {
  console.log('req', req.body);
  console.log('here');
}
