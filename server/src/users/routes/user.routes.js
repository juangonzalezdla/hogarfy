import { Router } from 'express';
import getUser from '../controllers/getUser.controller.js';
import updateUser from '../controllers/updateUser.controller.js';
import updateEmail from '../controllers/updateEmail.controller.js';
import updatePassword from '../controllers/updatePassword.controller.js';
import deleteUser from '../controllers/deleteUser.controller.js';

const userRouter = Router();

userRouter.get('/get-user/:id', getUser);
userRouter.put('/update-user/:id', updateUser);
userRouter.patch('/update-email/:id', updateEmail);
userRouter.patch('/update-password/:id', updatePassword);
userRouter.delete('/delete-user/:id', deleteUser);

export default userRouter;