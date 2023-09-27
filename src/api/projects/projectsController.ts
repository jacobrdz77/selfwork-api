import { Request, Response } from "express";

async function createProject(req: Request, res: Response) {
  res.json({
    message: "Yoo",
  });
}
async function getAllProjects(req: Request, res: Response) {
  res.json({
    message: "Yoo",
  });
}

async function getOneProject(req: Request<{ id: string }>, res: Response) {
  res.json({
    message: "Yoo",
  });
}

async function updateProject(req: Request<{ id: string }>, res: Response) {
  res.json({
    message: "Yoo",
  });
}

async function deleteProject(req: Request<{ id: string }>, res: Response) {
  res.json({
    message: "Yoo",
  });
}

export default {
  createProject,
  getAllProjects,
  getOneProject,
  updateProject,
  deleteProject,
};
