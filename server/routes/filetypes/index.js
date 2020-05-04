const router = require('express').Router();
const FileTypes = require('../../controllers/filetypesController');

router
  .get('/', function(req, res) {
    FileTypes.get_all(req, res);
  })
  .get('/:id', function(req, res) {
    FileTypes.get_by_id(req, res);
  });

module.exports = router;
