import express from "express";
import { validateRequest } from "../../middlewares";
import {
  UpdateWorkspaceValidator,
  WorkspaceQueryValidator,
  WorkspaceValidator,
} from "./workspacesModel";
import workspacesController from "./workspacesController";

const router = express.Router();

router.post(
  "/",
  validateRequest({
    body: WorkspaceValidator,
  }),
  workspacesController.createWorkspace
);

router.get(
  "/",
  validateRequest({
    query: WorkspaceQueryValidator,
  }),
  workspacesController.findAllWorkspaces
);

router.get("/:id", workspacesController.findOneWorkspace);

router.put(
  "/:id",
  validateRequest({
    body: UpdateWorkspaceValidator,
  }),
  workspacesController.updateWorkspace
);

router.delete("/:id", workspacesController.deleteWorkspace);

export default router;
