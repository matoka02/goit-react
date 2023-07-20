// 05. Routing
// Part 01

// import { Component } from 'react';
// import { useState } from 'react';
// import { Toaster } from 'react-hot-toast';
// import { useId } from 'react';
// import { nanoid } from 'nanoid';
import {  Route, Routes } from 'react-router-dom';

// import Header from './Header';
// import ToDoList from './ToDoList';
// import Modal from './Modal';
// import FormLogin from './FormLogin';
// import Search from './Search';
// import ContentInfo from './ContentInfo';
// import Counter from "./Counter";
// import TestUseMemo from './TestUseMemo';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import TodoPage from './pages/TodoPage';
import Layout from './Layout';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        {/* index - дублирование 2 компонентов на 1 маршруте */}
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />    
        <Route path="todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
