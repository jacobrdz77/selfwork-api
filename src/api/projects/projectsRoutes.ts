import express from "express";
import projectsController from "./projectsController";
import { validateRequest } from "../../middlewares";
import { ProjectValidator } from "./projectsModel";

const router = express.Router();

router.post(
  "/",
  validateRequest({
    body: ProjectValidator,
  }),
  projectsController.createProject
);

router.get("/", projectsController.getAllProjects);
router.get("/:id", projectsController.getOneProject);
router.put("/:id", projectsController.getAllProjects);
router.delete("/:id", projectsController.getAllProjects);

export default router;
