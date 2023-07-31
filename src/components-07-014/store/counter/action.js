import { createAction } from '@reduxjs/toolkit';
// import { DECREMENT, INCREMENT, SETSTEP } from './types';

// export const increment = (step) => ({ type: INCREMENT, payload: step });
// export const decrement = (step) => ({ type: DECREMENT, payload: step });
// export const setStep = (value) => ({ type: SETSTEP, payload: value });

export const increment = createAction('INCREMENT');
// console.log(increment());               // {type: 'INCREMENT', payload: undefined}
// console.log(increment(100));               // {type: 'INCREMENT', payload: 100}
export const decrement = createAction('DECREMENT');
// console.log(decrement.toString());          // DECREMENT
export const setStep = createAction('SETSTEP');