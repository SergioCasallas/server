const express = require("express");
const router = express.Router();

const {
  getManifiestosPdf,
} = require("../../../controllers/ReportesPdf/ReportesManifiestos/GetReporteManifiestoController");

router.get("/", getManifiestosPdf);

module.exports = router;
