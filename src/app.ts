import express from 'express';
import productRouter from './routers/product.route';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(loginRouter);

export default app;
