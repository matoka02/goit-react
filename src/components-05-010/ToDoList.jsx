import React from 'react';
// import { Component} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

// import todo from 'assets/data-03-005.json';
import { nanoid } from 'nanoid';

import ToDo from './ToDo';
import FormToDo from './FormToDo';
import FormFilterToDo from './FormFilterTodo';

const ToDoList = () => {
  const [todoList, setTodoList] = useState('');
  const [filterTodoList, setFilterTodoList] = useState(todoList);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('filter'));
  // console.log(searchParams.getAll('filter'));       // ['hhhhhhhhhhh']
  // console.log(...searchParams);                     // (2) ['filter', 'hhhhhhhhhhh']
  // console.log(Object.fromEntries([...searchParams]));    // {filter: 'hhhhhhhhhhh'}

  // добавление '', чтобы при незаполненном поле фильтра был рендер всех элементов списка
  const filterText = searchParams.get('filter') ?? '';

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');
    if (localTodo) {
      setTodoList(JSON.parse(localTodo));
    }
  }, []);

  useEffect(() => {
    // прописано условие, чтобы не грузилось сразу при первом рендере
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    todoList &&
      setFilterTodoList(
        todoList.filter(todo =>
          todo.title.toLowerCase().includes(filterText.trim().toLowerCase())
        )
      );
  }, [filterText, searchParams, todoList]);

  const handleCheckCompleted = id => {
    setTodoList(prevTodoList => {
      return prevTodoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = id => {
    setTodoList(prevTodoList => {
      return prevTodoList.filter(todo => todo.id !== id);
    });

    toast.error('Delete successfully');
  };

  const addToDo = value => {
    setTodoList(prevTodoList => {
      return [
        ...prevTodoList,
        { id: nanoid(), title: value, completed: false },
      ];
    });

    toast.success('Create successfully');
  };

  return (
    <>
      <h1>My To-Do list</h1>
      <FormFilterToDo
        setSearchParams={setSearchParams}
        filterText={filterText}
      />
      <FormToDo addToDo={addToDo}></FormToDo>
      {filterTodoList && (
        <ul className="list-group list-group-flush">
          {filterTodoList.map(todo => (
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
