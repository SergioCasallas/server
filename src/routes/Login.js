const express = require("express");

const router = express.Router();

const { logearse } = require("../controllers/Login/LoginController");

router.post("/", logearse);

module.exports = router;
