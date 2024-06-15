import { Router } from 'express';
import getUser from '../controllers/getUser.controller.js';
import updateUser from '../controllers/updateUser.controller.js';
import updateEmail from '../controllers/updateEmail.controller.js';
import updatePassword from '../controllers/updatePassword.controller.js';
import deleteUser from '../controllers/deleteUser.controller.js';
import authenticate from '../../auth/Middlewares/authenticate.middleware.js';
import validateDto from '../../auth/Middlewares/validateDto.middleware.js';
import updateUserDto from '../dto/updateUser.dto.js';
import updateEmailDto from '../dto/updateEmail.dto.js';
import updatePasswordDto from '../dto/updatePassword.dto.js';
import deleteUserDto from '../dto/deleteUser.dto.js';

const userRouter = Router();

userRouter.get('/get-user/:id', authenticate, getUser);
userRouter.put('/update-user/:id', validateDto(updateUserDto), authenticate, updateUser);
userRouter.patch('/update-email/:id', validateDto(updateEmailDto), authenticate, updateEmail);
userRouter.patch('/update-password/:id', validateDto(updatePasswordDto), authenticate, updatePassword);
userRouter.delete('/delete-user/:id', validateDto(deleteUserDto), authenticate, deleteUser);

export default userRouter;
