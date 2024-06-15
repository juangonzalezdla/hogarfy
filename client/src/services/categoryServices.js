import { categoryAxios } from './axios.js';

export const createCategoryService = (category) => categoryAxios.post('/create-category', category);
export const getCategoriesService = () => categoryAxios.get('/get-categories');
export const getCategoryService = (id) => categoryAxios.get(`/get-category/${id}`);
export const updateCategoryService = (category) => categoryAxios.update(`/update-category/${category._id}`, category);
export const deleteCategoryService = (id) => categoryAxios.delete(`/delete-category/${id}`);
