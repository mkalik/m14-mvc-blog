const { Model, DataTypes: dt } = require('sequelize');
const sequelize = require('../config/connection.js');
console.log(sequelize);

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: dt.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        author: {
            type: dt.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
);

module.exports = Blog;
