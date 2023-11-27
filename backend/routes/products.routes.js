import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { 
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById 
} from '../controllers/products.controller.js';

const productRouter = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './backend/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  },
});

const upload = multer({ storage });

productRouter.post('/create-product', upload.array('images', 4), createProduct);
productRouter.get('/get-products', getProducts);
productRouter.get('/get-product/:id', getProductById);
productRouter.put('/update-product/:id', upload.array('images', 4), updateProductById);
productRouter.delete('/delete-product/:id', deleteProductById);

export default productRouter;