import Joi from 'joi';

export const user = Joi.object({
  nome: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
});

export const userResponse = user.keys({ _id: Joi.required() });

export const userList = Joi.array().items(userResponse);

export const paramId = Joi.string().min(10).max(200);
