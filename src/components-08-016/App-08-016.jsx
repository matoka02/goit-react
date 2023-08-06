// 08. Users
// Part 02

import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const ToDoDetails = lazy(() => import('./ToDoDetails'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));

const App = () => {
  const isAuth = useSelector(state => state.auth.access_token);
  console.log(isAuth);
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }}></Toaster>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          {/* вариант №1 для авторизации */}
          {/* {isAuth && (
          <>
            <Route path="todo" element={<TodoPage />} />
            <Route path="todo/:id" element={<ToDoDetails />} />
            <Route path="products" element={<ProductsPage />} />
          </>
        )} */}
          <Route path="todo" element={<TodoPage />} />
          <Route path="todo/:id" element={<ToDoDetails />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="/signUp"
          element={
            <Suspense>
              <RegistrationPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
