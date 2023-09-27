import express, { Request, Response } from "express";
import projectsController from "./projectsController";

const router = express.Router();

router.post("/", projectsController.createProject);
router.get("/", projectsController.getAllProjects);
router.get("/:id", projectsController.getOneProject);
router.put("/:id", projectsController.getAllProjects);
router.delete("/:id", projectsController.getAllProjects);

export default router;
