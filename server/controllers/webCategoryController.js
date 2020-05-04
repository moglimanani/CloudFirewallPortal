const WebCategory = require('../models/WebCategoryModel');

exports.get_all = function(req, res) {
  WebCategory.getAll(function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};

exports.get_by_filter = function(req, res) {
  WebCategory.getByFilter(req.body.filter, function(err, blocks) {
    if (err) res.send(err);
    res.send(blocks);
  });
};
