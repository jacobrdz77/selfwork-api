import { NextFunction, Request, Response } from "express";
import {
  createProjectService,
  deleteProjectService,
  findAllProjectService,
  findOneProjectService,
  updateProjectService,
} from "./projectsService";
import { Project } from "./projectsModel";

async function createProject(
  req: Request<{}, {}, Project>,
  res: Response,
  next: NextFunction
) {
  try {
    const createdProject = await createProjectService(req.body);
    return res.status(200).json(createdProject);
  } catch (error) {
    next(error);
  }
}

async function getAllProjects(
  req: Request<{}, {}, {}, { workspaceId: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const projects = await findAllProjectService(req.query.workspaceId);
    return res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
}

async function getOneProject(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const project = await findOneProjectService(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ message: `Project with ID: ${req.params.id} not found.` });
    }
    return res.status(200).json(project);
  } catch (error) {
    next(error);
  }
}

async function updateProject(
  req: Request<{ id: string }, {}, Project>,
  res: Response,
  next: NextFunction
) {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No project data provided." });
    }
    await updateProjectService(req.params.id, req.body);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

async function deleteProject(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    await deleteProjectService(req.params.id);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

export default {
  createProject,
  getAllProjects,
  getOneProject,
  updateProject,
  deleteProject,
};
