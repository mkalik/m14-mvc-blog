const router = require('express').Router();
const { Blog } = require('../../models');
console.log(Blog);
router.get('/', (req, res) => {
    console.log('GET blog route');
    res.send('blog');
});

module.exports = router;
