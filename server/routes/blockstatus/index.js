const router = require('express').Router();
const BlockStatus = require('../../controllers/blockStatusController');

router
  .get('/', function(req, res) {
    BlockStatus.get_all(req, res);
  })
  .get('/:id', function(req, res) {
    BlockStatus.get_by_id(req, res);
  });

module.exports = router;
