import { userAxios } from './axios.js';

export const getUserService = async (id) => userAxios.get(`/account/${id}`);
export const updateUserService = async (user) => userAxios.put(`/update-data/${user._id}`, user);
export const updateEmailService = async (user) => userAxios.patch(`/update-email/${user._id}`, user);
export const updatePasswordService = async (user) => userAxios.patch(`/update-password/${user._id}`, user);
export const deleteUserService = async (user) => userAxios.delete(`/delete-user/${user._id}`, user);
