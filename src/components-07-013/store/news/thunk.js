import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNews, getTopNews } from "servises/getNewsRedux";

export const getNewsThunk = createAsyncThunk('news/geTopNews', async () => {
  return await getTopNews();
});

export const getNewsSearchThunk = createAsyncThunk(
	'news/getSearch',
	async (searchText) => {
		return await getNews(searchText)
	}
);