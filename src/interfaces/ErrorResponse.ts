import { ZodIssue } from "zod";
import MessageResponse from "./MessageResponse";

export default interface ErrorResponse extends MessageResponse {
  stack?: string;
  issues?: ZodIssue[];
}
