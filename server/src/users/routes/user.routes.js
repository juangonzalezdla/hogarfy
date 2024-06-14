import { Router } from 'express';
import getUser from '../controllers/getUser.controller.js';
import updateUser from '../controllers/updateUser.controller.js';
import updateEmail from '../controllers/updateEmail.controller.js';
import updatePassword from '../controllers/updatePassword.controller.js';
import deleteUser from '../controllers/deleteUser.controller.js';
import authenticate from '../../auth/Middlewares/authenticate.middleware.js';

const userRouter = Router();

userRouter.get('/get-user/:id', authenticate, getUser);
userRouter.put('/update-user/:id', authenticate, updateUser);
userRouter.patch('/update-email/:id', authenticate, updateEmail);
userRouter.patch('/update-password/:id', authenticate, updatePassword);
userRouter.delete('/delete-user/:id', authenticate, deleteUser);

export default userRouter;