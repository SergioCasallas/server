const express = require("express");
const router = express.Router();

const { getFacturas } = require("../controllers/Facturas/FacturasController");

router.post("/", getFacturas);

module.exports = router;

// const {}
