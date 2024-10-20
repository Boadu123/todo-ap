import Joi from "joi";

export const userRegisterValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("user", "vendor"),
});

export const userloginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const updateProfileValidator = Joi.object({
  name: Joi.string(),
  avatar: Joi.string(),
});

// // valdate user input
// const { error, value } = updateProfileValidator.validate(req.body),