const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const { urlencoded, json } = require("body-parser");
const helmet = require("helmet");
// base de datos

const connection = require("./db/db");

// Server
const server = express();

server.get("/health", (req, res) =>
  res.status(200).send("Matragra API is running!")
);

// Middlewares
// server.use(express.json());

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

// Data-Login
server.use("/login", require("./routes/Login"));
// Data-Facturas
server.use("/sedes", require("./routes/Sedes"));

server.use("/facturas", require("./routes/Facturas"));

server.use("/recolecciones", require("./routes/Recolecciones"));

// ! Recolecciones Pdf
server.use(
  "/createPdfRecolecciones",
  require("./routes/RecoleccionesPdf/CreateRecoleccionesPdf")
);
server.use(
  "/getRecoleccionesPdf",
  require("./routes/RecoleccionesPdf/GetRecoleccionesPdf")
);

// !Datos Reportes Pagos

server.use("/reportesPagos", require("./routes/ReportesPagos"));

// !Datos Reportes Saldos
server.use("/reportesSaldos", require("./routes/ReportesSaldos"));

// !Datos Reportes Saldos
server.use("/reportesManifiesto", require("./routes/ReportesManifiestos"));

// ! Reportes Pagos Pdf

server.use(
  "/createReportePagosPdf",
  require("./routes/ReportePdf/ReportesPagosPdf/CreateReportesPagos")
);
server.use(
  "/getReportesPagosPdf",
  require("./routes/ReportePdf/ReportesPagosPdf/GetReportesPagos")
);

// ! Saldos Pdf

server.use(
  "/createReporteSaldosPdf",
  require("./routes/ReportePdf/ReportesSaldosPdf/CreateReportesSaldos")
);
server.use(
  "/getReporteSaldosPdf",
  require("./routes/ReportePdf/ReportesSaldosPdf/GetReportesSaldos")
);

// ! Manifiestos Pdf

server.use(
  "/createManifiestoPdf",
  require("./routes/ReportePdf/ReportesManifiestosPdf/CreateManifiestosPdf")
);

server.use(
  "/getManifiestoPdf",
  require("./routes/ReportePdf/ReportesManifiestosPdf/GetManifiestosPdf")
);

// Archivos Estaticos
server.use(express.static(path.join(__dirname + "public")));

server.use((error, req, res, next) => {
  console.error(error);
  res
    .status(error.status || 500)
    .json({ error: error.message || "Internal System Error" });
});

// const port = process.env.port || 5000;

// server.listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`));

module.exports = server;
