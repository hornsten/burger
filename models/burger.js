var connection = require("../config/connection");

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers WHERE devoured=false;", function(err, data) {
        if (err) {
            throw err;
        }

        // res.render("index", { movies: data });

    });
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers WHERE devoured=true;", function(err, data) {
        if (err) {
            throw err;
        }

        // res.render("index", { movies: data });

    });
});

app.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (burgers) VALUES (?)", [req.body.burger_name], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});

app.put("/", function(req, res) {

    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [
        req.body.devoured, req.body.id
    ], function(err, result) {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});

module.exports("burger");
