const { Model, DataTypes: dt } = require('sequelize');
const sequelize = require('../config/connection.js');

class Remark extends Model {}

Remark.init({
    id: {
        type: dt.INTEGER,
        allowNull: true,
        autoIncrement: true,
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'remark',
});

module.exports = Remark;
