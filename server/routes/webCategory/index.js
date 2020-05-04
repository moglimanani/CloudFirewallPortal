const router = require('express').Router();
const WebCategory = require('../../controllers/webCategoryController');

router
  .get('/', function(req, res) {
    WebCategory.get_all(req, res);
  })

  .post('/byFilter', function(req, res) {
    WebCategory.get_by_filter(req, res);
  });

module.exports = router;
