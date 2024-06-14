import { Router } from 'express';
import logUp from '../controllers/logup.controller.js';
import logIn from '../controllers/login.controller.js';
import logOut from '../controllers/logout.controller.js';
import authenticate from '../Middlewares/authenticate.middleware.js';

const authRouter = Router();

authRouter.post('/logup', logUp);
authRouter.post('/login', logIn);
authRouter.post('/logout', authenticate, logOut);

export default authRouter;