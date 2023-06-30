const express = require('express')
const cors = require('cors')
const path = require('path')
const Todo = require('./helpers')
const picsRouter = require('./routers/pics')

const PORT = process.env.PORT || 9009

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, '../dist')))

server.use(cors())

server.use('/api/pics', picsRouter) // TODO: this router is not mocked in MSW

server.get('/api/todos', (req, res) => {
  res.json(Todo.getAll())
})

server.get('/api/todos/:id', (req, res) => {
  res.json(Todo.getById(req.params.id))
})

server.post('/api/todos', (req, res) => {
  res.json(Todo.create(req.body))
})

server.patch('/api/todos/:id', (req, res) => {
  res.json(Todo.toggleDone(req.params.id))
})

server.delete('/api/todos/:id', (req, res) => {
  res.json(Todo.remove(req.params.id))
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

server.use((req, res) => {
  res.status(404).json({
    message: `Endpoint [${req.method}] ${req.path} does not exist`,
  })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
