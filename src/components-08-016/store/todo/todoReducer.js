import { todoInitialState } from './initialState';
import { createTodo } from './action';

import { createReducer } from '@reduxjs/toolkit';

export const todoReducer = createReducer(todoInitialState, {
  [createTodo]: (state, action) => {
    state.todo.push(action.payload)
  },
});
