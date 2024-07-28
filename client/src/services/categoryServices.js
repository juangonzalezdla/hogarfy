import { categoryAxios } from './axios.js';

export const createCategoryService = (category) => categoryAxios.post('/create', category);
export const getCategoriesService = () => categoryAxios.get('/get-categories');
export const getCategoryService = (id) => categoryAxios.get(`/get-category/${id}`);
export const updateCategoryService = (id, category) => categoryAxios.put(`/update/${id}`, category);
export const deleteCategoryService = (id) => categoryAxios.delete(`/delete/${id}`);
