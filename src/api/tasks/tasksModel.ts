import z from "zod";
import ColorValidator from "../../interfaces/ColorValidator";

const TagValidator = z.object({
  name: z.string(),
  taskId: z.string(),
  color: ColorValidator,
});

const TaskValidator = z.object({
  name: z.string(),
  description: z.string().nullish(),
  priority: z.enum(["None", "Low", "Medium", "High"]).default("None"),
  status: z.enum(["Open", "InProgress", "InReview", "Delayed"]).default("Open"),
  isComplete: z.boolean().default(false),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  sectionId: z.string(),
  assigneeId: z.string().optional(),
  order: z.number().nonnegative(),
  updatedAt: z.date().optional(),
  createdAt: z.date().optional(),
  // tags: z.array(TagValidator).optional(),
});

export type Task = z.infer<typeof TaskValidator>;
