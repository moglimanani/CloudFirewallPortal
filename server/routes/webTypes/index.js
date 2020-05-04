const router = require('express').Router();
const WebTypes = require('../../controllers/webTypesController');

router
  .get('/', function(req, res) {
    WebTypes.get_all(req, res);
  })
  .get('/:id', function(req, res) {
    WebTypes.get_by_id(req, res);
  });

module.exports = router;
