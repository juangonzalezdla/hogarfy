import { authAxios } from './axios.js';

export const logUpService = async (user) => authAxios.post('/logup', user);
export const logInService = async (user) => authAxios.post('/login', user);
