import z from "zod";

export const SectionValidator = z.object({
  id: z.string().optional(),
  name: z.string(),
  projectId: z.string().nullish(),
  userId: z.string().nullish(),
  order: z.number().nonnegative().optional(),
  createdAt: z.date().optional(),
  // tasks: z.array(z.object({})).optional(),
});

export const UpdateSectionsOrderValidator = z.object({
  firstSection: z.object({
    id: z.string(),
    order: z.number(),
  }),
  secondSection: z.object({
    id: z.string(),
    order: z.number(),
  }),
});

export type UpdateSectionOrder = z.infer<typeof UpdateSectionsOrderValidator>;
export type SectionWithOrder = { id: string; order: number };

export type Section = z.infer<typeof SectionValidator>;
