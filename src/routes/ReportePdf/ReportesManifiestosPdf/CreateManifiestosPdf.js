const express = require("express");
const router = express.Router();

const {
  createManifiestoPdf,
} = require("../../../controllers/ReportesPdf/ReportesManifiestos/CreateReportesManifiestoController");

router.post("/", createManifiestoPdf);

module.exports = router;
