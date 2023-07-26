
import { combineReducers } from 'redux';

// import { counterReducer } from './counter/conterReducer';     // изменение импорта
import { todoReducer } from './todo/todoReducer';
import { counterReducer } from './counter/counterSlice';

export const reducer = combineReducers({
  // counter: counterReducer,     // изменение импорта
  counter: counterReducer,
  todo: todoReducer,
});
