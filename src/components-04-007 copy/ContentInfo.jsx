import { Component } from 'react';
import getNews from 'servises/getNews';
import ErrorCard from './ErrorCard';

const STATUS = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  PENDING: 'pending',
};

class ContentInfo extends Component {
  state = {
    news: null,
    // isLoading: false,
    error: '',
    status: STATUS.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (prevProps.searchText !== this.props.searchText) {
      // this.setState({ isLoading: true });
      this.setState({ status: STATUS.PENDING });
      getNews(this.props.searchText)
        .then(resp => resp.json()) // любой ответ от этого сервиса приходит в формате json
        .then(data => {
          console.log(data);
          if (data.status === 'ok') {
            this.setState({ news: data.articles, status: STATUS.RESOLVED });
          } else return Promise.reject(data.message);
        })
        .catch(error => {
          console.error(error);
          this.setState({ error, status: STATUS.REJECTED });
        })
    }
  }

  render() {

    const { news, error } = this.state;

    if (this.state.status === STATUS.PENDING ) {
      return (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    } else if (this.state.status === STATUS.RESOLVED ) {
      return (
        <ul>
          {news.map(el => {
            return <li key={el.url}>{el.title}</li>;
          })}
        </ul>
        // сюда можно добавить кнопку load more
      );
    } else if (this.state.status === STATUS.REJECTED ) {
      return <ErrorCard>{error}</ErrorCard>;
    }     
  }
}

export default ContentInfo;
