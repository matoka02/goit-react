import React, { Component } from 'react';
import todoList from 'assets/data-02-003.json';
import ToDo from './ToDo';

class ToDoList extends Component {
	render() {
		return (
			<>
				<h1>My To-Do list</h1>
				<ul className='list-group list-group-flush'>
					{todoList.map((todo) => (
						<ToDo
							key={todo.id}
							todo={todo}	
						/>
					))}
				</ul>
			</>
		)
	}
}

export default ToDoList;