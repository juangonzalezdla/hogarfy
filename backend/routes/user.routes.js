import { Router } from 'express';

import { 
  userProfile, 
  userUnregister, 
  userUpdateData, 
  userUpdateEmail,
  userUpdatePassword, 
} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/profile', userProfile);
userRouter.patch('/update-data', userUpdateData);
userRouter.patch('/update-email', userUpdateEmail);
userRouter.patch('/update-password', userUpdatePassword);
userRouter.delete('/unregister', userUnregister);

export default userRouter;