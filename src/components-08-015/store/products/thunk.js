import { createAsyncThunk } from '@reduxjs/toolkit';

import { createProducts, deleteProducts, getProducts } from 'servises/productsAPI';

// запросы на бекенд
export const getProductsThunk = createAsyncThunk('products/get', () => getProducts());
export const createProductsThunk = createAsyncThunk('products/create', (data) => createProducts(data));
export const deleteProductsThunk = createAsyncThunk('products/delete', (id) => deleteProducts(id));