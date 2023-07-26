import { DECREMENT, INCREMENT, SETSTEP } from "./types";
import { counterInitialState } from "./initialState";


export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    // case 'increment':
    case INCREMENT:
      return {
        ...state,
        // если initialState без уточнений
        // counter: { ...state.counter, total: state.total + action.payload },
        total: state.total + action.payload,
        // total: state.total + state.step,
      };
    case DECREMENT:
      return {
        ...state,
        total: state.total - action.payload,
        // total: state.total - state.step,
      };
    case SETSTEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
