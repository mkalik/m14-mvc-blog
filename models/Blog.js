const { Model, DataTypes: dt } = require('sequelize');
const sequelize = require('../config/connection.js');

class Blog extends Model {}

Blog.init({
    id: {
        type: dt.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    user: {
        type: dt.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
});
