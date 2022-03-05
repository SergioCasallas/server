const express = require("express");
const router = express.Router();

const {
  getCertificados,
} = require("../controllers/Certificados/CertificadosController");

router.post("/", getCertificados);

module.exports = router;
