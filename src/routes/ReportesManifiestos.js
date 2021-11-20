const express = require("express");
const router = express.Router();

const {
  getDatosManifiestos,
} = require("../controllers/ReportesManifiestos/ReportesManifiestosController");

router.post("/", getDatosManifiestos);

module.exports = router;
