const express = require("express");
const router = express.Router();

const {
  getDatosManifiestos,
} = require("../controllers/Manifiestos/ManifiestosController");

router.post("/", getDatosManifiestos);

module.exports = router;
