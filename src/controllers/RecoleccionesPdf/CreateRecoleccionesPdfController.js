const pdf = require("html-pdf");
const pdfTemplate = require("../../templates/Pdf/RecoleccionesPdf/RecoleccionesTemplate");
// const { generateFileUrl } = require("../../helpers/s3");

exports.createPdf = async (req, res) => {
  // process.env.PATH = `${process.env.PATH}:/opt`;
  // process.env.FONTCONFIG_PATH = "/opt";
  // process.env.LD_LIBRARY_PATH = "/opt";
  const config = {
    format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    orientation: "landscape",
  };

  const datos = req.body;


  try {
    const template = pdfTemplate(datos);

    pdf
      .create(template, config)
      .toFile("PdfsArchiveFinal/Recolecciones.pdf", (err, response) => {
        if (err) return Promise.reject();

        res.setHeader("Content-Type", "application/octet-stream");
        res.sendFile(response.filename);
        res.status(200);
      });
  } catch (err) {
    console.error(err);
  }
};
