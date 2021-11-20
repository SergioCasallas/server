const mysql = require("../../db/db");

const RecoleccionesQueries = require("../../queries/Recolecciones/Recolecciones_queries");

exports.getDetallesRecoleccion = async (req, res) => {
  const { UUIDSede, fechaInicial, fechaFinal, residue, numeroReporte } =
    req.body;
  console.log(numeroReporte);
  try {
    if (residue && ((fechaFinal && fechaInicial) || UUIDSede)) {
      mysql.query(
        RecoleccionesQueries.getRecoleccionesResidues(
          UUIDSede,
          fechaInicial,
          fechaFinal,
          residue
        ),
        (err, response) => {
          console.log(response);
          if (err) console.log(err);

          if (response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.json({ mensaje: "ERROR QUERY DETALLE RECOLECCION" });
            res.end();
          }
        }
      );
    } else if (fechaInicial && fechaFinal && UUIDSede.length > 0) {
      mysql.query(
        RecoleccionesQueries.getRecoleccionesFechas(
          UUIDSede,
          fechaInicial,
          fechaFinal
        ),
        (err, response) => {
          if (err) console.log(err);

          if (response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.json({ mensaje: "No hay ninguna recoleccion" });
            res.end();
          }
        }
      );
    } else if (numeroReporte) {
      mysql.query(
        RecoleccionesQueries.getRecoleccionesWorkPlan(numeroReporte, UUIDSede),
        (err, response) => {
          if (err) console.log(err);

          console.log(response);

          if (response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.json({ mensaje: "No hay ninguna recoleccion" });
            res.end();
          }
        }
      );
    } else if (UUIDSede.length > 0) {
      mysql.query(
        RecoleccionesQueries.getRecolecciones(UUIDSede),
        (err, response) => {
          if (err) console.log(err);

          if (response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.json({ mensaje: "No hay ninguna recoleccion" });
            res.end();
          }
        }
      );
    } else {
      res.json({ mensaje: "No hay ninguna sede" });
      res.end();
    }
  } catch (e) {
    console.log(e);
  }
};
