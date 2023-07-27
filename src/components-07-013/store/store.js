import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { FLUSH, REHYDRATE,	PAUSE,	PERSIST,	PURGE,	REGISTER } from 'redux-persist';
import { reducer } from './reducer';

const persistConfig = {
  key: 'todoS',
  storage,
  // blackList: ['counter'], // название ключа в reducer.js
  whitelist: ['todo']
};

// const customMiddle = (state) => {
//   return next => {
//     return action => {
//       // console.log(action);     // {type: 'persist/PERSIST', register: ƒ, rehydrate: ƒ}
//       if (typeof action === 'function') {
//         // console.log('func');
//         // console.log(action());
//         // console.log(state.getState);

//         // return next(action());
//         // return next(action(state.dispatch));
//         action(state.dispatch);
//         return
//       }
//       return next(action);
//     };
//   };
// };

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [customMiddle],

  //   A non-serializable value was detected in an action, in the path: `register`. Value: ƒ register(key) {
  //     _pStore.dispatch({
  //       type: _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER,
  //       key: key
  //     });
  //   }
  // Take a look at the logic that dispatched this action:  {type: 'persist/PERSIST', register: ƒ, rehydrate: ƒ}
  // (See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)
  // (To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
