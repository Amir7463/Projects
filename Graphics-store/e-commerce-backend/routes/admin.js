const { createAdmin } = require("../controllers/admin");
const express = require('express');
const router = express.Router();
// Create a admin
router.post('/admin',createAdmin);




module.exports = router;
