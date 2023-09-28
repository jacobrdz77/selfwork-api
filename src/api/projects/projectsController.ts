import { NextFunction, Request, Response } from "express";
import { createProjectService } from "./projectsService";
import { Project } from "./projectsModel";

async function createProject(
  req: Request<{}, {}, Project>,
  res: Response,
  next: NextFunction
) {
  const createdProject = await createProjectService(req.body);
  return res.status(200).json(createdProject);
}

async function getAllProjects(req: Request, res: Response) {
  res.json({});
}

async function getOneProject(req: Request<{ id: string }>, res: Response) {
  res.json({});
}

async function updateProject(req: Request<{ id: string }>, res: Response) {
  res.json({});
}

async function deleteProject(req: Request<{ id: string }>, res: Response) {
  res.json({});
}

export default {
  createProject,
  getAllProjects,
  getOneProject,
  updateProject,
  deleteProject,
};
