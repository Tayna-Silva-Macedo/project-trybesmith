import express from 'express';
import usersController from '../controllers/users.controller';
import usersMiddleware from '../middlewares/users.middleware';

const router = express.Router();

router.post('/', usersMiddleware, usersController.create);

export default router;
