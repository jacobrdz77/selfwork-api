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

const ProjectStatus = z.enum([
  "Active",
  "OnTrack",
  "OffTrack",
  "OnHold",
  "InTesting",
  "Approved",
]);

export const ProjectValidator = z.object({
  name: z.string(),
  workspaceId: z.string(),
  ownerId: z.string(),
  clientId: z.string().nullish(),
  description: z.string().optional(),
  lumpSum: z.number().nullish(),
  monthlyPay: z.number().nonnegative().nullish(),
  priority: z.enum(["None", "Low", "Medium", "High"]),
  order: z.number().nonnegative().nullish(),
  iconColor: Color.nullish(),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),

  // Commented all schemas that z.array()
  // These don't because encapsulating schemas don't work
  // sections: z.array(SectionProjectValidator).optional(),
  // notes: z.array(z.object({})).optional(),
  // sketches: z.array(z.object({})).optional(),
  // members: z.array(UserValidator).optional(),
  // inviteLinks: z.array(z.object({})).optional(),
});

export type Project = z.infer<typeof ProjectValidator>;
