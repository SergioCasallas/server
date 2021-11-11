const mysql = require("../../db/db");
const ReportesSaldos__Queries = require("../../queries/ReportesSaldos/ReportesSaldos_queries");

exports.getReportesSaldos = (req, res) => {
  const { fechaInicial, fechaFinal, numeroReporte, pkClienteInicial } =
    req.body;

  console.log(fechaInicial);
  console.log(fechaFinal);
  console.log(numeroReporte);
  console.log(pkClienteInicial);

  try {
    if (numeroReporte || (fechaInicial && fechaFinal)) {
      mysql.query(
        ReportesSaldos__Queries.getReportesSaldos(
          fechaInicial,
          fechaFinal,
          numeroReporte,
          pkClienteInicial
        ),
        (err, response) => {
          if (err) console.log(err);

          if (response !== undefined && response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.json({ mensaje: "Datos No Coinciden" });
            res.end();
          }
        }
      );
    } else {
      res.json({ mensaje: "Datos No Coinciden" });
      res.end();
    }
  } catch (err) {
    console.log(err);
  }
};
