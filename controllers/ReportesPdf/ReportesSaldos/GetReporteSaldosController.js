const path = require("path");

exports.getReporteSaldos = (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, "../../../PdfsArchiveFinal/ReportesSaldos.pdf")
  );
  res.status(200);
};
