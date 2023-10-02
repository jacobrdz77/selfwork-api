import express from "express";
import { validateRequest } from "../../middlewares";
import { TaskValidator, UpdateTasksOrderValidator } from "./tasksModel";
import tasksController from "./tasksController";

const router = express.Router();

router.put(
  "/",
  validateRequest({
    body: UpdateTasksOrderValidator,
  }),
  tasksController.updateTwoTasksOrder
);

router.get("/:id", tasksController.findOneTask);

router.put(
  "/:id",
  validateRequest({
    body: TaskValidator,
  }),
  tasksController.updateTask
);

router.delete("/:id", tasksController.deleteTask);

export default router;
