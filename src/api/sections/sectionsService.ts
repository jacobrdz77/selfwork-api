// Here is where the business logic is
import prisma from "../../lib/prisma/prismaClient";
import { Section, SectionWithOrder } from "./sectionsModel";

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
  const sections = await prisma.section.findMany({
    where: {
      projectId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return sections;
}

export async function updateTwoSectionsService(
  firstSection: SectionWithOrder,
  secondSection: SectionWithOrder
) {
  const updatedFirstSection = await prisma.section.update({
    where: {
      id: firstSection.id,
    },
    data: {
      //! Use the other section's ORDER
      order: secondSection.order,
    },
  });

  const updatedSecondSection = await prisma.section.update({
    where: {
      id: secondSection.id,
    },
    data: {
      //! Use the other section's ORDER
      order: firstSection.order,
    },
  });

  return { updatedFirstSection, updatedSecondSection };
}

export async function updateSectionService(id: string, sectionData: Section) {
  const updatedSection = await prisma.section.update({
    where: {
      id,
    },
    data: {
      name: sectionData.name,
    },
  });

  return updatedSection;
}

export async function deleteSectionService(id: string) {
  const deletedSection = await prisma.section.delete({
    where: {
      id,
    },
  });

  return deletedSection;
}
