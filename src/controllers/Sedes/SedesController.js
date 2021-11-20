const mysql = require("../../db/db");

const SedesQueries = require("../../queries/Sedes/Sedes_queries");

exports.getUUIDSedes = async (req, res) => {
  const { UUID } = req.body;

  try {
    mysql.query(SedesQueries.userSedes(UUID), (err, response) => {
      if (err) console.log(err);

      if (response.length > 0) {
        res.json(response);
        res.end();
      } else {
        res.json({ mensaje: "No hay Sedes" });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
