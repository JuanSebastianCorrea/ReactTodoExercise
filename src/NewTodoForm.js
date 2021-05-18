import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ create }) => {
	const [ task, setTask ] = useState('');

	const handleChange = (e) => {
		setTask((task) => e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		create({ task, id: uuid() });
		setTask('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="newtodo">New Todo</label>
			<input id="newtodo" type="text" placeholder="add todo" value={task} onChange={handleChange} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodoForm;
