
exports.createUser = (req, res) => {
  const username = req.body.username
  res.json({
    username: username
  })
}