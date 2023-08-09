import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRouter from '../routes/auth.routes.js';
import userRouter from '../routes/user.routes.js';
import productRouter from '../routes/products.routes.js';

dotenv.config(); // Configuración de las variables de entorno

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());

// Routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/api', productRouter);

const bootstrap = async () => {
  await connectDB(process.env.MONGODB_URL); // Conexion a la BD mediante variable de entorno

  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
};

bootstrap(); // No tiene nada que ver con el framework de CSS