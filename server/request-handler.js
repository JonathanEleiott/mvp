exports.renderIndex = function(req, res) {
  res.render('../index')
}

exports.logger = function(req, res) {
  console.log('req', req.body);
  console.log('here');
}
