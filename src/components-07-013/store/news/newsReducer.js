import { createSlice } from '@reduxjs/toolkit';

import { getTopNews } from 'servises/getNewsRedux';

export const getNewsThunk = () => {
  // return (dispatch) => ({ type: 'thunk', payload: 100 });
  return async dispatch => {
    // const data = await fetch();
    // dispatch({ type: 'thunk', payload: 100 });
    // return;
    try {
      dispatch(newsSlice.actions.fetching());
      const data = await getTopNews();
      dispatch(newsSlice.actions.fetchSuccess(data));
    } catch (error) {
      dispatch(newsSlice.actions.fetchError(error));
    }
  };
};

const initialState = {
  news: [],
  // isLoading: false,
  status: 'idle',
  error: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetching: state => {
      // state.isLoading = true;
      state.status = 'pending';
    },
    fetchSuccess: (state, { payload }) => {
      // state.isLoading = false;
      state.status = 'fulfilled';
      state.news = payload.articles;
      state.error = '';
    },
    fetchError: (state, { payload }) => {
      // state.isLoading = false;
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export const newsReducer = newsSlice.reducer;


