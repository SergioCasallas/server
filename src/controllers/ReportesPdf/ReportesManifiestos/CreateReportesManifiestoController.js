const puppeteer = require("puppeteer");

const ManifiestosHeaderTemplate = require("../../../templates/Pdf/ManifiestosPdf/ManifiestosHeaderTemplate");
const ManifiestosTemplate = require("../../../templates/Pdf/ManifiestosPdf/ManifiestosTemplate");
const ManifiestosFooterTemplate = require("../../../templates/Pdf/ManifiestosPdf/ManifiestosFooterTemplate");

// const pdf = require("html-pdf");
// const pdfTemplate = require("../../../templates/Pdf/Reportes/ReporteManifiestosTemplate");
exports.createManifiestoPdf = async (req, res) => {
  const { respuesta } = await req.body;


  const pdfManifiestos = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = ManifiestosTemplate(respuesta.data);
    await page.setContent(htmlContent);
    await page.pdf({
      path: "PdfsArchiveFinal/Manifiestos.pdf",
      format: "Letter",
      displayHeaderFooter: true,
      headerTemplate: ManifiestosHeaderTemplate(respuesta.data[0]),
      footerTemplate: ManifiestosFooterTemplate(respuesta.data),
      printBackground: true,
      landscape: false,
      margin: {
        top: "300px",
        left: "0px",
        bottom: "450px",
        right: "0px",
      },
    });

    await browser.close();


      res.status(200);
      res.json("ok");

  };

  pdfManifiestos()
};

// const pdf = require("html-pdf");
// const pdfTemplate = require("../../../templates/Pdf/Reportes/ReporteManifiestosTemplate");
// exports.createManifiestoPdf = async (req, res) => {
//   const config = {
//     format: "A4",
//     // orientation: "landscape",
//   };

//   const { respuesta } = await req.body;
//   const datosManifiestoPdf = await respuesta.data;

//   pdf
//     .create(pdfTemplate(datosManifiestoPdf), config)
//     .toFile("PdfsArchiveFinal/ReportesManifiestos.pdf", (err, response) => {
//       if (err) return Promise.reject();

//       res.setHeader("Content-Type", "application/octet-stream");
//       res.sendFile(response.filename);
//       res.status(200);

//       // res.setHeader("Access-Control-Allow-Origin", "*");
//       // res.setHeader("Access-Control-Allow-Credentials", "true");
//       // res.setHeader("Access-Control-Max-Age", "1800");
//       // res.setHeader("Access-Control-Allow-Headers", "content-type");
//       // res.setHeader(
//       //   "Access-Control-Allow-Methods",
//       //   "PUT, POST, GET, DELETE, PATCH, OPTIONS"
//       // );
//     });
// };
