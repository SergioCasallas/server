const path = require("path");

exports.getRecoleccionesPdf = (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, "../../PdfsArchiveFinal/Recolecciones.pdf")
  );
  res.status(200);
};
