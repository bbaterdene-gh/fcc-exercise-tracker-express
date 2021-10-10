const express = require('express');
const router = express.Router();

// require controllers
const exerciseController = require('../controllers/exerciseController')

/* CREATE new exercise */
router.post('/users/:_id/exercises', exerciseController.createExercise);



module.exports = router;
