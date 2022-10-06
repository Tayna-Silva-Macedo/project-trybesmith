import { NextFunction, Request, Response } from 'express';
import { Login } from '../interfaces';
import HttpException from '../shared/HttpException';
import joi from '../shared/joi';
import statusCodes from '../shared/statusCodes';

const loginMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const login: Login = req.body;

  const { error } = joi.loginSchema.validate(login);

  if (error) throw new HttpException(statusCodes.BAD_REQUEST, error.message);

  return next();
};

export default loginMiddleware;
