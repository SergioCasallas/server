const pdf = require("html-pdf");
const pdfTemplate = require("../../../templates/Pdf/Reportes/ReportesPagosTemplate");

exports.createReportesPagosPdf = async (req, res) => {
  const { datosReciboPagosPdf } = req.body;
  const config = {
    format: "A4",
    orientation: "landscape",
  };

  pdf
    .create(pdfTemplate(datosReciboPagosPdf), config)
    .toFile("PdfsArchiveFinal/ReportesPagos.pdf", (err, response) => {
      if (err) return Promise.reject();

      res.setHeader("Content-Type", "application/octet-stream");
      res.sendFile(response.filename);
      res.status(200);
    });
};
