"use server";

import { z } from "zod";

// Belarus phone regex: +375 (XX) XXX-XX-XX or 80 (XX) XXX-XX-XX
export const recallSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(/^(\+375|80)(\s?\(?\d{2}\)?\s?)[\d\s-]{7,}$/,
      "Enter a valid Belarus phone number"),
  agreement: z.literal(true, {
    errorMap: () => ({ message: "You must agree with the privacy policy" }),
  }),
});

export type RecallFormData = z.infer<typeof recallSchema>;

// Server Action
export async function submitRecallForm(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      agreement: formData.get("agreement") === "on",
    };
    const parsed = recallSchema.safeParse(data);
    if (!parsed.success) {
      return {
        status: "error",
        errors: parsed.error.flatten().fieldErrors,
      };
    }
    // TODO: handle successful submission (e.g., send email, save to db)
    return { status: "success" };
  } catch (error) {
    return {
      status: "error",
      errors: { form: ["Unexpected server error"] },
    };
  }
}
