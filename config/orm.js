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
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, value], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(tableName, colName, value, id, cb){
        console.log("orm-updateOne");
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableName, colName, value, id], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    delete: function(tableName, id, cb) {
        var queryString = "DELETE FROM ?? WHERE id = ?";
        connection.query(queryString, [tableName, id], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;