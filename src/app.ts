import express from 'express';
import productRouter from './routes/routes.product';

const app = express();

app.use(express.json());

app.get('/roducts', productRouter);

export default app;
