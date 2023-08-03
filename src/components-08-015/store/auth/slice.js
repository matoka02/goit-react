import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './thunk';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  // profile: null,
};

const handlePending = (state, { payload }) => {
	state.isLoading = true
}
const handleFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.error = ''
	state.access_token = payload.access_token
}
const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected);
  },
});

// login({
//   email: evt.target.elements.email.value,
//   password: evt.target.elements.password.value,
// }).then(() => {
//   console.log(login);
// });

export const authReducer = authSlice.reducer;
