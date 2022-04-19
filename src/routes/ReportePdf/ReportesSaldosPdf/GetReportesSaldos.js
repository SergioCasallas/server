const express = require("express");
const router = express.Router();

const {
  getReporteSaldos,
} = require("../../../controllers/ReportesPdf/ReportesSaldos/GetReporteSaldosController");

router.post("/", getReporteSaldos);

module.exports = router;
