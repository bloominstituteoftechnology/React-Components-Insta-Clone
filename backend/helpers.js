let todos
let id = 1
let getId = () => id++

const resetTodos = () => {
  id = 1
  todos = [
    { id: getId(), name: 'laundry', complete: false },
    { id: getId(), name: 'dishes', complete: false },
    { id: getId(), name: 'groceries', complete: false },
  ]
}

resetTodos()

const getAll = () => {
  return todos
}

const getById = id => {
  return todos.find(todo => todo.id === id)
}

const create = name => {
  todos.push({ id: getId(), name, complete: false })
  return todos
}

const toggleDone = id => {
  todos = todos.map(todo => {
    return todo.id == id
      ? { ...todo, complete: !todo.complete }
      : todo
  })
  return todos
}

const remove = id => {
  todos = todos.filter(todo => {
    return todo.id !== id
  })
  return todos
}

module.exports = {
  getAll,
  getById,
  create,
  toggleDone,
  remove,
  resetTodos,
}
