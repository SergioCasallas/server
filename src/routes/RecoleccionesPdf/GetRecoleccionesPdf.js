const express = require("express");
const router = express.Router();

const {getRecoleccionesPdf} = require("../../controllers/RecoleccionesPdf/GetRecoleccionesPdfController");

router.post("/", getRecoleccionesPdf);

module.exports = router;
