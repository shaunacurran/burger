//setup to connect node to mysql

var mysql = require('mysql');

var connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect(function (error){
    if(error){
        throw error;
    }
});

//export connection 
module.exports = connection;