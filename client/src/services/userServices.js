import { userAxios } from './axios.js';

export const getUserService = async (id) => userAxios.get(`/get-user/${id}`);
export const updateUserService = async (id, user) => userAxios.put(`/update-user/${id}`, user);
export const updateEmailService = async (id, user) => userAxios.patch(`/update-email/${id}`, user);
export const updatePasswordService = async (id, user) => userAxios.patch(`/update-password/${id}`, user);
export const deleteUserService = async (id, user) => userAxios.delete(`/delete-user/${id}`, user);
