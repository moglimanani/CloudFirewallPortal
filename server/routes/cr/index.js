const router = require('express').Router();
const CR = require('../../controllers/crController');

router
  .post('/create_cr', function(req, res) {
    CR.createCR(req, res);
  })
  .post('/getcr', function(req, res) {
    CR.getCRs(req, res);
  });
module.exports = router;
