import { NextFunction, Request, Response } from "express";
import {
  createProjectService,
  findAllProjectService,
  findOneProjectService,
} from "./projectsService";
import { Project } from "./projectsModel";

async function createProject(
  req: Request<{}, {}, Project>,
  res: Response,
  next: NextFunction
) {
  const createdProject = await createProjectService(req.body);
  return res.status(200).json(createdProject);
}

async function getAllProjects(
  req: Request<{}, {}, {}, { workspaceId: string }>,
  res: Response
) {
  const projects = await findAllProjectService(req.query.workspaceId);
  return res.status(200).json(projects);
}

async function getOneProject(req: Request<{ id: string }>, res: Response) {
  const project = await findOneProjectService(req.params.id);
  if (!project) {
    return res
      .status(404)
      .json({ message: `Project with ID: ${req.params.id} not found.` });
  }
  return res.status(200).json(project);
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
