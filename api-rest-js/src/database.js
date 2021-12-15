const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'company'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
    } else{
        console.log('Db is connected.');
    }
});

module.exports = mysqlConnection;
