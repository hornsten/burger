// var connection = require("../config/connection.js");
var orm = require("../config/orm.js");
var express = require("express");
var app = express();

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne('burgers', "burger_name", value, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne(condition, function(res) {
            cb(res);
        })
    }

}
module.exports = burger;
