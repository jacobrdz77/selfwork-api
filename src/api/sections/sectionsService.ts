// Here is where the business logic is
import prisma from "../../lib/prisma/prismaClient";
import { Section } from "./sectionsModel";

// Create Section
export async function createSectionService(
  projectId: string,
  sectionData: Section
) {
  const newSection = await prisma.section.create({
    data: {
      name: sectionData.name,
      project: {
        connect: {
          id: projectId,
        },
      },
    },
    include: {
      tasks: true,
    },
  });
  return newSection;
}

// Find All Sections
export async function findAllSectionsService(projectId: string) {
  const Sections = await prisma.section.findMany({
    where: {
      projectId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return Sections;
}
