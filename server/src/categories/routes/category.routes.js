import { Router } from 'express';
import createCategory from '../controllers/createCategory.controller.js';
import getCategory from '../controllers/getCategory.controller.js';
import getCategories from '../controllers/getCategories.controller.js';
import updateCategory from '../controllers/updateCategory.controller.js';
import deleteCategory from '../controllers/deleteCategory.controller.js';
import authenticate from '../../auth/Middlewares/authenticate.middleware.js';
import authorizeAdmin from '../../auth/Middlewares/authorizeAdmin.middleware.js';

const categoryRouter = Router();

categoryRouter.post('/create-category', authenticate, authorizeAdmin, createCategory);
categoryRouter.get('/get-category/:id', getCategory);
categoryRouter.get('/get-categories', getCategories);
categoryRouter.put('/update-category/:id', authenticate, authorizeAdmin, updateCategory);
categoryRouter.delete('/delete-category/:id', authenticate, authorizeAdmin, deleteCategory);

export default categoryRouter;