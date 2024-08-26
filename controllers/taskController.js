import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import * as taskService from "../services/taskServices.js";

const getAllTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.status(200).json({
    status: 200,
    data: tasks,
  });
};

const createTask = async (req, res) => {
  const task = await taskService.createTask(req.body);
  if (!task) throw new HttpError(400, "Failed to create task");
  res.status(201).json({
    status: 201,
    message: "Task successfully created",
    data: task,
  });
};

const getTaskById = async (req, res) => {
  const task = await taskService.getTaskById(req.params.id);
  if (!task) throw new HttpError(404, "Task not found");
  res.status(200).json({
    status: 200,
    data: task,
  });
};

const updateTask = async (req, res) => {
  const task = await taskService.updateTask(req.params.id, req.body);
  if (!task) throw new HttpError(404, "Task not found");
  res.status(200).json({
    status: 200,
    message: "Task successfully updated",
    data: task,
  });
};

const deleteTask = async (req, res) => {
  const task = await taskService.deleteTask(req.params.id);
  if (!task) throw new HttpError(404, "Task not found");
  res.status(204).send();
};

export default {
  getAllTasks: ctrlWrapper(getAllTasks),
  createTask: ctrlWrapper(createTask),
  getTaskById: ctrlWrapper(getTaskById),
  updateTask: ctrlWrapper(updateTask),
  deleteTask: ctrlWrapper(deleteTask),
};
