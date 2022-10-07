import express from 'express';
import usersController from '../controllers/users.controller';
import loginMiddleware from '../middlewares/login.middleware';

const router = express.Router();

router.post('/', loginMiddleware, usersController.login);

export default router;
