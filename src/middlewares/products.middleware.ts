import { NextFunction, Request, Response } from 'express';
import { Product } from '../interfaces';
import HttpException from '../shared/HttpException';
import joi from '../shared/joi';
import statusCodes from '../shared/statusCodes';

const productsMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const product: Omit<Product, 'id' | 'orderId'> = req.body;

  const { error } = joi.productSchema.validate(product);

  if (error) {
    const status = error.details[0].type === 'any.required'
      ? statusCodes.BAD_REQUEST
      : statusCodes.UNPROCESSABLE_ENTITY;

    throw new HttpException(status, error.message);
  }

  return next();
};

export default productsMiddleware;
