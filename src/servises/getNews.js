const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '3e39cf3d7d364cc99301db7d83629f13';

const getNews = (searchText) => {
  // fetch(`${BASE_URL}/everything?q=${searchText}`, {
  //   headers: {
  //     'X-Api-Key': API_KEY,
  //   },
  // })
  //   .then((resp) => resp.json())
  //   .then((news) => console.log(news));
  
  return fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  })
};

export default getNews;
