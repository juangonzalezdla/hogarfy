import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  withCredentials: true
});

const userAxios = axios.create({
  baseURL: 'http://localhost:3000/api/user',
  withCredentials: true
});

const apiAxios = axios.create({
  baseURL: 'http://localhost:3000/api/product',
  withCredentials: true
});

export { authAxios, userAxios, apiAxios };