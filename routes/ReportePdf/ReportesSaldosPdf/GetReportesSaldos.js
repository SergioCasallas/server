const express = require("express");
const router = express.Router();

const {
  getReporteSaldos,
} = require("../../../controllers/ReportesPdf/ReportesSaldos/GetReporteSaldosController");

router.get("/", getReporteSaldos);

module.exports = router;
