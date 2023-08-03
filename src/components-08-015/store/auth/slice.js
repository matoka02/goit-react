import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk } from './thunk';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.access_token = payload.access_token;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // .addCase(loginThunk.pending, handlePending)
      // .addCase(loginThunk.fulfilled, handleFulfilled)
      // .addCase(loginThunk.rejected, handleRejected)

      .addMatcher(isAnyOf(loginThunk.pending, getProfileThunk.pending), handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addMatcher(isAnyOf(loginThunk.fulfilled, getProfileThunk.rejected), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
