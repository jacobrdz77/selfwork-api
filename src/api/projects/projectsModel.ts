import z from "zod";

const Color = z.enum([
  "Classic",
  "Maroon",
  "OrangeYellow",
  "YellowGreen",
  "Forest",
  "BlueGreen",
  "Aqua",
  "Blue",
  "Purple",
  "PinkPurple",
  "Pink",
  "Oat",
]);

export const ProjectValidator = z.object({
  name: z.string(),
  description: z.string().optional(),
  lumpSum: z.number().optional(),
  monthlyPay: z.number().nonnegative().optional(),
  workspaceId: z.string(),
  ownerId: z.string(),
  clientId: z.string().optional(),
  order: z.number().nonnegative(),
  priority: z.enum(["None", "Low", "Medium", "High"]),
  iconColor: Color,
  startDate: z.date().optional(),
  dueDate: z.date().optional(),
});

export type Project = z.infer<typeof ProjectValidator>;
