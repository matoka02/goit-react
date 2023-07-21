// 05. Routing
// Part 02

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout';
// import ToDoDetails from './ToDoDetails';
import HomePage from './pages/HomePage';
// import NewsPage from './pages/NewsPage';
// import TodoPage from './pages/TodoPage';

const ToDoDetails = lazy(() => import('./ToDoDetails'));
const TodoPage = lazy(() => import('./pages/TodoPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* index - дублирование 2 компонентов на 1 маршруте */}
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:id" element={<ToDoDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
