import z from "zod";

const ContactValidator = z.object({
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string().nullish(),
  jobTitle: z.string().nullish(),
  clientId: z.string(),
});

export const ClientValidator = z.object({
  name: z.string().min(2),
  companyName: z.string().nullish(),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  businessAddress: z.string().nullish(),
  userId: z.string(),
  order: z.number().nonnegative(),
  status: z.enum(["Active", "Pending", "Closed"]).default("Pending"),
  totalMonthly: z.number().nonnegative(),
  totalLumpSum: z.number().nonnegative(),
  // contacts: z.array(ContactValidator).nullish(),
  // projects: z.array(ProjectValidator).nullish(),
});

export type Client = z.infer<typeof ClientValidator>;
