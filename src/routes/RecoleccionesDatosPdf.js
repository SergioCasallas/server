const express = require("express");
const router = express.Router();

const {
  getRecoleccionesDatosPdf,
} = require("../controllers/RecoleccionesDatosPdf/RecoleccionesDatosPdf");

router.post("/", getRecoleccionesDatosPdf);

module.exports = router;
