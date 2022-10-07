import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const newProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const newUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const newOrderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'array.min': '{#label} must include only numbers',
    }),
});

export default { loginSchema, newProductSchema, newUserSchema, newOrderSchema };
