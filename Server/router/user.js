const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

// User Register.
router.post('/user', UserController.register);

module.exports = router;
