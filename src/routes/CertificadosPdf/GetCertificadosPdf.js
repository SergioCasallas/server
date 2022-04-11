const express = require("express");
const router = express.Router();

const {
  getCertificadoPdf,
} = require("../../controllers/CertificadoPdf/GetCertificadoPdfController");

router.post("/", getCertificadoPdf);

module.exports = router;
