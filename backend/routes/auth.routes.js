import { Router } from "express";
import validateSchema from '../middlewares/validator.middleware.js';

import { userRegisterDTOSchema, userLoginDTOSchema } from '../dto/user-dto.js';

import { 
  userRegister,
  userLogin, 
  userLogout, 
  userVerifyToken 
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', 
  validateSchema(userRegisterDTOSchema), 
  userRegister
);

authRouter.post('/login',
  validateSchema(userLoginDTOSchema), 
  userLogin
);

authRouter.get('/verify', userVerifyToken);

authRouter.post('/logout', userVerifyToken, userLogout);

export default authRouter;