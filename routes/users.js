const express = require('express');
const router = express.Router();

// require controllers
const userController = require('../controllers/userController')

/* GET users listing. */
router.post('/users', userController.createUser);

module.exports = router;
