import { Router } from 'express';
import createCategory from '../controllers/createCategory.controller.js';
import getCategory from '../controllers/getCategory.controller.js';
import getCategories from '../controllers/getCategories.controller.js';
import updateCategory from '../controllers/updateCategory.controller.js';
import deleteCategory from '../controllers/deleteCategory.controller.js';
import authenticate from '../../Middlewares/authenticate.middleware.js';
import authorizeAdmin from '../../Middlewares/authorizeAdmin.middleware.js';

const categoryRouter = Router();

categoryRouter.post('/create', authenticate, authorizeAdmin, createCategory);
categoryRouter.get('/get-category/:id', getCategory);
categoryRouter.get('/get-categories', getCategories);
categoryRouter.put('/update/:id', authenticate, authorizeAdmin, updateCategory);
categoryRouter.delete('/delete/:id', authenticate, authorizeAdmin, deleteCategory);

export default categoryRouter;