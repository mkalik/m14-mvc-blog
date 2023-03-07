const router = require('express').Router();

const api = require('./api');
const handle = require('./handleRoutes');

router.use('/api', api);
router.use('/', handle);

module.exports = router;
