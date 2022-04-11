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
  .use(urlencoded({ extended: true, limit: "50mb" }))
  .use(json({ limit: "50mb" }))
  .use(morgan("dev"));
require("dotenv").config();

// Routes

//! Data-Login
server.use("/login", require("./routes/Login"));

//! Data-Facturas
server.use("/sedes", require("./routes/Sedes"));

server.use("/facturas", require("./routes/Facturas"));

server.use("/recolecciones", require("./routes/Recolecciones"));

server.use("/manifiestos", require("./routes/Manifiestos"));

server.use("/new-password", require("./routes/NewPassword"));

// !Datos Reportes Pagos

server.use("/reportesPagos", require("./routes/ReportesPagos"));

// !Datos Reportes Saldos
server.use("/reportesSaldos", require("./routes/ReportesSaldos"));

// !Datos Reportes Saldos
server.use("/reportesManifiesto", require("./routes/ReportesManifiestos"));

// !Datos Reportes Saldos
server.use("/certificados", require("./routes/Certificados"));

// !Datos Reportes Recolecciones
server.use("/recoleccionesDatosPdf", require("./routes/RecoleccionesDatosPdf"));

// !recuperarContrasena
server.use("/recuperarContrasena", require("./routes/RecuperarContrasena"));

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


// ! Certificado Pdf

server.use(
  "/createCertificadoPdf",
  require("./routes/CertificadosPdf/CreateCertificadosPdf")
);

server.use(
  "/getCertificadoPdf",
  require("./routes/CertificadosPdf/GetCertificadosPdf")
);

// ! Cerra Certificado Pdf



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



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});