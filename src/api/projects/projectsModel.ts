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
  lumpSum: z.number().nullish(),
  monthlyPay: z.number().nonnegative().nullish(),
  priority: z.enum(["None", "Low", "Medium", "High"]),
  workspaceId: z.string(),
  ownerId: z.string(),
  clientId: z.string().nullish(),
  order: z.number().nonnegative().nullish(),
  iconColor: Color.nullish(),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
});

export type Project = z.infer<typeof ProjectValidator>;
