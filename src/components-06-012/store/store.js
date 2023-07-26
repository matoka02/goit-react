// import { combineReducers } from 'redux';

import { counterReducer } from './counter/conterReducer';
import { todoReducer } from './todo/todoReducer';

export const reducer = {
  counter: counterReducer,
  todo: todoReducer,
};
