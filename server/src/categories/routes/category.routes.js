import { Router } from 'express';
import createCategory from '../controllers/createCategory.controller.js';
import getCategory from '../controllers/getCategory.controller.js';
import getCategories from '../controllers/getCategories.controller.js';
import updateCategory from '../controllers/updateCategory.controller.js';
import deleteCategory from '../controllers/deleteCategory.controller.js';

const categoryRouter = Router();

categoryRouter.post('/create-category', createCategory);
categoryRouter.get('/get-category/:id', getCategory);
categoryRouter.get('/get-categories', getCategories);
categoryRouter.put('/update-category/:id', updateCategory);
categoryRouter.delete('/delete-category/:id', deleteCategory);

export default categoryRouter;