// import { Component } from 'react';
import getNews from 'servises/getNews';
import ErrorCard from './ErrorCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCustomContext } from './Context';

const STATUS = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  PENDING: 'pending',
};

const ContentInfo = ({ searchText }) => {
  const { news, setNews } = useCustomContext()
  // const [news, setNews] = useState(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(()=>{
    news&&setStatus(STATUS.RESOLVED)
  }, [news]);

  useEffect(() => {
    if (!searchText) {
      return;
    }
    setStatus(STATUS.PENDING);
    getNews(searchText)
      .then(resp => resp.json()) // любой ответ от этого сервиса приходит в формате json
      .then(data => {
        console.log(data);
        if (data.status === 'ok') {
          setNews(data.articles);
          setStatus(STATUS.RESOLVED);
        } else return Promise.reject(data.message);
      })
      .catch(error => {
        // console.error(error);
        setError(error);
        setStatus(STATUS.REJECTED);
      });
  }, [searchText, setNews]);

  if (status === STATUS.PENDING) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else if (status === STATUS.RESOLVED) {
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
