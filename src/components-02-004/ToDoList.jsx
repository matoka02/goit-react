import React, { Component } from 'react';
import todo from 'assets/data-02-003.json';
import ToDo from './ToDo';

class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  handleCheckCompleted = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        <ul className="list-group list-group-flush">
          {this.state.todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={this.handleCheckCompleted}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
