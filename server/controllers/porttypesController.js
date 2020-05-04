const PortTypes = require('../models/PortTypesModel');

exports.get_all = function(req, res) {
  PortTypes.getAll(function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
exports.get_by_id = function(req, res) {
  PortTypes.getById(req.params.id, function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
