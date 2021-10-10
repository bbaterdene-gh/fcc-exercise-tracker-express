const Exercise = require('../models/exercise')
const User = require('../models/user')

exports.createExercise = async(req, res) => {
  const _id = req.params._id
  let { description, duration, date } = req.body
  if(!date) {
    date = new Date()
  }

  await Exercise.create({
    userId: _id,
    description,
    duration,
    date,
  })

  const user = await User.findOne({ _id }).exec()

  res.json({
    _id,
    username: user.username,
    date,
    duration,
    description,
  })
}