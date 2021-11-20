const express = require("express");
const router = express.Router();

const { getUUIDSedes } = require("../controllers/Sedes/SedesController");

router.post("/", getUUIDSedes);

module.exports = router;
