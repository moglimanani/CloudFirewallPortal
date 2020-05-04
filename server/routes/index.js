const router = require('express').Router();
const blockstatus = require('./blockstatus');
const fileTypes = require('./filetypes');
const portTypes = require('./porttypes');
const statusTypes = require('./statustypes');
const users = require('./users');
const webCategory = require('./webCategory');
const webTypes = require('./webTypes');
const cr = require('./cr');

router.use('/blockstatus', blockstatus);
router.use('/filetypes', fileTypes);
router.use('/porttypes', portTypes);
router.use('/statustypes', statusTypes);
router.use('/users', users);
router.use('/web_category', webCategory);
router.use('/web_types', webTypes);
router.use('/cr', cr);

// The 404 Route (ALWAYS Keep this as the last route)
router.all('*', function(req, res) {
  res.status(404).send({ error: true, data: { sqlMessage: 'Api not found' } });
});
module.exports = router;
