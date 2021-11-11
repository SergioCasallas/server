const pdf = require("html-pdf");
const pdfTemplate = require("../../../templates/Pdf/Reportes/ReporteManifiestosTemplate");
exports.createManifiestoPdf = async (req, res) => {
  const config = {
    format: "A4",
    // orientation: "landscape",
  };

  const { respuesta } = await req.body;
  const datosManifiestoPdf = await respuesta.data;

  pdf
    .create(pdfTemplate(datosManifiestoPdf), config)
    .toFile("PdfsArchiveFinal/ReportesManifiestos.pdf", (err, response) => {
      if (err) return Promise.reject();

      res.setHeader("Content-Type", "application/octet-stream");
      res.sendFile(response.filename);
      res.status(200);

      // res.setHeader("Access-Control-Allow-Origin", "*");
      // res.setHeader("Access-Control-Allow-Credentials", "true");
      // res.setHeader("Access-Control-Max-Age", "1800");
      // res.setHeader("Access-Control-Allow-Headers", "content-type");
      // res.setHeader(
      //   "Access-Control-Allow-Methods",
      //   "PUT, POST, GET, DELETE, PATCH, OPTIONS"
      // );
    });
};
