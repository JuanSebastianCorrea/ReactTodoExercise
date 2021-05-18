import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
	const [ todos, setTodos ] = useState([ { task: 'Walk dog', id: 1 }, { task: 'Wash Dishes', id: 2 } ]);

	const create = (newTodo) => {
		setTodos((todos) => [ ...todos, newTodo ]);
	};

	const remove = (id) => {
		setTodos((todos) => todos.filter((t) => t.id !== id));
	};
	return (
		<div>
			<h1>My Todo List</h1>
			<NewTodoForm create={create} />
			{todos.map((t) => <Todo task={t.task} key={t.id} id={t.id} remove={remove} />)}
		</div>
	);
};

export default TodoList;
