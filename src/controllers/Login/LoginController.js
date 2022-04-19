const mysql = require("../../db/db");
const LoginQueries = require("../../queries/Login/Login_queries");

exports.logearse = async (req, res) => {

  const { user: userEmail, password: userPassword } = req.body;

  try {
    mysql.query(
      LoginQueries.userLogin(userEmail, userPassword),
      (err, response) => {
        if (err) {
          res.send(err);
        }
        if (response.length > 0) {
          res.set("Access-Control-Allow-Origin", "*");
          res.json(response);
          res.end();
        } else {
          res.send({ mensaje: "El Usuario o la Contrasena son Invalidos" });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};
