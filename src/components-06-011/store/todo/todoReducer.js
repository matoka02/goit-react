import { initialState } from "../initialState";
import { CREATETODO } from "./types";

export const todoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case CREATETODO:
      return {
        ...state,
        todo: [...state.todo, { ...action.payload }],
      };
    default:
      return state;
  }
};
