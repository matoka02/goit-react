// import { initialState } from '../initialState';
import { todoInitialState } from './initialState';
import { createTodo } from './action';
// import { CREATETODO } from './types';

import { createReducer } from '@reduxjs/toolkit';


// export const todoReducer = (state = initialState.todo, action) => {
//   switch (action.type) {
//     case CREATETODO:
//       return {
//         ...state,
//         todo: [...state.todo, { ...action.payload }],
//       };
//     default:
//       return state;
//   }
// };

export const todoReducer = createReducer(todoInitialState, {
  // [createTodo]: (state, action) => ({
  //   ...state,
  //   todo: [...state.todo, { ...action.payload }],
  // }),
  [createTodo]: (state, action) => {
    state.todo.push(action.payload)
  },
});
