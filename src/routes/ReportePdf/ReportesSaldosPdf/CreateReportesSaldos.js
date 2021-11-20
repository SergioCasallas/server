const express = require("express");
const router = express.Router();

const {
  createReporteSaldos,
} = require("../../../controllers/ReportesPdf/ReportesSaldos/CreateReporteSaldosController");

router.post("/", createReporteSaldos);

module.exports = router;
