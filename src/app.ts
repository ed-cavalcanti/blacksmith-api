import express from 'express';
import productRouter from './routes/routes.product';

const app = express();

app.use(express.json());

app.get('/products', productRouter);
app.post('/products', productRouter);

export default app;
