const path = require("path");
const fs = require("fs");


exports.getReporteSaldos = (req, res) => {

  const {nit}=req.body;


  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, `../../../../PdfsArchiveFinal/ReportesSaldos${nit}.pdf`)
  );
  res.status(200);


    setTimeout(() => {
      fs.unlink(
        path.join(
          __dirname,
          `../../../../PdfsArchiveFinal/ReportesSaldos${nit}.pdf`
        ),
        (err) => {
          if (err) console.log(err);
          else {
            console.log(
              `\nDeleted file: PdfsArchiveFinal/ReportesSaldos${nit}.pdf`
            );
          }
        }
      );
    }, 5000);


};
