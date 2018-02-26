var mysql = require('mysql'); //this is like doing a require with PHP
var config = require('../config');

var connect = mysql.createConnection({ //making a connect script so that we can access database, make sure values are same as connect.js file
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database
});

module.exports = connect;
