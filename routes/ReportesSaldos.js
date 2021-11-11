const express = require("express");
const router = express.Router();

const {
  getReportesSaldos,
} = require("../controllers/ReportesSaldos/ReportesSaldos");

router.post("/",getReportesSaldos);

module.exports = router;
