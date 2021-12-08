const express = require("express");
const router = express.Router();

const {
  getCertificadoPdf,
} = require("../../controllers/Certificado/GetCertificadoPdfController");

router.get("/", getCertificadoPdf);

module.exports = router;
