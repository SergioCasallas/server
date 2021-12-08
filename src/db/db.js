const mysql = require("mysql");

require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

connection.connect(async (error) => {
  if (error) {
    console.log(`${error}`);
    return;
  }
  console.log(`Se logro conectar la base de datos`);
});

module.exports = connection;
