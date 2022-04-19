const express = require('express');

const router = express.Router();

const { logearse } = require('../controllers/Login/LoginController');

router.post('/', logearse);
//router.post("/", function (req, res) {
//      res.header("Access-Control-Allow-Origin", "*");
//      logearse
//});

module.exports = router;
