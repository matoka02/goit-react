// import { CREATETODO } from './types';
import { createAction, nanoid } from '@reduxjs/toolkit';

// export const createTodo = (todo) => ({ type: CREATETODO, payload: todo });

export const createTodo = createAction('CREATETODO', (value) => {
  return { payload: { id: nanoid(), title: value, completed: false } };
});
