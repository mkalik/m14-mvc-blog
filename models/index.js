const User = require('./User.js');
const Blog = require('./Blog.js');
const Remark = require('./Remark.js');

console.log(User, Blog, Remark);

User.hasMany(Blog, {
    foreignkey: 'id',
});
Blog.belongsTo(User, {
    foreignkey: 'id',
});
User.hasMany(Remark, {
    foreignkey: 'id',
});
Remark.belongsTo(User, {
    foreignkey: 'id',
});
Remark.belongsTo(Blog, {
    foreignkey: 'id',
});
Blog.hasMany(Remark, {
    foreignkey: 'id',
});

module.exports = { User, Blog, Remark };
