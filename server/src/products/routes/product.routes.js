import { Router } from 'express';
import createProduct from '../controllers/createProduct.controller.js';
import getProduct from '../controllers/getProduct.controller.js';
import getProducts from '../controllers/getProducts.controller.js';
import getRecentProducts from '../controllers/getRecentProducts.controller.js'
import getFeaturedProducts from '../controllers/getFeaturedProducts.js';
import updateProduct from '../controllers/updateProduct.controller.js';
import deleteProduct from '../controllers/deleteProduct.controller.js';
import authenticate from '../../Middlewares/authenticate.middleware.js';
import authorizeAdmin from '../../Middlewares/authorizeAdmin.middleware.js';

const productRouter = Router();

productRouter.post('/create', authenticate, authorizeAdmin, createProduct);
productRouter.get('/get-product/:id', getProduct);
productRouter.get('/get-products', getProducts);
productRouter.get('/recent-products', getRecentProducts);
productRouter.get('/featured-products', getFeaturedProducts);
productRouter.put('/update/:id', authenticate, authorizeAdmin, updateProduct);
productRouter.delete('/delete/:id', authenticate, authorizeAdmin, deleteProduct);

export default productRouter;