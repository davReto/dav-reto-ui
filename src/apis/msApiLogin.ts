import axios from 'axios';

export const msApiLogin = () => {
  const url = 'http://localhost:3000/login';
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return instance;
};
