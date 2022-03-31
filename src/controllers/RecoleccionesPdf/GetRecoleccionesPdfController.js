const fs = require("fs");
const path = require("path");

exports.getRecoleccionesPdf = (req, res) => {
  // const nit  = req.body.datos.data[0].nit;

  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(
      __dirname,
      `../../../PdfsArchiveFinal/Recolecciones${req.body.data[0].nit}.pdf`
    )
  );

  setTimeout(() => {
    fs.unlink(
      path.join(
        __dirname,
        `../../../PdfsArchiveFinal/Recolecciones${req.body.data[0].nit}.pdf`
      ),
      (err) => {
        if (err) console.log(err);
        else {
          console.log("\nDeleted file: Manifiestos.pdf");
        }
      }
    );
  }, 5000);
  res.status(200);
};
