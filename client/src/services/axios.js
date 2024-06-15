import axios from 'axios';

export const authAxios = axios.create({
  baseURL: `${import.meta.env.BACKEND_URL}auth`,
  withCredentials: true
});

export const userAxios = axios.create({
  baseURL: `${import.meta.env.BACKEND_URL}user`,
  withCredentials: true
});

export const productAxios = axios.create({
  baseURL: `${import.meta.env.BACKEND_URL}product`,
  withCredentials: true
});

export const categoryAxios = axios.create({
  baseURL: `${import.meta.env.BACKEND_URL}category`,
  withCredentials: true
});
