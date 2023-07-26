// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// import { reducer as rootReducer } from './store';
import { reducer } from './reducer';

// const store = configureStore({reducer: rootReducer});
const store = configureStore({reducer});

export default store;
