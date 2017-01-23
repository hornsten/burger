var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var password = require("./password");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var mysql = require("mysql");

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

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            throw err;
        }

        // var intactBurgers = [];
        // var devouredBurgers = [];

        // for (var i = 0; i < data.length; i++) {

        //     if (data[i].devoured === 0) {
        //         intactBurgers.push(data[i]);
        //     } else {
        //         devouredBurgers.push(data[i]);
        //     }
        // }

        res.render("index", { burgers: data });


    });
});

// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers WHERE devoured = 1;", function(err, data) {
//         if (err) {
//             throw err;
//         }

//         res.render("index", { eaten: data });

//     });
// });

app.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name, req.body.devoured], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});

//THIS is the one!!!!
app.put("/:id", function(req, res) {
    connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});


app.listen(port);
