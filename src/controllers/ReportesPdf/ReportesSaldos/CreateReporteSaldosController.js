const puppeteer = require("puppeteer");

const SaldosHeaderTemplate = require("../../../templates/Pdf/SaldosPdf/SaldosHeaderTemplate");
const SaldosTemplate = require("../../../templates/Pdf/SaldosPdf/SaldosTemplate");
const SaldosFooterTemplate = require("../../../templates/Pdf/SaldosPdf/SaldosFooterTemplate");

exports.createReporteSaldos = (req, res) => {
  const { datosReciboSaldosPdf } = req.body;

  const SaldosPdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const htmlContent = SaldosTemplate(datosReciboSaldosPdf);
    await page.setContent(htmlContent);
    await page.pdf({
      path: `PdfsArchiveFinal/ReportesSaldos${datosReciboSaldosPdf.nit}.pdf`,
      format: "Letter",
      displayHeaderFooter: true,
      printBackground: true,
      landscape: true,
      margin: {
        top: "265px",
        left: "0",
        bottom: "90px",
        right: "0",
      },
      headerTemplate: SaldosHeaderTemplate(datosReciboSaldosPdf),
      footerTemplate: SaldosFooterTemplate(datosReciboSaldosPdf),
    });

  await browser.close();

  res.json({ mensaje: "ok" }).status(200)


  };

  SaldosPdf();
};

// const pdf = require("html-pdf");
// const pdfTemplate = require("../../../templates/Pdf/Reportes/ReportesSaldosTemplate");
// // const fs = require("fs");
// // var html = fs.readFileSync(
// //   "../../../templates/Pdf/Reportes/pruebas/reportesPagos.html"
// // );
// // const pdfTemplate = require("../../../templates/Pdf/Reportes/pruebas/reportesPagos.html");

// exports.createReporteSaldos = (req, res) => {
//   const { datosReciboSaldosPdf } = req.body;
//   const config = {
//     format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
//     orientation: "landscape",
//   };

//   pdf
//     .create(pdfTemplate(datosReciboSaldosPdf), config)
//     .toFile("PdfsArchiveFinal/ReportesSaldos.pdf", (err, response) => {
//       if (err) return console.log(err);

//       res.setHeader("Content-Type", "application/octet-stream");
//       res.sendFile(response.filename);
//       res.status(200);
//     });
// };
