const express = require('express');
const { registerUser, loginUser } = require('../controllers/user');
const router = express.Router();
// Create a admin
router.post('/user',registerUser);
router.post("/user/login", loginUser);




module.exports = router;
