var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(tableName, colName, value, cb){
        var queryString = "INSERT INTO ?? ('??') VALUES ('?')";
        connection.query(queryString, [tableName, colName, value], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(tableName, colName, value, condition, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.queryString(queryString, [tableName, colName, value, condition], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;