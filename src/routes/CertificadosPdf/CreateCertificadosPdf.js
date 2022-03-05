const express = require('express');
const router = express.Router();

const {createCertificadoPdf}=require("../../controllers/CertificadoPdf/CreateCertificadoPdfController")

router.post("/",createCertificadoPdf)

module.exports = router;