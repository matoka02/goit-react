// import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { getTopNews, getNews } from 'servises/getNewsRedux';

import { getNewsSearchThunk, getNewsThunk } from './thunk';
import initialState from './initialState';

// import { getTopNews } from 'servises/getNewsRedux';

// export const getNewsThunk = () => {
//   // return (dispatch) => ({ type: 'thunk', payload: 100 });
//   // return()=>({ type: 'thunk', payload: 100 });

//   // return async dispatch => {
//   //   const data = await fetch();
//   //   dispatch({ type: 'thunk', payload: 100 });
//   //   return;

//   return async dispatch => {
//     // dispatch(newsSlice.reducer.fetching());
//     // const data = await getTopNews();
//     // dispatch(newsSlice.reducer.fetchSuccess(data));

//     try {
//       dispatch(newsSlice.actions.fetching());
//       const data = await getTopNews();
//       dispatch(newsSlice.actions.fetchSuccess(data));
//     } catch (error) {
//       dispatch(newsSlice.actions.fetchError(error));
//     }
//   };
// };

// // рефакторинг
// export const getNewsThunk = createAsyncThunk('news/geTopNews', async () => {
//   return await getTopNews();
// });

// const initialState = {
//   news: [],
//   // isLoading: false,
//   status: 'idle',
//   error: '',
// };

// const newsSlice = createSlice({
//   name: 'news',
//   initialState,
//   reducers: {
//     fetching: state => {
//       // state.isLoading = true;
//       state.status = 'pending';
//     },
//     fetchSuccess: (state, { payload }) => {
//       // state.isLoading = false;
//       state.status = 'fulfilled';
//       state.news = payload.articles;
//       state.error = '';
//     },
//     fetchError: (state, { payload }) => {
//       // state.isLoading = false;
//       state.status = 'rejected';
//       state.error = payload;
//     },
//   },

//   // // рефакторинг - объект
//   // extraReducers:{
//   // 	[getNewsThunk.pending]: (state) => {
//   // 		state.status = 'pending';
//   // 	},
//   // 	[getNewsThunk.fulfilled]: (state, { payload }) => {
//   // 		state.status = 'fulfilled';
//   // 		state.news = payload.articles;
//   // 		state.error = '';
//   // 	},
//   // 	[getNewsThunk.rejected]: (state, { payload }) => {
//   // 		state.status = 'rejected';
//   // 		state.error = payload;
//   // 	},
//   // },

//   // рефакторинг - функция
//   extraReducers: builder => {
//     builder
//       .addCase(getNewsThunk.pending, state => {
//         state.status = 'pending';
//       })
//       .addCase(getNewsThunk.fulfilled, (state, { payload }) => {
//         state.status = 'fulfilled';
//         state.news = payload.articles;
//         state.error = '';
//       })
//       .addCase(getNewsThunk.rejected, (state, { payload }) => {
//         state.status = 'rejected';
//         state.error = payload;
//       });
//   },
// });

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const customArr = [getNewsThunk, getNewsSearchThunk];

const fn = status => customArr.map(el => el[status]);

const handlePending = state => {
  state.status = defaultStatus.pending;
};

const handleFulfilled = (state, { payload }) => {
  state.status = defaultStatus.fulfilled;
  state.news = payload.articles;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.status = defaultStatus.rejected;
  state.error = payload;
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(getNewsThunk.pending, state => {
      //   state.status = 'pending';
      // })
      // .addCase(getNewsThunk.fulfilled, (state, { payload }) => {
      //   state.status = 'fulfilled';
      //   state.news = payload.articles;
      //   state.error = '';
      // })
      // .addCase(getNewsThunk.rejected, (state, { payload }) => {
      //   state.status = 'rejected';
      //   state.error = payload;
      // })

      // // рефакторинг, функции вынесены отдельно
      // .addCase(getNewsThunk.pending, handlePending)
      // .addCase(getNewsThunk.fulfilled, handleFulfilled)
      // .addCase(getNewsThunk.rejected, handleRejected)
      // .addCase(getNewsSearchThunk.pending, handlePending)
      // .addCase(getNewsSearchThunk.fulfilled, handleFulfilled)
      // .addCase(getNewsSearchThunk.rejected, handleRejected)

      // // рефакторинг, чтобы уменьшить дублирование
      // .addMatcher(
      //   isAnyOf([getNewsThunk.pending, getNewsSearchThunk.pending]),
      //   handlePending
      // )
      // .addMatcher(
      //   isAnyOf([getNewsThunk.fulfilled, getNewsSearchThunk.fulfilled]),
      //   handleFulfilled
      // )
      // .addMatcher(
      //   isAnyOf([getNewsThunk.rejected, getNewsSearchThunk.rejected]),
      //   handleRejected
      // )

      // // рефакторинг, статус вынесен в fn
      // .addMatcher(isAnyOf(...fn('pending')), handlePending)
      // .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled)
      // .addMatcher(isAnyOf(...fn('rejected')), handleRejected)

      // рефакторинг, вынесены неизменные переменные
      .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...fn(defaultStatus.fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
