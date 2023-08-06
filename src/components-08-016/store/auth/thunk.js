import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, login } from 'servises/auth-service';

// export const loginThunk = createAsyncThunk('auth/login', async (body) => {
// 	return await login(body)
// });

export const loginThunk = createAsyncThunk('auth/login', async (body, {dispatch}) => {
	const data = await login(body);
	dispatch(getProfileThunk());
	return data
});

export const getProfileThunk = createAsyncThunk(
	'auth/profile',
	async (_, thunk) => {
		return await getProfile()
	}
);