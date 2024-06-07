import { Router } from 'express';
import logUp from '../controllers/logup.controller.js';
import login from '../controllers/login.controller.js';

const authRouter = Router();

authRouter.post('/logup', logUp);
authRouter.post('/login', login);

export default authRouter;