// Here is where the business logic is
import prisma from "../../lib/prisma/prismaClient";
import randomColor from "../../utils/randomColor";
import { Project } from "./projectsModel";

// Create Project
export async function createProjectService(project: Project) {
  const projects = await prisma.project.create({
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

  return projects;
}
// Find One Project
export async function findOneProjectService() {}
// Find All Projects
export async function findAllProjectService() {}
// Update Project
export async function updateProjectService() {}
// Delete Project
export async function deleteProjectService() {}
