import express, { Request, Response } from "express";
import MessageResponse from "../interfaces/MessageResponse";
import projectRouter from "./projects/projectsRoutes";
import sectionRouter from "./sections/sectionsRoutes";
import taskRouter from "./tasks/tasksRoutes";
import workspaceRouter from "./workspaces/workspacesRouter";
import clientRouter from "./clients/clientsRouter";

const router = express.Router();

router.get("/", (req: Request, res: Response<MessageResponse>) => {
  res.json({
    message: "Main API Route!",
  });
});

// Import routers here
router.use("/projects", projectRouter);
router.use("/sections", sectionRouter);
router.use("/tasks", taskRouter);
router.use("/workspaces", workspaceRouter);
router.use("/clients", clientRouter);

export default router;
