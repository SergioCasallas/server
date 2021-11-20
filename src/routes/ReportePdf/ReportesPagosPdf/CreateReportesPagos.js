const express = require("express");
const router = express.Router();

const {
  createReportesPagosPdf,
} = require("../../../controllers/ReportesPdf/ReportesPagos/CreateReportePagosController");

router.post("/", createReportesPagosPdf);

module.exports = router;
