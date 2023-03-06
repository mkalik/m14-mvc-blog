const { Model, DataTypes: dt } = require('sequelize');
const sequelize = require('../config/connection.js');
const hide = require('bcrypt');

class User extends Model {
    checkPass(password) {
        return hide.compareSync(password, this.password);
    }
}

User.init(
    {
        id: {
            type: dt.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: dt.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [4],
            },
        },

        password: {
            type: dt.STRING,
            allowNull: false,
            validate: {
                len: [4],
            },
        },

        email: {
            type: dt.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
            },
        },
        blog_id: {
            type: dt.INTEGER,
            references: {
                model: 'blog',
                key: 'id',
            },
        },
        remarks_id: {
            type: dt.INTEGER,
            references: {
                model: 'Remark',
                key: 'id',
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (user, opt) => {
                user.password = await hide.hash(user.password, 5);
                return user;
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
