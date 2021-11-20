const pdf = require("html-pdf");
const pdfTemplate = require("../../templates/Pdf/RecoleccionesPdf/RecoleccionesTemplate");
const { generateFileUrl } = require("../../helpers/s3");

exports.createPdf = async (req, res) => {
  process.env.PATH = `${process.env.PATH}:/opt`;
  process.env.FONTCONFIG_PATH = "/opt";
  process.env.LD_LIBRARY_PATH = "/opt";
  const config = {
    format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    orientation: "landscape",
    phantomPath: "/opt/phantomjs_linux-x86_64",
  };

  const {
    fechaActual,
    entreFechas,
    nombreCompania,
    nit,
    numeroWorkPlan,
    fechaHora,
    numeroRecibo,
    sede,
    tipoResiduoRecolectado,
    residuo,
    cantidadKg,
    numeroBolsas,
    nombresRepartidos,
    identificacion,
  } = req.body;

  try {
    const template = pdfTemplate(
      fechaActual,
      entreFechas,
      nombreCompania,
      nit,
      numeroWorkPlan,
      fechaHora,
      numeroRecibo,
      sede,
      tipoResiduoRecolectado,
      residuo,
      cantidadKg,
      numeroBolsas,
      nombresRepartidos,
      identificacion
    );

    const file = await new Promise((resolve, reject) => {
      pdf.create(template, config).toBuffer((err, buffer) => {
        if (err) reject(err);

        resolve(buffer);
      });
    });

    // .toFile("PdfsArchiveFinal/Recolecciones.pdf", async (err, response) => {
    //   if (err) return console.log(err);
    //   console.log(response.file);
    console.log(
      "*****************************************************************************"
    );
    console.log(file);
    console.log(
      "*****************************************************************************"
    );

    await generateFileUrl(file, "application/octet-stream", "Prueba.pdf");
  } catch (err) {
    console.error(
      "//////////////////////////////////////////////////////////////////////////*"
    );
    console.error(err);
    console.error(
      "//////////////////////////////////////////////////////////////////////////*"
    );
  }

  res.json({ mensaje: "Fallo" });
  // res.setHeader("Content-Type", "application/octet-stream");
  // res.send(await file);
  // res.status(200);
  // });
};
