const express = require('express');
const router = express();
const storedData = require('../controllers/storeData');
router.post("/data", storedData.addData);
module.exports = router