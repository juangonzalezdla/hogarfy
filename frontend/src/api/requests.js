import { authAxios, userAxios, categoryAxios, productAxios } from './axios';

// Auth
export const registerRequest = async (user) => authAxios.post(`/register`, user);
export const loginRequest = async (user) => authAxios.post(`/login`, user);
export const verifyTokenRequest = async () => authAxios.get(`/verify`);

// User
export const getUserRequest = async (id) => userAxios.get(`/account/${id}`);
export const updateDataRequest = async (user) => userAxios.patch(`/update-data/${user._id}`, user);
export const updateEmailRequest = async (user) => userAxios.patch(`/update-email/${user._id}`, user);
export const updatePasswordRequest = async (user) => userAxios.patch(`/update-password/${user._id}`, user);
export const deleteUserRequest = async (user) => userAxios.delete(`/unregister/${user._id}`, user);

// Categories
export const createCategoryRequest = async (category) => categoryAxios.post('/create-category', category);
export const getCategoriesRequest = async () => categoryAxios.get('/get-categories');
export const getCategoryRequest = async (id) => categoryAxios.get(`/get-category/${id}`);
export const updateCategoryRequest = async (category) => categoryAxios.put(`/get-category/${category._id}`, category);
export const deleteCategoryRequest = async (id) => categoryAxios.delete(`/get-category/${id}`);

// Products
export const createProductRequest = async (product) => productAxios.post('/create-product', product);
export const getProductsRequest = async () => productAxios.get('/get-products');
export const getProductRequest = async (id) => productAxios.get(`/get-product/${id}`);
export const updateProductRequest = async (product) => productAxios.put(`/get-product/${product._id}`, product);
export const deleteProductRequest = async (id) => productAxios.delete(`/get-product/${id}`);