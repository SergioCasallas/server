const puppeteer = require("puppeteer");

const PagosHeaderTemplate = require("../../../templates/Pdf/PagosPdf/PagosHeaderTemplate");
const PagosTemplate = require("../../../templates/Pdf/PagosPdf/PagosTemplate");
const PagosFooterTemplate = require("../../../templates/Pdf/PagosPdf/PagosFooterTemplate");

exports.createReportesPagosPdf = async (req, res) => {
  const { datosReciboPagosPdf } = req.body;


  const PagosPdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const htmlContent = PagosTemplate(datosReciboPagosPdf);
    await page.setContent(htmlContent);
    await page.pdf({
      path: `PdfsArchiveFinal/ReportesPagos${datosReciboPagosPdf.nit}.pdf`,
      format: "A4",
      landscape: true,
      displayHeaderFooter: true,
      printBackground: true,
      headerTemplate: PagosHeaderTemplate(datosReciboPagosPdf),
      footerTemplate: PagosFooterTemplate(datosReciboPagosPdf),
      margin: {
        top: "291px",
        left: "0",
        bottom: "182px",
        right: "0",
      },
    });

    await browser.close();

    res.json({mensaje:"ok"}).status(200)

  };

  PagosPdf();
};

// const pdf = require("html-pdf");
// const pdfTemplate = require("../../../templates/Pdf/Reportes/ReportesPagosTemplate");

// exports.createReportesPagosPdf = async (req, res) => {
//   const { datosReciboPagosPdf } = req.body;
//   const config = {
//     format: "A4",
//     orientation: "landscape",
//   };

//   pdf
//     .create(pdfTemplate(datosReciboPagosPdf), config)
//     .toFile("PdfsArchiveFinal/ReportesPagos.pdf", (err, response) => {
//       if (err) return Promise.reject();

//       res.setHeader("Content-Type", "application/octet-stream");
//       res.sendFile(response.filename);
//       res.status(200);
//     });
// };
