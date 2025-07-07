import z from "zod";

export const applyLoanSchema = z.object({
  amount: z.string().min(3, { message: "Amount is required" }),
  purpose: z.string(),
});
