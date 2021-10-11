const Exercise = require('../models/exercise')
const User = require('../models/user')

exports.createExercise = async(req, res) => {
  const _id = req.params._id
  let { description, duration, date } = req.body
  if(!date) {
    date = new Date()
  }

  const exercise = await Exercise.create({
    description,
    duration,
    date,
  })

  const user = await User.findOne({ _id }).exec()
  user.logs.push(exercise.id)
  await user.save()
  res.json({
    _id,
    username: user.username,
    date: exercise.date.toDateString(),
    duration,
    description,
  })
}

exports.allExerciseForUser = async (req, res) => {
  const _id = req.params._id

  const user = await User.findOne({ _id })
      .populate('logs')
      .exec()

  res.json({
    _id,
    username: user.username,
    count: user.logs.length,
    logs: user.logs.map( log => {
      return {
        description: log.description,
        duration: log.duration,
        date: log.date.toDateString(),
      }
    }),
  })
}