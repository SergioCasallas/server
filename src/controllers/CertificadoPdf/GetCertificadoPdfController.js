const fs = require("fs");
const path = require("path");

exports.getCertificadoPdf = (req, res) => {

  console.log(req.body)

  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, `../../../PdfsArchiveFinal/Certificado${req.body.nit}.pdf`)
  );

  res.status(200);

  setTimeout(() => {
    fs.unlink(
      path.join(
        __dirname,
        `../../../PdfsArchiveFinal/Certificado${req.body.nit}.pdf`
      ),
      (err) => {
        if (err) console.log(err);
        else {
          console.log(`\nDeleted file: Certificado${req.body.nit}.pdf`);
        }
      }
    );
  }, 5000);
};
