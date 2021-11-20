const express = require("express");
const router = express.Router();

const {
  getRecoleccionesPdf,
} = require("../../controllers/RecoleccionesPdf/GetRecoleccionesPdfController");

router.get("/", getRecoleccionesPdf);

module.exports = router;
