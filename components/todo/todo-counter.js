import app from '../../app.js'
import { ON_TODO_COUNT_CHANGED } from '../../events.js'

export const createTodoCounter = () => {
	const counterTag = document.createElement('p')
	counterTag.innerHTML = '0 Items'
	app.addEventListener(ON_TODO_COUNT_CHANGED, event => {
		counterTag.innerHTML = event.detail.count.toString() + ' Items'
	})
	return counterTag
}