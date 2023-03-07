const router = require('express').Router();
router.get('/', (req, res) => {
    console.log('GET remark route');
    res.send('remark');
});
module.exports = router;
