import express from "express";
import { validateRequest } from "../../middlewares";
import { SectionValidator } from "./sectionsModel";
import sectionsController from "./sectionsController";

const router = express.Router();

export default router;
