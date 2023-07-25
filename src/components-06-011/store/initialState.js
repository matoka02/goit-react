// export const initialState = {
//   counter: { total: 0, step: 1 },
//   todo: { todo: [], filteredTodo: [] },
// };

import { counterInitialState } from "./counter/initialState";
import { todoInitialState } from "./todo/initialState";

export const initialState = {
  counter: counterInitialState,
  todo: todoInitialState,
};