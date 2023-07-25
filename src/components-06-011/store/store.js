import { createStore } from 'redux';
// import { reducer } from './reducer';

// const reducer = (state)=>state;

const reducer = (state, action)=>{
  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
};

const store = createStore(reducer, 0);

console.log(store);               // store.js:8 {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
console.log(store.getState());    // 0

store.dispatch({type: 'increment', payload: 1});
console.log(store.getState());