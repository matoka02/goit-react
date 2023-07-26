// import { DECREMENT, INCREMENT, SETSTEP } from "./types";
// import { initialState } from "../initialState";
import { decrement, increment, setStep } from './action';
import { counterInitialState } from './initialState';

import { createReducer } from '@reduxjs/toolkit';

// export const counterReducer = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         total: state.total + action.payload,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         total: state.total - action.payload,
//       };
//     case SETSTEP:
//       return {
//         ...state,
//         step: action.payload,
//       };
//     default:
//       return state;
//   }
// };

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
