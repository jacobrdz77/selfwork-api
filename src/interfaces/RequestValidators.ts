import { AnyZodObject } from "zod";

export default interface RequestValidators {
  params?: AnyZodObject;
  query?: AnyZodObject;
  body?: AnyZodObject;
}
