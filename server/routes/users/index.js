const router = require('express').Router();
const Users = require('../../controllers/usersController');

router
  .get('/', function(req, res) {
    Users.get_all(req, res);
  })
  .get('/:id', function(req, res) {
    Users.get_by_id(req, res);
  });

module.exports = router;
