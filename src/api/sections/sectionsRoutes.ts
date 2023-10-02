import express from "express";
import { validateRequest } from "../../middlewares";
import {
  SectionValidator,
  UpdateSectionsOrderValidator,
} from "./sectionsModel";
import sectionsController from "./sectionsController";
import { TaskValidator } from "../tasks/tasksModel";
import tasksController from "../tasks/tasksController";

const router = express.Router();

router.put(
  "/",
  validateRequest({
    body: UpdateSectionsOrderValidator,
  }),
  sectionsController.updateTwoSectionsOrder
);

router.put(
  "/:id",
  validateRequest({
    body: SectionValidator,
  }),
  sectionsController.updateSection
);

router.delete("/:id", sectionsController.deleteSection);

// For Tasks
router.post(
  "/:id/tasks",
  validateRequest({
    body: TaskValidator,
  }),
  tasksController.createTask
);

export default router;
