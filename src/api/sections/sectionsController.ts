import { NextFunction, Request, Response } from "express";
import {
  createSectionService,
  deleteSectionService,
  findAllSectionsService,
  updateSectionService,
  updateTwoSectionsService,
} from "./sectionsService";
import { Section, UpdateSectionOrder } from "./sectionsModel";

async function createSection(
  req: Request<{ id: string }, {}, Section>,
  res: Response,
  next: NextFunction
) {
  try {
    const createdSection = await createSectionService(req.params.id, req.body);
    return res.status(200).json(createdSection);
  } catch (error) {
    next(error);
  }
}

async function getAllSections(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const sections = await findAllSectionsService(req.params.id);
    return res.status(200).json(sections);
  } catch (error) {
    next(error);
  }
}

async function updateTwoSectionsOrder(
  req: Request<{}, {}, UpdateSectionOrder>,
  res: Response,
  next: NextFunction
) {
  try {
    await updateTwoSectionsService(
      req.body.firstSection,
      req.body.secondSection
    );
    return res.status(204).json({});
    // return res.status(200).json(updatedSections);
  } catch (error) {
    next(error);
  }
}

async function updateSection(
  req: Request<{ id: string }, {}, Section>,
  res: Response,
  next: NextFunction
) {
  try {
    await updateSectionService(req.params.id, req.body);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}
async function deleteSection(
  req: Request<{ id: string }, {}, Section>,
  res: Response,
  next: NextFunction
) {
  try {
    await deleteSectionService(req.params.id);
    return res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

export default {
  createSection,
  getAllSections,
  updateTwoSectionsOrder,
  updateSection,
  deleteSection,
};
