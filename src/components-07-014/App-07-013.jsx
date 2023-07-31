// 07. Async Redux. Selector optimization
// Part 01

import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from './Layout';
// import ToDoDetails from './ToDoDetails';
import HomePage from './pages/HomePage';
// import NewsPage from './pages/NewsPage';
// import TodoPage from './pages/TodoPage';
// import LoginPage from './pages/LoginPage';

const ToDoDetails = lazy(() => import('./ToDoDetails'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:id" element={<ToDoDetails />} />
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
