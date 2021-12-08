const mysql = require("../../db/db");
const RecoleccionesDatosPdf = require("../../queries/RecoleccionesDatosPdf/RecoleccionesDatosPdf_queries");

exports.getRecoleccionesDatosPdf = (req, res) => {
  const { sede, numeroWorkPlan } = req.body;

  try {
    mysql.query(
      RecoleccionesDatosPdf.getRecoleccionesDatosPdf(sede, numeroWorkPlan),
      (err, response) => {
        if (err) return err;

        if (response.length > 0) {
          console.log(response);
          res.json(response);
        } else {
          res.json({ mensaje: "errrs" });
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
};
