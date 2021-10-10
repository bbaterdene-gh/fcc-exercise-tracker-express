const mongoose = require('mongoose')
const ObjectId = mongoose.ObjectId

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, required: true },
  logs: [{ type: ObjectId, ref: 'Exercise' }],
})

// Export model.
module.exports = mongoose.model('User', UserSchema);