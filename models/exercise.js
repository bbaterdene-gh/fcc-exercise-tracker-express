const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
  username: { type: String, required: true }
})

// Export model.
module.exports = mongoose.model('Exercise', ExerciseSchema);