const BlockStatus = require('../models/BlockStatusModel');

exports.get_all = function(req, res) {
  BlockStatus.getAll(function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
exports.get_by_id = function(req, res) {
  BlockStatus.getById(req.params.id, function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
