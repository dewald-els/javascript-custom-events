import { onCreateTodo } from '../../events.js'
import app from '../../app.js'

export const createAddForm = () => {
	const formTag = document.createElement('form')
	formTag.className = 'create-todo-form'
	const inputTag = document.createElement('input')
	inputTag.className = 'create-todo__input'
	inputTag.style.width = '100%'
	inputTag.placeholder = "What do you need to do?"
	const buttonTag = document.createElement('button')
	buttonTag.type = 'submit'
	buttonTag.innerText = 'Add'
	formTag.addEventListener('submit', (event) => {
		event.preventDefault()
		onCreateTodo.detail.title = inputTag.value.trim()
		inputTag.value = ''
		app.dispatchEvent(onCreateTodo)
	})
	formTag.appendChild(inputTag)
	formTag.appendChild(buttonTag)
	return formTag
}