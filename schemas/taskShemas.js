import Joi from "joi";

export const CreateTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  isCompleted: Joi.boolean().default(false),
});

export const UpdateTaskSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string().optional(),
  isCompleted: Joi.boolean(),
});
