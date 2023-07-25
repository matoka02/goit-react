import { createStore } from 'redux';
// import { reducer } from './reducer';

// const reducer = (state)=>state;
// const store = createStore(reducer, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        // total: action.payload,
        total: state.total + action.payload
      };
      case 'decrement':
        return {
          ...state,
          // total: action.payload,
          total: state.total - action.payload
        };
    default:
      return state;
  }
};

const store = createStore(reducer, { total: 0, users: [] });

console.log(store);             // {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
console.log(store.getState());  // 0

// store.dispatch({ type: 'increment', payload: 1 });
// console.log(store.getState());

export default store;