import { Router } from 'express';
import validateSchema from '../middlewares/validator.middleware.js';

import { userRegisterDTOSchema, userLoginDTOSchema } 
  from '../dto/user-dto.js';

import { userLogin, userLogout, userRegister } 
  from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', 
  validateSchema(userRegisterDTOSchema), 
  userRegister
);

authRouter.post('/login',
  validateSchema(userLoginDTOSchema), 
  userLogin
);

authRouter.post('/logout', userLogout);

export default authRouter;