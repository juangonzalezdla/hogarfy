import { productAxios } from './axios.js';

export const createProductService = (product) => productAxios.post('/create-product', product);
export const getProductsService = () => productAxios.get('/get-products');
export const getProductService = (id) => productAxios.get(`/get-product/${id}`);
export const updateProductService = (product) => productAxios.update(`/update-product/${product._id}`, product);
export const deleteProductService = (id) => productAxios.delete(`/delete-product/${id}`);
