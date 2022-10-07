import express from 'express';
import productsController from '../controllers/products.controller';
import productsMiddleware from '../middlewares/products.middleware';

const router = express.Router();

router.get('/', productsController.getAll);

router.post('/', productsMiddleware, productsController.create);

export default router;
