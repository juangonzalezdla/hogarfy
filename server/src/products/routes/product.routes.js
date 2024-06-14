import { Router } from 'express';
import createProduct from '../controllers/createProduct.controller.js';
import getProduct from '../controllers/getProduct.controller.js';
import getProducts from '../controllers/getProducts.controller.js';
import updateProduct from '../controllers/updateProduct.controller.js';
import deleteProduct from '../controllers/deleteProduct.controller.js';
import authenticate from '../../auth/Middlewares/authenticate.middleware.js';
import authorizeAdmin from '../../auth/Middlewares/authorizeAdmin.middleware.js';

const productRouter = Router();

productRouter.post('/create-product', authenticate, authorizeAdmin, createProduct);
productRouter.get('/get-product/:id', getProduct);
productRouter.get('/get-products', getProducts);
productRouter.put('/update-product/:id', authenticate, authorizeAdmin, updateProduct);
productRouter.delete('/delete-product/:id', authenticate, authorizeAdmin, deleteProduct);

export default productRouter;