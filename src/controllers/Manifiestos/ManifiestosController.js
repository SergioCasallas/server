const mysql = require("../../db/db");

const ManifiestosQuery = require("../../queries/Manifiestos/Manifiestos_query");

exports.getDatosManifiestos = (req, res) => {
  const { UUIDSede, fechaInicial, fechaFinal,  numeroReporte } =
    req.body;

  try {
    if (fechaInicial && fechaFinal && UUIDSede.length > 0) {
      mysql.query(
        ManifiestosQuery.getManifiestosFechas(
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
        ManifiestosQuery.getManifiestosWorkPlan(numeroReporte, UUIDSede),
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
    } else if (UUIDSede.length > 0) {
      mysql.query(
        ManifiestosQuery.getManifiestos(UUIDSede),
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
