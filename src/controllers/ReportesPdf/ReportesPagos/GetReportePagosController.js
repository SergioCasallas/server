const path = require("path");
const fs = require("fs");

exports.getReportesPagosPdf = (req, res) => {
  const { nit } = req.body;

  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, `../../../../PdfsArchiveFinal/ReportesPagos${nit}.pdf`)
  );
  res.status(200);

  setTimeout(() => {
    fs.unlink(
      path.join(
        __dirname,
        `../../../../PdfsArchiveFinal/ReportesPagos${nit}.pdf`
      ),
      (err) => {
        if (err) console.log(err);
        else {
          console.log(
            `\nDeleted file: PdfsArchiveFinal/ReportesPagos${nit}.pdf`
          );
        }
      }
    );
  }, 5000);
};
