import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { FLUSH, REHYDRATE,	PAUSE,	PERSIST,	PURGE,	REGISTER } from 'redux-persist';
import { reducer } from './reducer';
import { productsApi } from './products/productsAPI';
import { getDefaultNormalizer } from '@testing-library/react';


const persistConfig = {
  key: 'todoS',
  storage,
  whitelist: ['todo']
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productsApi.middleware),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)    
});

export const persistor = persistStore(store);
