import z from "zod";

export const WorkspaceValidator = z.object({
  name: z.string(),
  description: z.string().optional(),
  ownerId: z.string(),
  // projects: z.array(ProjectValidator).optional(),
  // inviteLinks: z.array(z.object({})).optional(),
});

export type Workspace = z.infer<typeof WorkspaceValidator>;
