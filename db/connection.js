const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Myskier2009!',
    database: 'employee'
});

module.exports = db;