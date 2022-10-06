import express from 'express';
import 'express-async-errors';

import productsRouter from './routes/products.route';
import usersRouter from './routes/users.route';
import ordersRouter from './routes/orders.route';
import loginRouter from './routes/login.route';

import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

export default app;
