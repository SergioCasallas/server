const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const helmet = require("helmet");

//! base de datos
const connection = require("./db/db");

//! Server
const server = express();

server
  .use(helmet())
  .use(cors())
  .use(
    morgan((tokens, req, res) => {
      const morganConfig = [
        `Remote Address: ${req.ip}` || req.connection.remoteAddress,
        `Method: ${tokens.method(req, res)}`,
        `URL: ${tokens.url(req, res)}`,
        `Params: ${JSON.stringify(req.params)}`,
        `Body: ${JSON.stringify(req.body)}`,
        `Status: ${tokens.status(req, res)}`,
        `Response Time: ${tokens["response-time"](req, res)}ms`,
      ];
      return morganConfig.join(` * `);
    })
  )
  .use(urlencoded({ extended: true, limit: "50mb" }))
  .use(json({ limit: "50mb" }));
require("dotenv").config();

// Routes

//! Data-Login
server.use("/login", require("./routes/Login"));

//! Data-Facturas
server.use("/sedes", require("./routes/Sedes"));

server.use("/facturas", require("./routes/Facturas"));

server.use("/recolecciones", require("./routes/Recolecciones"));

// !Datos Reportes Pagos

server.use("/reportesPagos", require("./routes/ReportesPagos"));

// !Datos Reportes Saldos
server.use("/reportesSaldos", require("./routes/ReportesSaldos"));

// !Datos Reportes Saldos
server.use("/reportesManifiesto", require("./routes/ReportesManifiestos"));

// !Datos Reportes Recolecciones
server.use("/recoleccionesDatosPdf", require("./routes/RecoleccionesDatosPdf"));

// ! Recolecciones Pdf
server.use(
  "/createPdfRecolecciones",
  require("./routes/RecoleccionesPdf/CreateRecoleccionesPdf")
);

server.use(
  "/getRecoleccionesPdf",
  require("./routes/RecoleccionesPdf/GetRecoleccionesPdf")
);

// !Cerrar Recolecciones Pdf

// ! Reportes Pagos Pdf

server.use(
  "/createReportesPagosPdf",
  require("./routes/ReportePdf/ReportesPagosPdf/CreateReportesPagos")
);

server.use(
  "/getReportesPagosPdf",
  require("./routes/ReportePdf/ReportesPagosPdf/GetReportesPagos")
);

// !Cerrar Reportes Pagos Pdf

// ! Saldos Pdf

server.use(
  "/createReportesSaldosPdf",
  require("./routes/ReportePdf/ReportesSaldosPdf/CreateReportesSaldos")
);
server.use(
  "/getReportesSaldosPdf",
  require("./routes/ReportePdf/ReportesSaldosPdf/GetReportesSaldos")
);

// ! CerrarSaldos Pdf

// ! Manifiestos Pdf

server.use(
  "/createManifiestoPdf",
  require("./routes/ReportePdf/ReportesManifiestosPdf/CreateManifiestosPdf")
);

server.use(
  "/getManifiestoPdf",
  require("./routes/ReportePdf/ReportesManifiestosPdf/GetManifiestosPdf")
);

// ! Cerra Manifiestos Pdf

// ! Manifiestos Pdf

server.use(
  "/createCertificadoPdf",
  require("./routes/Certificados/CreateCertificadosPdf")
);

server.use(
  "/getCertificadoPdf",
  require("./routes/Certificados/GetCertificadosPdf")
);

// ! Cerra Manifiestos Pdf


const port = process.env.port || 5000;

server.listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`));
