var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
// mysql://b1bed937463ee3:9c8a9884@us-cdbr-iron-east-03.cleardb.net/heroku_a2c10347f02ecf6?reconnect=true