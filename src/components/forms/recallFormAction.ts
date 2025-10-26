"use server";
import { recallSchema, type RecallFormData } from "./schemas";
import { sendOrderMessage } from '@/lib/messenger'

// Server Action
export async function submitRecallForm(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      agreement: formData.get("agreement") === "true",
    };
    const parsed = recallSchema.safeParse(data);
    if (!parsed.success) {
      return {
        status: "error",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    await sendOrderMessage(data);

    return { status: "success" };
  } catch (error) {
    return {
      status: "error",
      errors: { form: ["Unexpected server error"] },
    };
  }
}
