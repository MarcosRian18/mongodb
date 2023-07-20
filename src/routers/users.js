const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

// Create a new user
router.post('/cadastro', UserController.createUser);

module.exports = router;
