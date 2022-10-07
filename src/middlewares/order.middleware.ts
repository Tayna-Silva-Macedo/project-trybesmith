import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/HttpException';
import joi from '../shared/joi';
import statusCodes from '../shared/statusCodes';

const orderMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const order = req.body;

  const { error } = joi.newOrderSchema.validate(order);

  if (error) {
    const status = error.details[0].type === 'any.required'
      ? statusCodes.BAD_REQUEST
      : statusCodes.UNPROCESSABLE_ENTITY;

    throw new HttpException(status, error.message);
  }

  return next();
};

export default orderMiddleware;
