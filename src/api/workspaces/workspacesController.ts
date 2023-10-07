import { NextFunction, Request, Response } from "express";
import { Workspace } from "./workspacesModel";
import {
  createWorkspaceService,
  deleteWorkspaceService,
  findAllWorkspacesService,
  findOneWorkspaceService,
  updateWorkspaceService,
} from "./workspacesService";

async function createWorkspace(
  req: Request<{}, {}, Workspace>,
  res: Response,
  next: NextFunction
) {
  try {
    const workspace = await createWorkspaceService(req.body);
    return res.status(200).json(workspace);
  } catch (error) {
    next(error);
  }
}

async function findAllWorkspaces(
  req: Request<{}, {}, {}, { ownerId: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const workspaces = await findAllWorkspacesService(req.query.ownerId);
    return res.status(200).json(workspaces);
  } catch (error) {
    next(error);
  }
}

async function findOneWorkspace(
  req: Request<{ id: string }, {}, Workspace>,
  res: Response,
  next: NextFunction
) {
  try {
    const workspace = await findOneWorkspaceService(req.params.id);
    return res.status(200).json(workspace);
  } catch (error) {
    next(error);
  }
}

async function updateWorkspace(
  req: Request<{ id: string }, {}, Workspace>,
  res: Response,
  next: NextFunction
) {
  try {
    await updateWorkspaceService(req.params.id, req.body);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

async function deleteWorkspace(
  req: Request<{ id: string }, {}, Workspace>,
  res: Response,
  next: NextFunction
) {
  try {
    await deleteWorkspaceService(req.params.id);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

export default {
  findOneWorkspace,
  findAllWorkspaces,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
};
