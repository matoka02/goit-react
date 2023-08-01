// 08. Users
// Part 01

import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from './Layout';
import HomePage from './pages/HomePage';

const ToDoDetails = lazy(() => import('./ToDoDetails'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:id" element={<ToDoDetails />} />
        <Route path='products' element={<ProductsPage />} />
      </Route>
      <Route path='/login' element={
        <Suspense>
          <LoginPage />
        </Suspense>
      } />
    </Routes>
  );
};

export default App;
