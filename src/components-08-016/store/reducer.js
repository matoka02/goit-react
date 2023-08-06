import { combineReducers } from 'redux';

import { todoReducer } from './todo/todoReducer';
import { counterReducer } from './counter/counterSlice';
import { newsReducer } from './news/newsReducer';

import { productReducer } from './products/productsSlice';
import { productsApi } from './products/productsAPI';

import { authReducer } from './auth/authSlice';

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  news: newsReducer,

  products: productReducer,
	[productsApi.reducerPath]: productsApi.reducer,

  auth: authReducer,
});