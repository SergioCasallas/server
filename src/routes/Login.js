const express = require("express");

const router = express.Router();

const { logearse } = require("../controllers/Login/LoginController");

// router.get("/", (req, res) => {
//   // res.json({
//   //   user: "USER NO REGISTER",
//   // });
// });

router.post("/", logearse);

module.exports = router;
