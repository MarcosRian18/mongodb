const express = require('express');
const router = express('router')
const UserController = require('../controllers/users');

// Create a new user
router.post("/teste", UserController.createUser);
router.get('/usuarios', UserController.getAllUsers)
router.put('/alterarUser/:id', UserController.putUsers)
router.delete('/removeUser/:id', UserController.deleteUser)
module.exports = router;
