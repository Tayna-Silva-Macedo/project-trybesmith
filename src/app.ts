import express from 'express';

import productsRouter from './routes/products.route';
import usersRouter from './routes/users.route';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
