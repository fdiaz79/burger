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
    var id = req.params.id;
    var value = req.body.devoured;
    console.log (id + "|" + value);
    burger.updateOne("devoured", value, id, function(result) {
        console.log(result.changedRows);
        if (result.changedRows == 0) {
            console.log("burger.updateOne");
            return res.status(404).end();
        } else{
            res.status(200).end;
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
  
    burger.delete(id, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });  

module.exports = router;
