import { z } from "zod";

// Belarus phone regex: +375 (XX) XXX-XX-XX or 80 (XX) XXX-XX-XX
export const recallSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(
      /^(\+375|80)(\s?\(?\d{2}\)?\s?)[\d\s-]{7,}$/,
      "Enter a valid Belarus phone number"
    ),
  agreement: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});

export type RecallFormData = z.infer<typeof recallSchema>;
