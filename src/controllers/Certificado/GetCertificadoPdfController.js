const path = require("path");

exports.getCertificadoPdf = (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, "../../../PdfsArchiveFinal/Certificado.pdf")
  );
  res.status(200);
};
