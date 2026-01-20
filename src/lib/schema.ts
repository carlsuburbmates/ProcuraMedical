import { z } from "zod";

export const deliverySchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number required"),
  address: z.string().min(5, "Full delivery address is required"),
  state: z.string().min(2, "State is required"),
  postcode: z.string().min(4, "Valid postcode required"),
});

export const planDetailsSchema = z.object({
  participantName: z.string().min(2, "Participant name is required"),
  ndisNumber: z.string().min(9, "Valid NDIS number required"),
  planManagerEmail: z.string().email("Plan manager email is required").optional().or(z.literal("")),
});

export type DeliveryDetails = z.infer<typeof deliverySchema>;
export type PlanDetails = z.infer<typeof planDetailsSchema>;

export type FundingType = "plan-managed" | "self-managed" | "ndia-managed" | null;
