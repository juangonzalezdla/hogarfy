import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello world');
})

const bootstrap = async () => {
  await connectDB(process.env.MONGODB_URL); // Conexion a la BD mediante variable de entorno

  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
};

bootstrap(); 