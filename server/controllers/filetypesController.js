const FileTypes = require('../models/FileTypesModel');

exports.get_all = function(req, res) {
  FileTypes.getAll(function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
exports.get_by_id = function(req, res) {
  FileTypes.getById(req.params.id, function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
