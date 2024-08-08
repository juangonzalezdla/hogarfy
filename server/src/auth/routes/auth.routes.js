import { Router } from 'express';
import logUp from '../controllers/logup.controller.js';
import logIn from '../controllers/login.controller.js';
import logOut from '../controllers/logOut.controller.js';
import verifyToken from '../controllers/verifyToken.controller.js';
import authenticate from '../../Middlewares/authenticate.middleware.js';
import validateDto from '../../Middlewares/validateDto.middleware.js';
import logUpDto from '../dto/logup.dto.js';
import logInDto from '../dto/login.dto.js';

const authRouter = Router();

authRouter.post('/logup', validateDto(logUpDto), logUp);
authRouter.post('/login', validateDto(logInDto), logIn);
authRouter.get('/verify', verifyToken);
authRouter.post('/logout', authenticate, logOut);

export default authRouter;