// import { Component } from 'react';
import { useEffect } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getNews } from 'servises/getNewsRedux';
import ErrorCard from './ErrorCard';
import { getNewsSearchThunk, getNewsThunk } from './store/news/thunk';
// import { useCustomContext } from './Context';


const STATUS = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
};

const ContentInfo = ({ searchText }) => {

  // const { news, setNews } = useCustomContext();
  // // const [news, setNews] = useState(null);
  // const [error, setError] = useState('');
  // const [status, setStatus] = useState(STATUS.IDLE);

	const dispatch = useDispatch();
	const { news, status, error } = useSelector((state) => state.news);
  console.log(news);

  // useEffect(() => {
  //   news && setStatus(STATUS.RESOLVED);
  // }, [news]);

  // useEffect(() => {
  //   if (!searchText) {
  //     return;
  //   }
  //   setStatus(STATUS.PENDING);
  //   getNews(searchText)
  //     .then(resp => resp.json()) // любой ответ от этого сервиса приходит в формате json
  //     .then(data => {
  //       console.log(data);
  //       if (data.status === 'ok') {
  //         setNews(data.articles);
  //         setStatus(STATUS.RESOLVED);
  //       } else return Promise.reject(data.message);
  //     })
  //     .catch(error => {
  //       // console.error(error);
  //       setError(error);
  //       setStatus(STATUS.REJECTED);
  //     });
  // }, [searchText, setNews]);

  
	useEffect(() => {
		dispatch(getNewsThunk())
	}, [dispatch]);

	useEffect(() => {
		if (!searchText) return
		dispatch(getNewsSearchThunk(searchText))
	}, [dispatch, searchText]);  

  if (status === STATUS.PENDING) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else if (status === STATUS.FULFILLED) {
    return (
      <ul>
        {news.map(el => {
          return <li key={el.url}>{el.title}</li>;
        })}
      </ul>
      // сюда можно добавить кнопку load more
    );
  } else if (status === STATUS.REJECTED) {
    return <ErrorCard>{error}</ErrorCard>;
  }
};

export default ContentInfo;

