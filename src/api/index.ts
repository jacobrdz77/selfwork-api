import express, { Request, Response } from "express";

import MessageResponse from "../interfaces/MessageResponse";
import projectRouter from "./projects/projectsRoutes";

const router = express.Router();

router.get("/", (req: Request, res: Response<MessageResponse>) => {
  res.json({
    message: "Main API Route!",
  });
});

// Import routers here
router.use("/projects", projectRouter);

export default router;
