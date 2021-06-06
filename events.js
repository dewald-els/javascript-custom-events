export const ON_CREATE_TODO = 'on-create-todo'
export const ON_COMPLETE_TODO = 'on-complete-todo'
export const ON_TODO_COUNT_CHANGED = 'on-todo-count-changed'
export const ON_SET_TODOS = 'on-set-todos'

export const onSetInitalTodos = new Event(ON_SET_TODOS)

export const onCreateTodo = new CustomEvent(ON_CREATE_TODO, {
	detail: {
		title: ''
	}
})

export const onCompleteTodo = new CustomEvent(ON_COMPLETE_TODO, {
	detail: {
		id: 0
	}
})

export const onTodoCountChanged = new CustomEvent(ON_TODO_COUNT_CHANGED, {
	detail: {
		count: 0
	}
})