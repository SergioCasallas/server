const express = require("express");
const router = express.Router();

const {
  getDetallesRecoleccion,
} = require("../controllers/Recolecciones/RecoleccionesController");

router.post("/", getDetallesRecoleccion);

module.exports = router;
