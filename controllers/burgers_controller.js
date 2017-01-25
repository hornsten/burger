// This file sets up all of the routes for the application. MySQL queries are in here.
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
// var password = require("../password");
var bodyParser = require('body-parser');
var connection = require('../config/connection.js');

//Grabs all the data from the burgers table...all of the burgers! These are sorted later with Handlebars #if and #unless statements
router.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            throw err;
        }

        res.render("index", { burgers: data });

    });
});

//User can enter a new burger into the system. Default value of devoured=false, so user doesn't actually enter that
router.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name, req.body.devoured], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});

//Changes status of burger from devoured=false to devoured=true

router.put("/:id", function(req, res) {

    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});

module.exports = router;
