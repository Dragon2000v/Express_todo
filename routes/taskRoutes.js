import express from "express";
import taskController from "../controllers/taskController.js";
import validateBody from "../helpers/validateBody.js";
import { CreateTaskSchema, UpdateTaskSchema } from "../schemas/taskShemas.js";
import isValidId from "../middlewares/isValidId.js";
import isEmtyBody from "../middlewares/isEmptyBody.js";

const taskRouter = express.Router();

taskRouter.get("/", taskController.getAllTasks);
taskRouter.post(
  "/",
  isEmtyBody,
  validateBody(CreateTaskSchema),
  taskController.createTask
);
taskRouter.get("/:id", isValidId, taskController.getTaskById);
taskRouter.put(
  "/:id",
  isEmtyBody,
  validateBody(UpdateTaskSchema),
  taskController.updateTask
);
taskRouter.delete("/:id", isValidId, taskController.deleteTask);

export default taskRouter;
