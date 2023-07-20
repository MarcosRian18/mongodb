const express = require('express');
const router = express('router')
const UserController = require('../controllers/users');

// Create a new user
router.post("/teste", UserController.createUser);

module.exports = router;
