import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import ErrorResponse from "./interfaces/ErrorResponse";
import RequestValidators from "./interfaces/RequestValidators";

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

export function errorHandler(
  err: Error & ZodError,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  // For Zod errors
  if (Object.hasOwn(err, "issues")) {
    // 422 means "Unprocessable Entity"
    return res.status(422).json({
      message: "Zod Error",
      issues: err.issues,
    });
  }

  return res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
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
