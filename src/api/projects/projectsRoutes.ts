import express from "express";
import { validateRequest } from "../../middlewares";
import projectsController from "./projectsController";
import {
  ProjectQueryValidator,
  ProjectValidator,
  UpdateProjectValidator,
} from "./projectsModel";
import { SectionValidator } from "../sections/sectionsModel";
import sectionsController from "../sections/sectionsController";

const router = express.Router();

router.post(
  "/",
  validateRequest({
    body: ProjectValidator,
  }),
  projectsController.createProject
);

router.get(
  "/",
  validateRequest({
    query: ProjectQueryValidator,
  }),
  projectsController.getAllProjects
);
router.get("/:id", projectsController.getOneProject);

router.put(
  "/:id",
  validateRequest({
    body: UpdateProjectValidator,
  }),
  projectsController.updateProject
);
router.delete("/:id", projectsController.deleteProject);

// For Sections
router.post(
  "/:id/sections",
  validateRequest({
    body: SectionValidator,
  }),
  sectionsController.createSection
);

router.get("/:id/sections", sectionsController.getAllSections);

export default router;
