module.exports = (error, req, res, rext) => {
  console.error(error)
  if (error.name === 'CastError') {
    return res.status(400).json({ messagge: 'id used is malformed' })
  } else res.status(500).end()
}
