const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
  userId: { type: ObjectId, required: true },
  description:  { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
})

// Export model.
module.exports = mongoose.model('Exercise', ExerciseSchema);