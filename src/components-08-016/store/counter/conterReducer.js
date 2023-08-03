import { decrement, increment, setStep } from './action';
import { counterInitialState } from './initialState';

import { createReducer } from '@reduxjs/toolkit';

export const counterReducer = createReducer(counterInitialState, {
  [increment]: (state, action) => ({
    ...state,
    total: state.total + action.payload,
  }),
  [decrement]: (state, action) => ({
    ...state,
    total: state.total - action.payload,
  }),
  [setStep]: (state, action) => ({
    ...state,
    step: action.payload,
  }),
});
