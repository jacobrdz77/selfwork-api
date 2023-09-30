// Here is where the business logic is
import prisma from "../../lib/prisma/prismaClient";
import randomColor from "../../utils/randomColor";
import { Project } from "./projectsModel";

// Create Project
export async function createProjectService(project: Project) {
  const newProject = await prisma.project.create({
    data: {
      name: project.name,
      description: project.description,
      lumpSum: project.lumpSum,
      priority: project.priority,
      startDate: project.startDate,
      dueDate: project.dueDate,
      iconColor: randomColor(),
      workspace: {
        connect: {
          id: project.workspaceId,
        },
      },
      owner: {
        connect: {
          id: project.ownerId,
        },
      },
      members: {
        connect: {
          id: project.ownerId,
        },
      },
      client: project.clientId
        ? {
            connect: {
              id: project.clientId,
            },
          }
        : undefined,
      // Creates a new section on every new project
      sections: {
        create: {
          name: "Untitled Section",
        },
      },
    },
  });

  return newProject;
}
// Find One Project
export async function findOneProjectService() {}
// Find All Projects
export async function findAllProjectService(workspaceId: string) {
  const projects = await prisma.project.findMany({
    where: {
      workspaceId: workspaceId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return projects;
}
// Update Project
export async function updateProjectService() {}
// Delete Project
export async function deleteProjectService() {}
