const mysql = require("mysql2");
// const dbConfig = require("../config/db.config.js");

require('dotenv').config()
const connection = mysql.createConnection(process.env.JAWSDB_URL)

// var connection = mysql.createPool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// });

module.exports = connection;
