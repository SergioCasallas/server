const mysql = require("../../db/db");

const ReportesPagosQueries = require("../../queries/ReportesPagos/ReportesPago_queries");

exports.getReportesPagos = async (req, res) => {
  const { numeroReporte, fechaInicial, fechaFinal, pkClienteInicial } =
    req.body;

    

  try {
    if (numeroReporte || (fechaInicial && fechaFinal)) {
      mysql.query(
        ReportesPagosQueries.getReportesPagos(
          numeroReporte,
          fechaInicial,
          fechaFinal,
          pkClienteInicial
        ),
        (err, response) => {
          if (err) console.log(err);

          if (response !== undefined && response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.json({ mensaje: "No existe datos" });
            res.end();
          }
        }
      );
    } else {
      res.json({ mensaje: "Datos No Coinciden" });
      res.end();
    }
  } catch (e) {
    console.log(e);
  }
};
