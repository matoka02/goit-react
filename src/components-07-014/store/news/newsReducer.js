import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { getNewsSearchThunk, getNewsThunk } from './thunk';
import initialState from './initialState';

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
      .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...fn(defaultStatus.fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
