import express from "express";
import projectsController from "./projectsController";
import { validateRequest } from "../../middlewares";
import { ProjectQueryValidator, ProjectValidator } from "./projectsModel";

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
    body: ProjectValidator,
  }),
  projectsController.updateProject
);
router.delete("/:id", projectsController.deleteProject);

export default router;
