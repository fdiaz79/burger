var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne("burger_name", req.body.name, function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;
    var value = req.body.devoured;
    console.log (condition + "|" + value);
    burger.updateOne("devoured", value, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else{
            res.status(200).end;
        }
    });
});

module.exports = router;
