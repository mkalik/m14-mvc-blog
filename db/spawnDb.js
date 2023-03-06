const mysql = require('mysql2');
const schema = './schema.sql';
const fs = require('fs');
require('dotenv').config({ path: '../.env' });
console.log(process.env.DB_USER);
const db = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
});

fs.readFile(schema, 'utf8', (err, data) => {
    if (err) throw err;
    db.query(data, (err, results) => {
        if (err) throw err;
        console.log('DATABASE CREATED');
        process.exit(1);
    });
});
