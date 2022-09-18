import express from 'express';
import productRouter from './routes/routes.product';
import userRouter from './routes/routes.user';

const app = express();

app.use(express.json());

app.get('/products', productRouter);
app.post('/products', productRouter);

app.post('/users', userRouter);

export default app;
