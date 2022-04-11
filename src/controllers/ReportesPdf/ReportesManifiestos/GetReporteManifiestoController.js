const path = require("path");
const fs = require("fs");
exports.getManifiestosPdf = (req, res) => {
  const {nit}=req.body
  console.log(nit)
  res.setHeader("Content-Type", "application/octet-stream");
  res.download(
    path.join(__dirname, `../../../../PdfsArchiveFinal/Manifiestos${nit}.pdf`)
  );
  res.status(200);


  setTimeout(() => {
    fs.unlink(
      path.join(
        __dirname,
        `../../../../PdfsArchiveFinal/Manifiestos${nit}.pdf`
      ),
      (err) => {
        if (err) console.log(err);
        else {
          console.log(
            `\nDeleted file: PdfsArchiveFinal/Manifiestos${nit}.pdf`
          );
        }
      }
    );
  }, 5000);
};
