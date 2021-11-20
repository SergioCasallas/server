const express = require("express");
const router = express.Router();

const {
  createPdf,
} = require("../../controllers/RecoleccionesPdf/CreateRecoleccionesPdfController");

router.post("/", createPdf);

module.exports = router;
