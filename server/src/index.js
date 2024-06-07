import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import userRouter from './users/routes/user.routes.js';
import authRouter from './auth/routes/auth.routes.js';

dotenv.config(); // Configuración de las variables de entorno

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

// Middlewares
app.use(express.json());

// Routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
//app.use('/product');
//app.use('/category');

const bootstrap = async () => {
  await connectDB(MONGODB_URL); // Conexion a la BD mediante variable de entorno

  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
};

bootstrap(); 