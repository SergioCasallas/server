const mysql = require("../../db/db");
const CertificadosQueries = require("../../queries/Certificados/Certificados_queries");

exports.getCertificados = async (req, res) => {
  try {
    if (req.body.datos) {
      const { fechaInicial, fechaFinal, UUIDSedes, certificado } =
        req.body.datos;
      mysql.query(
        CertificadosQueries.getCertificados(
          fechaInicial,
          fechaFinal,
          UUIDSedes,
          certificado
        ),
        (err, response) => {
          if (err) {
            console.log(err);
          }
          if (response.length > 0) {
            res.json(response);
          }
        }
      );
    } else {
      const { UUID_Factura } = req.body;
      mysql.query(
        CertificadosQueries.getUUIDFactura(UUID_Factura),
        (err, response) => {
          if (err) {
            console.log(err);
          }

          if (response.length > 0) {
            res.json(response);
          }
        }
      );
    }
  } catch (e) {
    console.log(e);
  }
};
