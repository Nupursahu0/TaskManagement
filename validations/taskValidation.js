const Joi = require('joi');

const taskValidationSchema = Joi.object({
  title: Joi.string().required(),
  status: Joi.string().valid('pending', 'done').required(),
  dueDate: Joi.date().greater('now').required()
});

module.exports = { taskValidationSchema };
