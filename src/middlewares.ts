import { NextFunction, Request, Response } from "express";

import ErrorResponse from "./interfaces/ErrorResponse";
import { ZodIssue } from "zod";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(
  err: Error & { issues: ZodIssue[] },
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  // For Zod errors
  if (Object.hasOwn(err, "issues")) {
    return res.status(400).json({
      message: "Zod Error",
      issues: err.issues,
    });
  } else {
    res.status(statusCode);
    return res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    });
  }
}
