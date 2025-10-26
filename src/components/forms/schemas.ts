import { z } from "zod";

// Belarus phone regex: +375 (XX) XXX-XX-XX or 80 (XX) XXX-XX-XX
export const recallSchema = z.object({
  name: z.string().min(1, "Введите ваше имя"),
  phone: z
    .string()
    .regex(
      /^(\+375|80)(\s?\(?\d{2}\)?\s?)[\d\s-]{7,}$/,
      "Введите корректный номер телефона"
    ),
  agreement: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие на обработку персональных данных",
  }),
});

export type RecallFormData = z.infer<typeof recallSchema>;
