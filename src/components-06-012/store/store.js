// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// import { reducer as rootReducer } from './store';
import { reducer } from './reducer';

const persistConfig = {
  // key: 'root',
  key: 'todoS',
  storage,
  blackList: ['counter']    // название ключа в reducer.js
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({reducer: rootReducer});
// const store = configureStore({reducer});
export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
