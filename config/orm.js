var connection = require('./connection.js');

var orm = {

    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;
