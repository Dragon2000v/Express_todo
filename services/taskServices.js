import Task from "../db/models/Task.js";

export const getAllTasks = async () => {
  return await Task.find();
};

export const createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

export const getTaskById = async (id) => {
  return await Task.findById(id);
};

export const updateTask = async (id, taskData) => {
  return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

export const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};
