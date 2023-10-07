// Here is where the business logic is
import prisma from "../../lib/prisma/prismaClient";
import randomColor, { transformColor } from "../../utils/randomColor";
import { Workspace } from "./workspacesModel";

export async function createWorkspaceService(workspace: Workspace) {
  const workspaces = await prisma.workspace.findMany({
    where: {
      ownerId: workspace.ownerId,
    },
  });

  if (workspaces.length >= 3) {
    return new Error("Upgrade to premium to create more workspaces.");
  }

  const newWorkspace = await prisma.workspace.create({
    data: {
      name: workspace.name,
      owner: {
        connect: {
          id: workspace.ownerId,
        },
      },
      members: {
        connect: {
          id: workspace.ownerId,
        },
      },
    },
  });
  return newWorkspace;
}

export async function findAllWorkspacesService(ownerId: string) {
  const workspaces = await prisma.workspace.findMany({
    where: {
      ownerId,
    },
  });

  return workspaces;
}

export async function findOneWorkspaceService(id: string) {
  const workspace = await prisma.workspace.findUnique({
    where: {
      id,
    },
    include: {
      members: true,
      owner: true,
      projects: false,
    },
  });

  return workspace;
}

export async function updateWorkspaceService(
  id: string,
  workspaceData: Workspace
) {
  await prisma.workspace.update({
    where: {
      id,
    },
    data: workspaceData,
  });
}

export async function deleteWorkspaceService(id: string) {
  await prisma.workspace.delete({
    where: {
      id,
    },
  });
}
