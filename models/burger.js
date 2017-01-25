// var connection = require("../config/connection.js");
var orm = require("../config/orm.js");
var express = require("express");
var app = express();

var burger = {
    selectAll: function(cb) {
            orm.selectAll('burgers', function(res) {
                cb(res);
            });
        }
        // insertOne: function(column, value, cb) {
        //     orm.insertOne('burgers', column, value, function(res) {
        //         cb(res);
        //     });
        // },
        // updateOne: function(colVal, condition, cb) {
        //     orm.updateOne('burgers', colVal, condition, function(res) {
        //         cb(res);
        //     })
        // }

}
module.exports = burger;


// selectAll: function(tableName, cb) {
//         var queryString = "SELECT * FROM ??";
//         connection.query(queryString, [tableName], function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         })
//     }
