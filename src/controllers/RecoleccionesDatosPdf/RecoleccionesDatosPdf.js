const mysql = require("../../db/db");
const RecoleccionesDatosPdf = require("../../queries/RecoleccionesDatosPdf/RecoleccionesDatosPdf_queries");

exports.getRecoleccionesDatosPdf = (req, res) => {
  const { sede, fechaInicial, fechaFinal } = req.body;

  try {
    mysql.query(
      RecoleccionesDatosPdf.getRecoleccionesDatosPdf(
        sede,
        fechaInicial,
        fechaFinal
      ),
      (err, response) => {
        if (err) return err;

        if (response.length > 0) {
          res.json(response);
        } else {
          res.json({ mensaje: "datos no encontrados" });
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
};
