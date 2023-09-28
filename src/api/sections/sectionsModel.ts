import z from "zod";

export const SectionEntity = z.object({
  name: z.string(),
  projectId: z.string(),
  userId: z.string(),
  order: z.number().nonnegative(),
  createdAt: z.date().nullish(),
  // tasks: z.array(z.object({})).optional(),
});

export const SectionProjectValidator = SectionEntity.omit({
  userId: true,
});
export const SectionUserValidator = SectionEntity.omit({
  projectId: true,
});

export type Section = z.infer<typeof SectionEntity>;
