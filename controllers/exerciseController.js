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
    duration: exercise.duration,
    description,
  })
}

exports.allExerciseForUser = async (req, res) => {
  const _id = req.params._id

  const { from, to, limit } = req.query

  let populateQuery = {
    path: 'logs',
    match: {},
  }
  if (from && Date.parse(from)) {
    populateQuery.match.date = {
      $gte: new Date(from) 
    }
  }

  if (to && Date.parse(to)) {
    populateQuery.match.date = {
      ...populateQuery.match.date,
      $lt: new Date(to) 
    }
  }

  if (limit && !isNaN(limit)) {
    populateQuery.options = {
      limit: limit
    }
  }

  const user = await User.findOne({ _id })
      .populate(populateQuery)
  
  res.json({
    _id,
    username: user.username,
    count: user.logs.length,
    log: user.logs.map( log => {
      return {
        description: log.description,
        duration: log.duration,
        date: log.date.toDateString(),
      }
    }),
  })
}