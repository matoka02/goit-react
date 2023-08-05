import axios from 'axios';

// const myProfile = {
//   id: 20,
//   email: 'nigomedzyanova.anastasiya@mail.ru',
//   password: 'lllllllllllll',
//   name: 'Khasiia Nihomedzianova',
//   role: 'customer',
//   avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
//   creationAt: '2023-08-03T17:01:25.000Z',
//   updatedAt: '2023-08-03T17:01:25.000Z',
// };

const instance = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

// функция добавления токена
const setToken = (token) => {
	instance.defaults.headers.common['Authorization'] = token;
};

// функция снятия токена
export const dellToken = () => {
	delete instance.defaults.headers.common['Authorization']
};

// запрос регистрации
export const signUp = async body => {
  return await instance.post('/users', body);
};

// запрос логинизации
export const login = async body => {
  // return await instance.post('/auth/login', body);
  const { data } = await instance.post('/auth/login', body);
  setToken(`Bearer ${data.access_token}`);
  return data;
};

export const getProfile = async () => {
  const { data } = await instance('')
	// const { data } = await instance('/auth/profile');
	return data;
};
