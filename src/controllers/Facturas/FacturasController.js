const mysql = require("../../db/db");
const FacturasQueries = require("../../queries/Facturacion/Facturacion_queries");

exports.getFacturas = async (req, res) => {
  const { fechaInicial, fechaFinal, pkCliente, factura } = req.body;

  try {
    if (fechaInicial && fechaFinal && factura) {
      mysql.query(
        FacturasQueries.getFacturas(
          fechaInicial,
          fechaFinal,
          pkCliente,
          factura
        ),
        (err, response) => {
          if (err) console.log(err);

          if (response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.send({ mensaje: "Fechas o Factura Incorrecta" });
          }
        }
      );
    } else if (factura) {
      mysql.query(
        FacturasQueries.getFactura(pkCliente, factura),
        (err, response) => {
          if (err) console.log(err);

          if (response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.send({ mensaje: "Factura Incorrecta" });
          }
        }
      );
    } else {
      mysql.query(
        FacturasQueries.getFacturasFechas(fechaInicial, fechaFinal, pkCliente),
        (err, response) => {
          if (err) console.log(err);

          if (response.length > 0) {
            res.json(response);
            res.end();
          } else {
            res.send({ mensaje: "Datos Ingresados incorrectos" });
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};
