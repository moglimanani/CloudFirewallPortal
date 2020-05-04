const router = require('express').Router();
const StatusTypes = require('../../controllers/statustypesController');

router
  .get('/', function(req, res) {
    StatusTypes.get_all(req, res);
  })
  .get('/:id', function(req, res) {
    StatusTypes.get_by_id(req, res);
  });

module.exports = router;
