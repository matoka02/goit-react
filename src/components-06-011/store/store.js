import { combineReducers, createStore } from 'redux';

// import { reducer } from './reducer';
import { initialState } from './initialState';

// const reducer = (state)=>state;
// const store = createStore(reducer, 0);

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         // total: action.payload,
//         total: state.total + action.payload,
//       };
//     case 'decrement':
//       return {
//         ...state,
//         // total: action.payload,
//         total: state.total - action.payload,
//       };
//     case 'setStep':
//       return {
//         ...state,
//         step: action.payload,
//       };
//     case 'createTodo':
//       return {
//         ...state,
//         todo: [...state.todo, {...action.payload}]
//       }
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer, { total: 0, users: [], step: 1 });

// console.log(store); // {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
// console.log(store.getState()); // 0

// store.dispatch({ type: 'increment', payload: 1 });
// console.log(store.getState());

// рефакторинг

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        // если initialState без уточнений
        // counter: { ...state.counter, total: state.total + action.payload },
        total: state.total + action.payload,
      };
    case 'decrement':
      return {
        ...state,
        total: state.total - action.payload,
      };
    case 'setStep':
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

const todoReducer = (state = initialState.todo, action) => {
  switch (action.type) {
    case 'createTodo':
      return {
        ...state,
        todo: [...state.todo, { ...action.payload }],
      };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
