import { NextFunction, Request, Response } from "express";
import { createProjectService } from "./projectsService";
import { Project, ProjectValidator } from "./projectsModel";

async function createProject(
  req: Request<{}, {}, Project>,
  res: Response,
  next: NextFunction
) {
  try {
    const newProject = ProjectValidator.parse(req.body);
    const createdProject = await createProjectService(newProject);
    return res.status(200).json(createdProject);
  } catch (error) {
    next(error);
  }
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
