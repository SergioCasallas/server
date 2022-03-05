const mysql = require("../../db/db");
const CertificadosQueries = require("../../queries/Certificados/Certificados_queries");

exports.getCertificados = async (req, res) => {
  const { fechaInicial, fechaFinal, UUIDSedes, certificado } = req.body.datos;

  try {
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

        console.log(response)

        if(response.length > 0) {
          res.json(response)
        }

      }
    );
  } catch (e) {
    console.log(e);
  }
};
