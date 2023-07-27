import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { reducer } from './reducer';

const persistConfig = {
  key: 'todoS',
  storage,
  blackList: ['counter'], // название ключа в reducer.js
};

const customMiddle = (state) => {
  return next => {
    return action => {
      console.log(action);
      return next(action);
    };
  };
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [customMiddle],
});

export const persistor = persistStore(store);
