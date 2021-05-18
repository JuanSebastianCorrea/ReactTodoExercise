import React from 'react';

const Todo = ({ task, remove, id }) => {
	return (
		<div>
			<h3>{task}</h3>
			<button onClick={() => remove(id)}>X</button>
		</div>
	);
};

export default Todo;
