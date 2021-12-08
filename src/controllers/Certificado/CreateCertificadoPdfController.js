const pdf = require("html-pdf");

const pdfTemplate = require("../../templates/Pdf/Certificado/CertificadoTemplate");

exports.createCertificadoPdf = (req, res) => {
  const { dataCertificadoPdf } = req.body;
  const config = {
    format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    //   orientation: "landscape",
  };

  const template = pdfTemplate(dataCertificadoPdf);

  pdf
    .create(template, config)
    .toFile("PdfsArchiveFinal/Certificado.pdf", (err, response) => {
      if (err) return Promise.reject(err);

      res.setHeader("Content-Type", "application/octet-stream");
      res.sendFile(response.filename);
      res.status(200);
    });
};
