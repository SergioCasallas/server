const express = require('express');
const router = express.Router();

const {newPassword}=require('../controllers/NewPassword/NewPassword')

router.post("/",newPassword)

module.exports = router;