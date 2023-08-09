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
productRouter.get('/get-product', getProductById);
productRouter.put('/update-product', updateProductById);
productRouter.delete('/delete-product', deleteProductById);

export default productRouter;