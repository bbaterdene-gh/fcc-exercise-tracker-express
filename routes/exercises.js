const express = require('express');
const router = express.Router();

// require controllers
const exerciseController = require('../controllers/exerciseController')

/* CREATE new exercise */
router.post('/users/:_id/exercises', exerciseController.createExercise);

/* GET exercises listing for a user. */
router.get('/users/:_id/logs', exerciseController.allExerciseForUser)

module.exports = router;
