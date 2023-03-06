const track = require('sequelize');
require('dotenv').config();

const train = new track(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3301,
    }
);

module.exports = train;
