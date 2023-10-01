import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import ErrorResponse from "./interfaces/ErrorResponse";
import RequestValidators from "./interfaces/RequestValidators";
import { Prisma } from "@prisma/client";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(
  error: Error & ZodError,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  // For Zod errors
  if (error.name === "ZodError") {
    // 422 means "Unprocessable Entity"
    return res.status(422).json({
      message: "Zod Error",
      issues: error.issues,
    });
  }

  // Prisma Errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2025":
        return res.status(404).json({
          message:
            "An operation failed because it depends on one or more records that were required but not found.",
        });
      default:
        return res.status(400).json({
          message: error.message,
        });
    }
  }

  return res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
}

export function validateRequest(validators: RequestValidators) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validators.params) {
        req.params = validators.params.parse(req.params);
      }
      if (validators.query) {
        req.query = validators.query.parse(req.query);
      }
      if (validators.body) {
        req.body = validators.body.parse(req.body);
      }

      // Goes to the controller function
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(422);
      }
      next(error);
    }
  };
}
