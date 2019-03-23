var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(colName, val, cb) {
        orm.insertOne("burgers", colName, val, function(res) {
            cb(res);
        });
    },
    updateOne: function(colName, val, id, cb) {
        console.log("model-updateOne");
        orm.updateOne("burgers", colName, val, id, function(res) {
            cb(res);
        });
    },
    delete: function(id, cb) {
        orm.delete("burgers", id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
