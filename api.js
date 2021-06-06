import app from "./app.js";
import { onSetInitalTodos } from "./events.js";
import { state } from "./state.js";

export const fetchTodos = fetch => {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then(r => r.json())
		.then(todos => {
			state.todos = todos
			app.dispatchEvent(onSetInitalTodos)
			return todos
		})
		.catch(error => {
			console.log(error);
		})
}
