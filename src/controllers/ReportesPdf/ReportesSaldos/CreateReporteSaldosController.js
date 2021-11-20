const pdf = require("html-pdf");
const pdfTemplate = require("../../../templates/Pdf/Reportes/ReportesSaldosTemplate");
// const fs = require("fs");
// var html = fs.readFileSync(
//   "../../../templates/Pdf/Reportes/pruebas/reportesPagos.html"
// );
// const pdfTemplate = require("../../../templates/Pdf/Reportes/pruebas/reportesPagos.html");

exports.createReporteSaldos = (req, res) => {
  const { datosReciboSaldosPdf } = req.body;
  const config = {
    format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    orientation: "landscape",
  };

  pdf
    .create(pdfTemplate(datosReciboSaldosPdf), config)
    .toFile("PdfsArchiveFinal/ReportesSaldos.pdf", (err, response) => {
      if (err) return console.log(err);

      res.setHeader("Content-Type", "application/octet-stream");
      res.sendFile(response.filename);
      res.status(200);
    });
};
