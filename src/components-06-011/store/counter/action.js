import { DECREMENT, INCREMENT, SETSTEP } from './types';

// export const increment = (step) => ({ type: 'increment', payload: step });
// export const decrement = (step) => ({ type: 'decrement', payload: step });

export const increment = (step) => ({ type: INCREMENT, payload: step });
export const decrement = (step) => ({ type: DECREMENT, payload: step });
export const setStep = (value) => ({ type: SETSTEP, payload: value });