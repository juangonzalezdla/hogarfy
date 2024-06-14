import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRouter from './auth/routes/auth.routes.js';
import userRouter from './users/routes/user.routes.js';
import productRouter from './products/routes/product.routes.js';
import categoryRouter from './categories/routes/category.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config(); // Configuración de las variables de entorno

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);

const bootstrap = async () => {
  await connectDB(MONGODB_URL); // Conexion a la BD mediante variable de entorno

  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
};

bootstrap(); 