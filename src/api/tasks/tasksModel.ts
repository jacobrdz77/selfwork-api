import z from "zod";
import ColorValidator from "../../interfaces/ColorValidator";

export const TagValidator = z.object({
  name: z.string(),
  taskId: z.string(),
  color: ColorValidator,
});

export const UpdateTasksOrderValidator = z.object({
  firstTask: z.object({
    id: z.string(),
    order: z.number().nonnegative(),
  }),
  secondTask: z.object({
    id: z.string(),
    order: z.number().nonnegative(),
  }),
});

export const TaskValidator = z.object({
  name: z.string(),
  sectionId: z.string().optional(),
  description: z.string().nullish(),
  priority: z.enum(["None", "Low", "Medium", "High"]).default("None"),
  status: z.enum(["Open", "InProgress", "InReview", "Delayed"]).default("Open"),
  isComplete: z.boolean().optional().default(false),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  assigneeId: z.string().nullish(),
  order: z.number().nonnegative().optional(),
  updatedAt: z.date().optional(),
  createdAt: z.date().optional(),
  // tags: z.array(TagValidator).optional(),
});

export const UpdateTaskValidator = TaskValidator.partial();

export type UpdateTaskOrder = z.infer<typeof UpdateTasksOrderValidator>;
export type TaskWithOrder = { id: string; order: number };
export type Task = z.infer<typeof TaskValidator>;
