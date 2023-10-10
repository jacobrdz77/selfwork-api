import z from "zod";

export const ClientValidator = z.object({
  name: z.string(),
  userId: z.string(),
  companyName: z.string().nullish(),
  phone: z.string().nullish(),
  email: z.string().email().nullish(),
  businessAddress: z.string().nullish(),
  order: z.number().nonnegative().nullish(),
  status: z.enum(["Active", "Pending", "Closed"]).default("Pending"),
  totalMonthly: z.number().nonnegative().optional(),
  totalLumpSum: z.number().nonnegative().optional(),
  // contacts: z.array(ContactValidator).nullish(),
  // projects: z.array(ProjectValidator).nullish(),
});

export const UpdateClientValidator = ClientValidator.partial();
export const ClientQueryValidator = z.object({
  userId: z.string(),
});

export type Client = z.infer<typeof ClientValidator>;
