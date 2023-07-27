import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getTopNews } from 'servises/getNewsRedux';

// export const getNewsThunk = () => {
//   // return (dispatch) => ({ type: 'thunk', payload: 100 });
//   return async dispatch => {
//     // const data = await fetch();
//     // dispatch({ type: 'thunk', payload: 100 });
//     // return;
//     try {
//       dispatch(newsSlice.actions.fetching());
//       const data = await getTopNews();
//       dispatch(newsSlice.actions.fetchSuccess(data));
//     } catch (error) {
//       dispatch(newsSlice.actions.fetchError(error));
//     }
//   };
// };

// рефакторинг
export const getNewsThunk = createAsyncThunk('news/geTopNews', async () => {
  return await getTopNews();
});

const initialState = {
  news: [],
  // isLoading: false,
  status: 'idle',
  error: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  // reducers: {
  //   fetching: state => {
  //     // state.isLoading = true;
  //     state.status = 'pending';
  //   },
  //   fetchSuccess: (state, { payload }) => {
  //     // state.isLoading = false;
  //     state.status = 'fulfilled';
  //     state.news = payload.articles;
  //     state.error = '';
  //   },
  //   fetchError: (state, { payload }) => {
  //     // state.isLoading = false;
  //     state.status = 'rejected';
  //     state.error = payload;
  //   },
  // },

  // // рефакторинг - объект
  // extraReducers:{
  // 	[getNewsThunk.pending]: (state) => {
  // 		state.status = 'pending';
  // 	},
  // 	[getNewsThunk.fulfilled]: (state, { payload }) => {
  // 		state.status = 'fulfilled';
  // 		state.news = payload.articles;
  // 		state.error = '';
  // 	},
  // 	[getNewsThunk.rejected]: (state, { payload }) => {
  // 		state.status = 'rejected';
  // 		state.error = payload;
  // 	},
  // },

  // рефакторинг - функция
  extraReducers: builder => {
    builder
      .addCase(getNewsThunk.pending, state => {
        state.status = 'pending';
      })
      .addCase(getNewsThunk.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.news = payload.articles;
        state.error = '';
      })
      .addCase(getNewsThunk.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
      });
  },
});

export const newsReducer = newsSlice.reducer;
