const express = require("express");
const router = express.Router();

const {
  getReportesPagos,
} = require("../controllers/ReportesPagos/ReportesPagos");

router.post("/", getReportesPagos);

module.exports = router;
