import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  withCredentials: true
});

const userAxios = axios.create({
  baseURL: 'http://localhost:3000/api/user',
  withCredentials: true
});

const productAxios = axios.create({
  baseURL: 'http://localhost:3000/api/product',
  withCredentials: true
});

const categoryAxios = axios.create({
  baseURL: 'http://localhost:3000/api/category',
  withCredentials: true
});

const orderAxios = axios.create({
  baseURL: 'http://localhost:3000/api/order',
  withCredentials: true
});

export { authAxios, userAxios, productAxios, categoryAxios, orderAxios };