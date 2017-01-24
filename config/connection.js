//In this file is everything needed to establish connection with MySQL db
var mysql = require("mysql");
var password = require("../password");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: password,
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});

//exports this file content so other files can access it
module.exports = connection;
