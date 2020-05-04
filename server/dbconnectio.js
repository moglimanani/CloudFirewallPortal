const mysql = require('mysql');

const { REACT_APP_DB_HOST, REACT_APP_DB_USER, REACT_APP_DB_PASSWORD, REACT_APP_DB_NAME } = process.env;
const connection = mysql.createPool({
  host: REACT_APP_DB_HOST,
  user: REACT_APP_DB_USER,
  password: REACT_APP_DB_PASSWORD,
  database: REACT_APP_DB_NAME,
  multipleStatements: true
});

connection.getConnection(function(err) {
  if (err) throw err;
  console.log('Connection successfull');
});

module.exports = connection;
