const express = require('express');
const router = express.Router();

const {createCertificadoPdf}=require("../../controllers/Certificado/CreateCertificadoPdfController")

router.post("/",createCertificadoPdf)

module.exports = router;