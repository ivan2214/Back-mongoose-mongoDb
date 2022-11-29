require('dotenv').config()
require('../mongoose.js')
const { Router } = require('express')
const HandleErrors = require('../middleware/HandleErrors.js')
const NotFound = require('../middleware/notFound.js')
const Note = require('../models/note.js')
const router = Router()

router.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

router.get('/api/notes', async (req, res) => {
  const notes = await Note.find({})
  res.json(notes)
})

router.post('/api/notes', async (req, res) => {
  const { content, important } = req.body
  const note = await new Note({ content, important, date: new Date() })
  const noteNew = await note.save()
  res.json(noteNew)
})

router.get('/api/notes/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const note = await Note.findById(id)

    note ? res.json(note) : res.json({ err: 'nota inexistente' })
  } catch (error) {
    next(error)
  }
})

router.delete('/api/notes/:id', async (req, res, next) => {
  /* 6385499e1af0e86aea1d1588 */
  try {
    const { id } = req.params
    await Note.findByIdAndDelete(id)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

router.put('/api/notes/edit/:id', async (req, res, next) => {
  /* 6385499e1af0e86aea1d1588 */
  try {
    const { content, important } = req.body
    const { id } = req.params
    // devuelve la nota sin actualizar , para que devuelva la nota actualizada le tengo que pasar como parametro {new:true}
    const update = await Note.findByIdAndUpdate(
      id,
      {
        content,
        important,
        date: new Date()
      },
      { new: true }
    )
    res.status(200).json(update)
  } catch (error) {
    next(error)
  }
})

router.use(NotFound)

router.use(HandleErrors)

module.exports = router
