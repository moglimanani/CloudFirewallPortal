const router = require('express').Router();
const PortTypes = require('../../controllers/porttypesController');

router
  .get('/', function(req, res) {
    PortTypes.get_all(req, res);
  })
  .get('/:id', function(req, res) {
    PortTypes.get_by_id(req, res);
  });

module.exports = router;
