import { NextFunction, Request, Response } from "express";
import {
  createSectionService,
  findAllSectionsService,
} from "./sectionsService";
import { Section } from "./sectionsModel";

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

export default {
  createSection,
  getAllSections,
};
