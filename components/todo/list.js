import app from '../../app.js'
import {
	onCompleteTodo,
	onTodoCountChanged,
	ON_COMPLETE_TODO,
	ON_CREATE_TODO,
	ON_SET_TODOS
} from '../../events.js'
import { state } from '../../state.js'

const createTodoLi = title => {
	const liTag = document.createElement('li')
	const id = Math.random().toString(24).slice(2)
	liTag.id = id
	liTag.className = 'todo-list__item'
	liTag.innerText = title
	liTag.addEventListener('click', () => {
		onCompleteTodo.detail.id = id
		app.dispatchEvent(onCompleteTodo)
	})
	return liTag
}

export const createTodoList = () => {
	const todoLiTags = []
	const ulTag = document.createElement('ul')
	ulTag.id = 'todo-list'
	ulTag.className = 'todo-list'

	app.addEventListener(ON_SET_TODOS, () => {
		state.todos.forEach(todo => {
			const liTag = createTodoLi(todo.title)
			ulTag.appendChild(liTag)
			todoLiTags.push(liTag)
		})
		onTodoCountChanged.detail.count = todoLiTags.length
		app.dispatchEvent(onTodoCountChanged)
	})
	
	app.addEventListener(ON_CREATE_TODO, event => {
		const liTag = createTodoLi(event.detail.title)
		ulTag.appendChild(liTag)
		todoLiTags.push(liTag)
		onTodoCountChanged.detail.count = todoLiTags.length
		app.dispatchEvent(onTodoCountChanged)
	})
	app.addEventListener(ON_COMPLETE_TODO, event => {
		const liTagIdx = todoLiTags.findIndex(tag => tag.id === event.detail.id)
		if (liTagIdx < 0) {
			return
		}
		todoLiTags[liTagIdx].remove()
		todoLiTags.splice(liTagIdx, 1)
		onTodoCountChanged.detail.count = todoLiTags.length
		app.dispatchEvent(onTodoCountChanged)
	})
	return ulTag
}


