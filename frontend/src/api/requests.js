import { apiAxios, authAxios, userAxios } from './axios';

export const registerRequest = async (user) => authAxios.post(`/register`, user);
export const loginRequest = async (user) => authAxios.post(`/login`, user);
export const verifyTokenRequest = async () => authAxios.get(`/verify`);

export const getUserRequest = async (id) => userAxios.get(`/account/${id}`);
export const updateDataRequest = async (user) => userAxios.patch(`/update-data/${user._id}`, user);
export const updateEmailRequest = async (user) => userAxios.patch(`/update-email/${user._id}`, user);
export const updatePasswordRequest = async (user) => userAxios.patch(`/update-password/${user._id}`, user);
export const deleteUserRequest = async (id) => userAxios.delete(`/unregister/${id}`);