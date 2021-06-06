import app from './app.js'
import { fetchTodos } from './api.js'
import { createAddForm } from './components/todo/form.js'
import { createTodoList } from './components/todo/list.js'
import { createTodoCounter } from './components/todo/todo-counter.js'

const todoCounterTag = createTodoCounter()
const formTag = createAddForm()
const todoListTag = createTodoList()

app.appendChild(todoCounterTag)
app.appendChild(formTag)
app.appendChild(todoListTag)

fetchTodos(fetch)
