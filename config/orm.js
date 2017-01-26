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
    },
    insertOne: function(tableName, column, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, column, value], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    },
    updateOne: function(condition, cb) {
        var queryString = "UPDATE burgers SET devoured=1 WHERE id =" + condition;
        connection.query(queryString, [condition], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

// connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.params.id], function(err, result) {
//     if (err) {
//         throw err;
//     }
//     res.redirect("/");
// });

module.exports = orm;
