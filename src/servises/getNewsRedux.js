const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '3e39cf3d7d364cc99301db7d83629f13';

const getNews = async(searchText) => {
  const data = await fetch(`${BASE_URL}/everything?q=${searchText}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  })
  return await data.json();
};

const getTopNews = async () => {
	const data = await fetch(`${BASE_URL}/top-headlines?country=us`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
	return await data.json();
}

export {getNews, getTopNews};
