const Joi = require("joi");

const createUserValidator = async (req, res, next) => {
  const schema = Joi.object()
    .keys({
      first_name: Joi.string().required(),
      middle_name: Joi.string(),
      last_name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      phone_number: Joi.string().required(),
      address: Joi.string().required(),
      role: Joi.string(),
      state: Joi.string().required(),
      city: Joi.string().required(),
    })
    .with("email", "password");

  try {
    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ status: "error", message: `${error.details[0].message}` });
  }
};
const loginValidator = async (req, res, next) => {
  const schema = Joi.object()
    .keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    })
    .with("email", "password");

  try {
    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ status: "error", message: `${error.details[0].message}` });
  }
};

module.exports = {
  createUserValidator,
  loginValidator,
};
