import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ErrorCard from './ErrorCard';
import { getNewsSearchThunk, getNewsThunk } from './store/news/thunk';

const STATUS = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
};

const ContentInfo = ({ searchText }) => {

	const dispatch = useDispatch();
	const { news, status, error } = useSelector((state) => state.news);
  
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

