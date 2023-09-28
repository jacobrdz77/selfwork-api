import z from "zod";

export const UserValidator = z.object({
  name: z.string(),
  email: z.string().email().nullish(),
  emailVerified: z.string().nullish(),
  mobilePhone: z.string().nullish(),
  image: z.string().nullish(),
  userAssignedTasksSectionId: z.string().nullish(),
  lastUsingWorkspaceId: z.string().nullish(),

  // clients: z.array(z.object({})).optional(),
  // assignedTasks: z.array(z.object({})).optional(),
  // ownedWorkspaces: z.array(z.object({})).optional(),
  // involvedWorkspaces: z.array(z.object({})).optional(),
  // ownedProjects: z.array(ProjectValidator).optional(),
  // involvedProjects: z.array(ProjectValidator).optional(),
  // userSections: z.array(SectionUserValidator).optional(),
});

export type User = z.infer<typeof UserValidator>;
