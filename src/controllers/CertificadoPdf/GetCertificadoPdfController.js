const fs = require("fs");
const path = require("path");

exports.getCertificadoPdf = (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, "../../../PdfsArchiveFinal/Certificado.pdf")
  );

  res.status(200);

  // setTimeout(() => {
  //   fs.unlink(
  //     path.join(
  //       __dirname,
  //       `../../../PdfsArchiveFinal/Recolecciones${}.pdf`
  //     ),
  //     (err) => {
  //       if (err) console.log(err);
  //       else {
  //         console.log("\nDeleted file: Manifiestos.pdf");
  //       }
  //     }
  //   );
  // }, 5000);
};
