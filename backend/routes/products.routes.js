import { Router } from 'express';

import { 
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById 
} from '../controllers/products.controller.js';

const productRouter = Router();

productRouter.post('/create-product', createProduct);
productRouter.get('/get-products', getProducts);
productRouter.get('/get-product/:id', getProductById);
productRouter.put('/update-product/:id', updateProductById);
productRouter.delete('/delete-product/:id', deleteProductById);

export default productRouter;