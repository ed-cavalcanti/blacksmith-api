import express from 'express';
import productRouter from './routes/routes.product';
import userRouter from './routes/routes.user';
import orderRouter from './routes/routes.order';

const app = express();

app.use(express.json());

app.get('/products', productRouter);
app.post('/products', productRouter);

app.post('/users', userRouter);

app.get('/orders', orderRouter);

export default app;
