const pdf = require("html-pdf");
const pdfTemplate = require("../../templates/Pdf/RecoleccionesPdf/RecoleccionesTemplate");

exports.createPdf = async (req, res) => {
  const config = {
    format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    orientation: "landscape",
  };

  const {
    fechaActual,
    entreFechas,
    nombreCompania,
    nit,
    numeroWorkPlan,
    fechaHora,
    numeroRecibo,
    sede,
    tipoResiduoRecolectado,
    residuo,
    cantidadKg,
    numeroBolsas,
    nombresRepartidos,
    identificacion,
  } = req.body;

  pdf
    .create(
      pdfTemplate(
        fechaActual,
        entreFechas,
        nombreCompania,
        nit,
        numeroWorkPlan,
        fechaHora,
        numeroRecibo,
        sede,
        tipoResiduoRecolectado,
        residuo,
        cantidadKg,
        numeroBolsas,
        nombresRepartidos,
        identificacion
      ),
      config
    )
    .toFile("PdfsArchiveFinal/Recolecciones.pdf", (err, response) => {
      if (err) return Promise.reject();

      res.setHeader("Content-Type", "application/octet-stream");
      res.sendFile(response.filename);
      res.status(200);
    });
};
