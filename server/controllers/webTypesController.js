const WebTypes = require('../models/WebTypesModel');

exports.get_all = function(req, res) {
  WebTypes.getAll(function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
exports.get_by_id = function(req, res) {
  WebTypes.getById(req.params.id, function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
