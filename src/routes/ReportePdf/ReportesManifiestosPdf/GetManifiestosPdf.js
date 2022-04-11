const express = require("express");
const router = express.Router();

const {
  getManifiestosPdf,
} = require("../../../controllers/ReportesPdf/ReportesManifiestos/GetReporteManifiestoController");

router.post("/", getManifiestosPdf);

module.exports = router;
