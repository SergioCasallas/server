const mysql = require("../../db/db");

const reportesManifiestosQueries = require("../../queries/ReportesManifiestos/ReportesManifiestos_query");

exports.getDatosManifiestos = (req, res) => {
  const { datosManifiesto } = req.body;

  try {
    if (datosManifiesto) {
      mysql.query(
        reportesManifiestosQueries.getReportesManifiestos(datosManifiesto),
        (err, response) => {
          if (err) console.log(err);

          if (response.length > 0) {
            console.log(response)
            res.json(response);
            res.end();
          } else {
            res.json({ mensaje: "Manifiesto no encontrado" });
            res.end();
          }
        }
      );
    } else {
      res.json({ mensaje: "Manifiesto no encontrado" });
      res.end();
    }
  } catch (e) {
    console.log(e);
  }
};
