import React, { Component } from 'react';

// import todo from 'assets/data-03-005.json';
import { nanoid } from 'nanoid';

import ToDo from './ToDo';
import FormToDo from './FormToDo';

class ToDoList extends Component {
  // state = { todoList: todo,
  //   isDelete: false,
  //   isCreate: false,
  // };
  // рефакторинг с записью в localStorage
  state = {
    todoList: '',
    isDelete: false,
    isCreate: false,
  };

  componentDidMount() {
    // localStorage.setItem('todo', JSON.stringify(todo));
    // this.setState({ todoList: JSON.parse(localStorage.setItem('todo'))});
    if (localStorage.getItem('todo')){
    this.setState({
      todoList: JSON.parse(localStorage.getItem('todo')),
    })};
  };

  componentDidUpdate(_, prevState) {
    // console.log(prevProps);     // пустой массив
    // console.log(prevState);     // массив, предыдущее состояние FormToDo
    // console.log(this.state);    // массив, текущее состояние state

    // if (prevState.todoList.length !== this.state.todoList.length) {
    //   console.log('Edit todo list');
    // };

    if (prevState.todoList.length > this.state.todoList.length) {
      console.log('Dell');
      localStorage.setItem('todo', JSON.stringify(this.state.todoList));
      // this.setState({ isCreate: true, todo: localStorage.getItem('todo') });
      this.setState({ isDelete: true });
      setTimeout(() => {
        this.setState({ isDelete: false });
      }, 1500);
    }
    if (prevState.todoList.length < this.state.todoList.length) {
      console.log('Create');
      localStorage.setItem('todo', JSON.stringify(this.state.todoList));
      // this.setState({ isCreate: true, todo: localStorage.getItem('todo') });
      this.setState({ isCreate: true });
      setTimeout(() => {
        this.setState({ isCreate: false });
      }, 1500);
    }
  }

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

  addToDo = value => {
    this.setState(prevState => {
      console.log(value);
      console.log(prevState);
      return {
        // используется nanoid, т.к. индекс массива может изменяться при удалении
        todoList: [
          ...prevState.todoList,
          { id: nanoid(), title: value, completed: false },
        ],
      };
    });
  };

  render() {
    return (
        <>
          <h1>My To-Do list</h1>
          {this.state.isDelete && (
            <div class="alert alert-danger" role="alert">
              To-do deleted successfully!
            </div>
          )}
          {this.state.isCreate && (
            <div class="alert alert-success" role="alert">
              Create to-do successfully!
            </div>
          )}
          <FormToDo addToDo={this.addToDo}></FormToDo>
          {this.state.todoList && (
            <ul className="list-group list-group-flush">
            {this.state.todoList.map(todo => (
              <ToDo
                key={todo.id}
                todo={todo}
                handleCheckCompleted={this.handleCheckCompleted}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>)}
        </>
      )
  };
};

export default ToDoList;
