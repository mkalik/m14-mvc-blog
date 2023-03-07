//routes for api
const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const remarkRoutes = require('./remarkRoutes');
const userRoutes = require('./userRoutes');
router.use('/blog', blogRoutes);
router.use('/remark', remarkRoutes);
router.use('/user', userRoutes);

console.log(blogRoutes, remarkRoutes, userRoutes);

module.exports = router;
