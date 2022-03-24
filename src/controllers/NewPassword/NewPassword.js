const mysql = require("../../db/db");
const NewPasswordQueries = require("../../queries/NewPassword/NewPassword_queries");

exports.newPassword = (req, res) => {
  const { newPassword, UUID } = req.body.datos;

  try {
    mysql.query(
      NewPasswordQueries.sendNewPassword(newPassword, UUID),
      (err, response) => {
        if (err) {
          console.log(err);
        }

        if (response) {
          res.json({response});
        }else{
          res.json({ mensaje: "Error" });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
