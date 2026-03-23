import express from 'express';
import livrosRouter from './routes/livroRouter.js';

const app = express();
const PORT = 8000;

app.use('/livros', livrosRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});