import { Router } from 'express';
import { verifyToken } from '../middlewares/jwt.middleware.js';
import validateSchema from '../middlewares/validator.middleware.js';

import { 
  userRegisterDTOSchema, 
  userLoginDTOSchema,
  userUnregisterDTOSchema,
  userUpdateDataDTOSchema, 
  userUpdateEmailDTOSchema,
  userUpdatePasswordDTOSchema, 
} from '../dto/user-dto.js';

import { 
  userRegister,
  userLogin, 
  userLogout, 
  userProfile, 
  userUnregister, 
  userUpdateData, 
  userUpdateEmail,
  userUpdatePassword,
  userVerifyToken 
} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/register', 
  validateSchema(userRegisterDTOSchema), 
  userRegister
);

userRouter.post('/login',
  validateSchema(userLoginDTOSchema), 
  userLogin
);

userRouter.post('/logout', userLogout);

userRouter.get('/verify', userVerifyToken);

userRouter.get('/profile', verifyToken, userProfile);

userRouter.patch('/update-data', 
  userVerifyToken,
  validateSchema(userUpdateDataDTOSchema), 
  userUpdateData
);

userRouter.patch('/update-email', 
  userVerifyToken,
  validateSchema(userUpdateEmailDTOSchema), 
  userUpdateEmail
);

userRouter.patch('/update-password', 
  userVerifyToken,
  validateSchema(userUpdatePasswordDTOSchema), 
  userUpdatePassword
);

userRouter.delete('/unregister', 
  userVerifyToken,
  validateSchema(userUnregisterDTOSchema), 
  userUnregister
);

export default userRouter;