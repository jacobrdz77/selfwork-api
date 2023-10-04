import { NextFunction, Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  findAllTasksService,
  findOneTaskService,
  updateTaskService,
  updateTwoTasksService,
} from "./tasksService";
import { Task, UpdateTaskOrder } from "./tasksModel";

async function createTask(
  req: Request<{ id: string }, {}, Task>,
  res: Response,
  next: NextFunction
) {
  try {
    const task = await createTaskService(req.params.id, req.body);
    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

async function findOneTask(
  req: Request<{ id: string }, {}, Task>,
  res: Response,
  next: NextFunction
) {
  try {
    const task = await findOneTaskService(req.params.id);
    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

async function findAllTasks(
  req: Request<{ id: string }, {}, Task>,
  res: Response,
  next: NextFunction
) {
  try {
    const tasks = await findAllTasksService(req.params.id);
    return res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
}

async function updateTwoTasksOrder(
  req: Request<{}, {}, UpdateTaskOrder>,
  res: Response,
  next: NextFunction
) {
  try {
    const updatedTasks = await updateTwoTasksService(
      req.body.firstTask,
      req.body.secondTask
    );
    return res.status(204).json({});
    // return res.status(200).json(updatedTasks);
  } catch (error) {
    next(error);
  }
}

async function updateTask(
  req: Request<{ id: string }, {}, Task>,
  res: Response,
  next: NextFunction
) {
  try {
    await updateTaskService(req.params.id, req.body);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

async function deleteTask(
  req: Request<{ id: string }, {}, Task>,
  res: Response,
  next: NextFunction
) {
  try {
    await deleteTaskService(req.params.id);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

export default {
  updateTwoTasksOrder,
  findOneTask,
  findAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
