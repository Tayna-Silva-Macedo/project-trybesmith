import express from 'express';

import ordersController from '../controllers/orders.controller';

import authMiddleware from '../middlewares/auth.middleware';
import orderMiddleware from '../middlewares/order.middleware';

const router = express.Router();

router.get('/', ordersController.getAll);

router.post('/', authMiddleware, orderMiddleware, ordersController.create);

export default router;
