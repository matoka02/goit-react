import React from 'react';
// import { Component} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// import todo from 'assets/data-03-005.json';
import { nanoid } from 'nanoid';

import ToDo from './ToDo';
import FormToDo from './FormToDo';
import { toast } from 'react-hot-toast';

const ToDoList = () => {
  const [todoList, setTodoList] = useState('');

  useEffect(()=>{
    const localTodo = localStorage.getItem('todo')
    if (localTodo){
      setTodoList(JSON.parse(localTodo)
    )};
  }, []);

  useEffect(()=>{
    // прописано условие, чтобы не грузилось сразу при первом рендере
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = (id) => {
    setTodoList((prevTodoList)=>{
      return prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    });
  };

  const handleDelete = (id) => {
    setTodoList((prevTodoList)=>{
      return prevTodoList.filter(todo => todo.id !== id)
    });

    toast.error('Delete successfully');
  };

  const addToDo = (value) => {
    setTodoList((prevTodoList)=>{
      return [
        ...prevTodoList,
        { id: nanoid(), title: value, completed: false },
      ]
    });

    toast.success('Create successfully');
  };

  return (
    <>
      <h1>My To-Do list</h1>
      <FormToDo addToDo={addToDo}></FormToDo>
      {todoList && (
        <ul className="list-group list-group-flush">
          {todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ToDoList;
