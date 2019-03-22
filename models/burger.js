var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cb) {
        orm.insertOne("burgers", colName, val, function(res) {
            cb(res);
        });
    },
    updateOne: function(cb) {
        orm.updateOne("burgers", colName, val, id, function(res) {
            cb(res);
        })
    }
};

module.exports = burger;
