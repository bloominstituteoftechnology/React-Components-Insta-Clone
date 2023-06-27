const { setupServer } = require('msw/node')
const { rest } = require('msw')
const Todo = require('./helpers')

function getAll(req, res, ctx) {
  return res(
    ctx.json(Todo.getAll()),
  )
}

function getById(req, res, ctx) {
  return res(
    ctx.json(Todo.getById(req.params.id)),
  )
}

function create(req, res, ctx) {
  return res(
    ctx.json(Todo.create(req.body)),
  )
}

function toggleDone(req, res, ctx) {
  return res(
    ctx.json(Todo.toggleDone(req.params.id)),
  )
}

function remove(req, res, ctx) {
  return res(
    ctx.json(Todo.remove(req.params.id)),
  )
}

const handlers = [
  rest.get('http://localhost:9009/api/todos', getAll),
  rest.get('http://localhost:9009/api/todos/:id', getById),
  rest.post('http://localhost:9009/api/todos', create),
  rest.patch('http://localhost:9009/api/todos/:id', toggleDone),
  rest.delete('http://localhost:9009/api/todos/:id', remove),
]

module.exports = setupServer(...handlers)
