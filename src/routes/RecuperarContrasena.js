const express = require("express");
const router = express.Router();

const {
  sendEmail,
} = require("../controllers/RecuperarContrasena/RecuperarContrasenaController");

router.post("/", sendEmail);

module.exports = router;
