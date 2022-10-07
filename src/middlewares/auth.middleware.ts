import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/HttpException';
import jwt from '../shared/jwt';
import statusCodes from '../shared/statusCodes';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new HttpException(statusCodes.UNAUTHORIZED, 'Token not found');
  }

  try {
    const payload = jwt.validate(authorization);
    res.locals.userId = payload.id;
    return next();
  } catch (error) {
    throw new HttpException(statusCodes.UNAUTHORIZED, 'Invalid token');
  }
};

export default authMiddleware;
