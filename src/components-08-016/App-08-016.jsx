// 08. Users
// Part 02

import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Layout from './Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
          <Route
            path="todo"
            element={
              <PrivateRoute>
                <TodoPage />
              </PrivateRoute>
            }
          />
          <Route
            path="todo/:id"
            element={
              <PrivateRoute>
                <ToDoDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRoute>
                <ProductsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense>
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="/signUp"
          element={
            <Suspense>
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
