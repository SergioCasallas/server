const puppeteer = require('puppeteer');

const RecoleccionesTemplate = require('../../templates/Pdf/Recolecciones/Recolecciones.js');
const RecoleccionesHeaderTemplate = require('../../templates/Pdf/Recolecciones/RecoleccionesHeaderTemplate');
const RecoleccionesFooterTemplate = require('../../templates/Pdf/Recolecciones/RecoleccionesFooterTemplate');

exports.createPdf = async (req, res) => {
  const { datos } = req.body;

  const pdfRecolecciones = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = RecoleccionesTemplate(datos);
    await page.setContent(htmlContent);
    await page.pdf({
      path: `PdfsArchiveFinal/Recolecciones${datos.data[0].nit}.pdf`,
      format: 'Letter',
      displayHeaderFooter: true,
      headerTemplate: RecoleccionesHeaderTemplate(datos.data[0]),
      footerTemplate: RecoleccionesFooterTemplate(datos),
      printBackground: true,
      landscape: true,
      margin: {
        top: '250px',
        left: '0px',
        bottom: '200px',
        right: '0px',
      },
      timeout: 0,
    });

    await browser.close();

    res.status(200).json('ok');
  };

  pdfRecolecciones();
};

// !###############################################################################################################

// !###############################################################################################################

// const pdf = require("html-pdf");
// const pdfTemplate = require("../../templates/Pdf/RecoleccionesPdf/RecoleccionesTemplate");
// // const { generateFileUrl } = require("../../helpers/s3");

// exports.createPdf = async (req, res) => {
//   // process.env.PATH = `${process.env.PATH}:/opt`;
//   // process.env.FONTCONFIG_PATH = "/opt";
//   // process.env.LD_LIBRARY_PATH = "/opt";
//   const config = {
//     format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
//     orientation: "landscape",
//   };

//   const datos = req.body;

//   try {
//     const template = pdfTemplate(datos);

//     pdf
//       .create(template, config)
//       .toFile("PdfsArchiveFinal/Recolecciones.pdf", (err, response) => {
//         if (err) return Promise.reject();

//         res.setHeader("Content-Type", "application/octet-stream");
//         res.sendFile(response.filename);
//         res.status(200);
//       });
//   } catch (err) {
//     console.error(err);
//   }
// };
