import z from "zod";

export const SectionValidator = z.object({
  name: z.string(),
  projectId: z.string().nullish(),
  userId: z.string().nullish(),
  order: z.number().nonnegative().optional(),
  createdAt: z.date().nullish(),
  // tasks: z.array(z.object({})).optional(),
});

export type Section = z.infer<typeof SectionValidator>;
