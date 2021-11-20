const path = require("path");

exports.getReportesPagosPdf = (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, "../../../PdfsArchiveFinal/ReportesPagos.pdf")
  );
  res.status(200);
};
