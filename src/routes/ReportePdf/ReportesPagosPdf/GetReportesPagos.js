const express = require("express");
const router = express.Router();

const {
  getReportesPagosPdf,
} = require("../../../controllers/ReportesPdf/ReportesPagos/GetReportePagosController");

router.get("/", getReportesPagosPdf);

module.exports = router;
