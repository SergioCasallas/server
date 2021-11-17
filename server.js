const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

// base de datos

const connection = require("./db/db");

// Server
const server = express();

// Middlewares
// server.use(express.json());

server.use(express.json({ limit: "50mb" }));
// server.use(express.urlencoded({ limit: "25mb" }));`

server.use(cors());
server.use(morgan("dev"));
require("dotenv").config();

// PORT
const port = process.env.port || 4000;

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

server.listen(port,'0.0.0.0', () => {
  console.log(`Corriendo en el puerto ${port}`);
});
