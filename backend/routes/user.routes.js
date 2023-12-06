import { Router } from 'express';
import { verifyToken } from '../middlewares/jwt.middleware.js';
import validateSchema from '../middlewares/validator.middleware.js';

import { 
  userUnregisterDTOSchema,
  userUpdateDataDTOSchema, 
  userUpdateEmailDTOSchema,
  userUpdatePasswordDTOSchema 
} from '../dto/user-dto.js';

import { 
  userProfile, 
  userUnregister, 
  userUpdateData, 
  userUpdateEmail,
  userUpdatePassword
} from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/account/:id', verifyToken, userProfile);

userRouter.patch('/update-data/:id', 
  verifyToken,
  validateSchema(userUpdateDataDTOSchema), 
  userUpdateData
);

userRouter.patch('/update-email/:id', 
  verifyToken,
  validateSchema(userUpdateEmailDTOSchema), 
  userUpdateEmail
);

userRouter.patch('/update-password/:id', 
  verifyToken,
  validateSchema(userUpdatePasswordDTOSchema), 
  userUpdatePassword
);

userRouter.delete('/delete-user/:id', 
  verifyToken,
  validateSchema(userUnregisterDTOSchema), 
  userUnregister
);

export default userRouter;