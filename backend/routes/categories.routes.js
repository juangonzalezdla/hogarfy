import { Router } from 'express';
import { 
  createCategory, 
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
} from '../controllers/categories.controller.js';

const categoryRouter = Router();

categoryRouter.post('/create-category', createCategory);
categoryRouter.get('/get-categories', getCategories);
categoryRouter.get('/get-category/:id', getCategory);
categoryRouter.put('/update-category/:id', updateCategory);
categoryRouter.delete('/delete-category/:id', deleteCategory);

export default categoryRouter;