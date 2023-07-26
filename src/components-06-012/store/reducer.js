// // import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';

// // import { reducer as rootReducer } from './store';
// import { reducer } from './store';

// // const store = configureStore({reducer: rootReducer});
// const store = configureStore({reducer});

// export default store;

import { combineReducers } from 'redux';

import { counterReducer } from './counter/conterReducer';
import { todoReducer } from './todo/todoReducer';

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
