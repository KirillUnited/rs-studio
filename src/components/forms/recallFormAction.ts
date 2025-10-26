"use server";
import { recallSchema, type RecallFormData } from "./schemas";

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
    // TODO: handle successful submission (e.g., send email, save to db)
    console.log("Recall form submitted:", parsed.data);
    return { status: "success" };
  } catch (error) {
    return {
      status: "error",
      errors: { form: ["Unexpected server error"] },
    };
  }
}
