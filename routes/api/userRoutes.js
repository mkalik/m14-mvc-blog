const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('GET user route');
    res.send('user');
});
module.exports = router;
