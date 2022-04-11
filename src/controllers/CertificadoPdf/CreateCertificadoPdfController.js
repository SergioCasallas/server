const puppeteer = require("puppeteer");

const CertificadosTemplate =require("../../templates/Pdf/Certificado/CertificadoTemplate")
const CertificadosHeader = require("../../templates/Pdf/Certificado/CertificadoHeaderTemplate");
const CertificadosFooter = require("../../templates/Pdf/Certificado/CertificadoFooterTemplate");

exports.createCertificadoPdf = (req, res) => {
  const { dataCertificadoPdf } = req.body;


  const pdfCertificado = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = CertificadosTemplate(dataCertificadoPdf);
    await page.setContent(htmlContent);
    await page.pdf({
      path: `PdfsArchiveFinal/Certificado${dataCertificadoPdf[0].nit}.pdf`,
      format: "Letter",
      displayHeaderFooter: true,
      headerTemplate: CertificadosHeader(dataCertificadoPdf[0]),
      footerTemplate: CertificadosFooter(dataCertificadoPdf),
      printBackground: true,
      landscape: false,
      margin: {
        top: "400px",
        left: "0px",
        bottom: "390px",
        right: "0px",
      },
    });

    await browser.close();

      res.status(200);
      res.json("ok");
  };

  pdfCertificado();
};

// const pdfTemplate = require("../../templates/Pdf/Certificado/CertificadoTemplate");

// const pdf = require("html-pdf");
// exports.createCertificadoPdf = (req, res) => {
//   const { dataCertificadoPdf } = req.body;
//   const config = {
//     format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
//     //   orientation: "landscape",
//   };

//   const template = pdfTemplate(dataCertificadoPdf);

//   pdf
//     .create(template, config)
//     .toFile("PdfsArchiveFinal/Certificado.pdf", (err, response) => {
//       if (err) return Promise.reject(err);

//       res.setHeader("Content-Type", "application/octet-stream");
//       res.sendFile(response.filename);
//       res.status(200);
//     });
// };
