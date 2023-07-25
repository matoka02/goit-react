import { createStore } from 'redux';

import { reducer } from './store';


// export const store = createStore(reducer, {
//   counter: { total: 0, step: 1 },
//   todo: { todo: [], filteredTodo: [] },
// });

// const initialState = {
//   counter: { total: 0, step: 1 },
//   todo: { todo: [], filteredTodo: [] },
// };

const store = createStore(reducer);

export default store;
