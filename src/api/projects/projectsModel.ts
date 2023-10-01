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

export const ProjectValidator = z
  .object({
    name: z.string(),
    workspaceId: z.string(),
    ownerId: z.string(),
    priority: z.enum(["None", "Low", "Medium", "High"]).nullish(),
    clientId: z.string().nullish(),
    description: z.string().optional(),
    startDate: z.date().nullish(),
    dueDate: z.date().nullish(),
    monthlyPay: z.number().nonnegative().nullish(),
    lumpSum: z.number().nullish(),

    // These properties are generated in backend
    iconColor: Color.optional(),
    order: z.number().nonnegative().nullish(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    // Commented all schemas that z.array()
    // These are commented out because encapsulating schemas don't work
    // sections: z.array(SectionProjectValidator).optional(),
    // sketches: z.array(z.object({})).optional(),
    // members: z.array(UserValidator).optional(),
    // inviteLinks: z.array(z.object({})).optional(),
  })
  .strict();

export const UpdateProjectValidator = ProjectValidator.partial();

export const ProjectQueryValidator = z.object({
  workspaceId: z.string(),
});

export type Project = z.infer<typeof ProjectValidator>;
