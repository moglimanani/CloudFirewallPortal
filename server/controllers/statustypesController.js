const StatusTypes = require('../models/StatusTypesModel');

exports.get_all = function(req, res) {
  StatusTypes.getAll(function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
exports.get_by_id = function(req, res) {
  StatusTypes.getById(req.params.id, function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
