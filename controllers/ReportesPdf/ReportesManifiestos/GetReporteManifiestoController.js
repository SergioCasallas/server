const path = require("path");
exports.getManifiestosPdf = (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, "../../../PdfsArchiveFinal/ReportesManifiestos.pdf")
  );
  res.status(200);
};
