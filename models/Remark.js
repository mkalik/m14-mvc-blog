const { Model, DataTypes: dt } = require('sequelize');
const sequelize = require('../config/connection.js');

class Remark extends Model {}

Remark.init(
    {
        id: {
            type: dt.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'remark',
    }
);

module.exports = Remark;
